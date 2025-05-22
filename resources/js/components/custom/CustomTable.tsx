/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { FilterConfig } from '../custom/CustomFilter';
import { FilterBar, type FilterValues } from '../custom/CustomFilterBar';
import { Pagination } from '../custom/CustomPagination';
import { RowDetailSheet } from '../custom/CustomRowSheet';

// Import the sort icons from lucide-react
import { ArrowDown, ArrowUp } from 'lucide-react';

export interface Column {
    id: string;
    header: string;
    accessorKey: string;
    enableSorting?: boolean;
    columnClassName?: string;
}

interface FilterableTableProps<T> {
    data: T[];
    columns: Column[];
    filters: FilterConfig[];
    initialPageSize?: number;
    onDataChange?: (newData: T[]) => void;
    defaultSortColumn?: string;

}

export function FilterableTable<T extends Record<string, any>>({
    data,
    columns,
    filters,
    initialPageSize = 5,
    onDataChange,
    defaultSortColumn,

}: FilterableTableProps<T>) {
    const [activeFilters, setActiveFilters] = useState<FilterValues>({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [selectedRow, setSelectedRow] = useState<T | null>(null);
    const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);
    const [tableData, setTableData] = useState<T[]>(data);

    // Find a default sort column - either use the provided one or find the first sortable column
    const initialSortColumn = useMemo(() => {
        if (defaultSortColumn) return defaultSortColumn;
        const sortableColumn = columns.find((col) => col.enableSorting);
        return sortableColumn ? sortableColumn.accessorKey : null;
    }, [columns, defaultSortColumn]);

    // Set initial sort state with the determined column and 'asc' direction
    const [sortColumn, setSortColumn] = useState<string | null>(initialSortColumn);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    // Update internal data when external data changes
    useEffect(() => {
        setTableData(data);
    }, [data]);

    // Handle filter change
    const handleFilterChange = useCallback(
        (filters: FilterValues) => {
            setActiveFilters(filters);
            // Reset to first page when filters change, but not on initial load
            if (!isInitialLoad) {
                setCurrentPage(1);
            }
        },
        [isInitialLoad],
    );

    // Handle filter reset
    // const handleFilterReset = useCallback(() => {
    //     setActiveFilters({});
    //     setCurrentPage(1);
    // }, []);

    // After initial render, set isInitialLoad to false
    useEffect(() => {
        if (isInitialLoad) {
            setIsInitialLoad(false);
        }
    }, [isInitialLoad]);

    const filteredData = useMemo(() => {
        // First filter the data
        const filtered = tableData.filter((row) => {
            // Check if the row matches all active filters
            return Object.entries(activeFilters).every(([filterId, filterValue]) => {
                // Skip empty filter values
                if (!filterValue || filterValue === 'all') return true;

                // Find the corresponding filter config
                const filterConfig = filters.find((f) => f.id === filterId);
                if (!filterConfig) return true;

                // Get the column to filter on
                const columnToFilter = filterConfig.id;

                // Get the value from the row
                const cellValue = String(row[columnToFilter] || '').toLowerCase();

                // For select filters, do an exact match
                if (filterConfig.type === 'select') {
                    return cellValue === filterValue.toLowerCase();
                }

                // For input filters, do a contains match
                return cellValue.includes(filterValue.toLowerCase());
            });
        });

        // Then sort the filtered data if a sort column is selected
        if (sortColumn) {
            return [...filtered].sort((a, b) => {
                const aValue = String(a[sortColumn] || '').toLowerCase();
                const bValue = String(b[sortColumn] || '').toLowerCase();

                if (sortDirection === 'asc') {
                    return aValue.localeCompare(bValue);
                } else {
                    return bValue.localeCompare(aValue);
                }
            });
        }

        return filtered;
    }, [tableData, activeFilters, filters, sortColumn, sortDirection]);

    // Calculate pagination
    const totalItems = filteredData.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

    // Ensure current page is valid
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    // Get current page data
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredData.slice(startIndex, startIndex + pageSize);
    }, [filteredData, currentPage, pageSize]);

    // Handle page change
    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    // Handle page size change
    const handlePageSizeChange = useCallback((size: number) => {
        setPageSize(size);
        // Reset to first page when changing page size
        setCurrentPage(1);
    }, []);

    // Handle keyboard navigation
    const handleKeyboardNavigation = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            // Only handle if Alt key is pressed
            if (e.altKey) {
                switch (e.key) {
                    case 'ArrowLeft':
                        // Previous page
                        if (currentPage > 1) {
                            handlePageChange(currentPage - 1);
                        }
                        break;
                    case 'ArrowRight':
                        // Next page
                        if (currentPage < totalPages) {
                            handlePageChange(currentPage + 1);
                        }
                        break;
                    case 'Home':
                        // First page
                        handlePageChange(1);
                        break;
                    case 'End':
                        // Last page
                        handlePageChange(totalPages);
                        break;
                    default:
                        break;
                }
            }
        },
        [currentPage, handlePageChange, totalPages],
    );

    // Handle row click
    const handleRowClick = (row: T) => {
        setSelectedRow(row);
        setIsDetailSheetOpen(true);
    };

    // Close detail sheet
    const handleCloseDetailSheet = () => {
        setIsDetailSheetOpen(false);
        // Optional: clear selected row after animation completes
        setTimeout(() => setSelectedRow(null), 300);
    };

    // Handle status toggle
    const handleStatusToggle = useCallback(
        (row: T) => {
            if (!('status' in row) || !('id' in row)) return;

            // Create updated data
            // const newData = tableData.map((item) => {
            //     if ('id' in item && item.id === row.id) {
            //         return {
            //             ...item,
            //             status: item.status === 'Active' ? 'Inactive' : 'Active',
            //         };
            //     }
            //     return item;
            // });

            // Update internal state
            // setTableData(newData);

            // Update selected row to reflect changes
            if (selectedRow && 'id' in selectedRow && selectedRow.id === row.id) {
                setSelectedRow({
                    ...selectedRow,
                    status: selectedRow.status === 'Active' ? 'Inactive' : 'Active',
                } as T);
            }

            // Notify parent component if callback provided
            if (onDataChange) {
                // onDataChange(newData);
            }
        },
        [tableData, selectedRow, onDataChange],
    );

    // Handle column sorting
    const handleSort = useCallback(
        (columnId: string) => {
            // If clicking the same column, toggle direction
            if (sortColumn === columnId) {
                setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
            } else {
                // New column, set to ascending by default
                setSortColumn(columnId);
                setSortDirection('asc');
            }
        },
        [sortColumn],
    );

    return (
        <div className="space-y-4" onKeyDown={handleKeyboardNavigation} tabIndex={0} role="region" aria-label="Filterable table with pagination">
            <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                // onReset={handleFilterReset}
                className="bg-muted/20 rounded-md border p-4"
            />

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {columns.map((column) => (
                                <TableHead
                                    key={column.id}
                                    className={`${column.enableSorting ? 'cursor-pointer select-none' : ''} ${column.columnClassName || ''}`}
                                    onClick={() => column.enableSorting && handleSort(column.accessorKey)}
                                >
                                    <div className="flex items-center space-x-1">
                                        <span>{column.header}</span>
                                        {column.enableSorting && (
                                            <span className="ml-1">
                                                {sortColumn === column.accessorKey ? (
                                                    sortDirection === 'asc' ? (
                                                        <ArrowUp className="h-4 w-4" />
                                                    ) : (
                                                        <ArrowDown className="h-4 w-4" />
                                                    )
                                                ) : (
                                                    // Show a faded up arrow for sortable columns that aren't currently sorted
                                                    <ArrowUp className="h-4 w-4 opacity-20" />
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    onClick={() => handleRowClick(row)}
                                    className="hover:bg-muted/50 cursor-pointer transition-colors"
                                >
                                    {columns.map((column) => (
                                        <TableCell key={`${rowIndex}-${column.id}`}>{row[column.accessorKey]}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
            />

            <RowDetailSheet
                isOpen={isDetailSheetOpen}
                onClose={handleCloseDetailSheet}
                data={selectedRow}
                columns={columns}
                onStatusToggle={handleStatusToggle}
            />
        </div>
    );
}
