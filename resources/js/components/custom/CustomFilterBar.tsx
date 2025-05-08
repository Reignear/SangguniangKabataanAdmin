'use client';

import { useEffect, useState } from 'react';
import { CustomFilter, type FilterConfig } from '../custom/CustomFilter';

export interface FilterValues {
    [key: string]: string;
}

interface FilterBarProps {
    filters: FilterConfig[];
    onFilterChange: (filters: FilterValues) => void;
    className?: string;
}

export function FilterBar({ filters, onFilterChange, className }: FilterBarProps) {
    const [filterValues, setFilterValues] = useState<FilterValues>(() => {
        // Initialize with empty values for all filters
        const initialValues: FilterValues = {};
        filters.forEach((filter) => {
            initialValues[filter.id] = '';
        });
        return initialValues;
    });

    const handleFilterChange = (id: string, value: string) => {
        setFilterValues((prev) => {
            const newValues = { ...prev, [id]: value };
            return newValues;
        });
    };

    // Reset all filters
    // const handleReset = () => {
    //     const resetValues: FilterValues = {};
    //     filters.forEach((filter) => {
    //         resetValues[filter.id] = '';
    //     });
    //     setFilterValues(resetValues);
    //     if (onReset) onReset();
    // };

    // Check if any filter is active
    // const hasActiveFilters = Object.values(filterValues).some((value) => value !== '' && value !== 'all');

    // Notify parent component when filters change
    useEffect(() => {
        onFilterChange(filterValues);
    }, [filterValues, onFilterChange]);

    return (
        <div className={className}>
            <div className="flex flex-row space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {filters.map((filter) => (
                        <CustomFilter key={filter.id} config={filter} value={filterValues[filter.id] || ''} onChange={handleFilterChange} />
                    ))}
                    {/* {hasActiveFilters && (
                        <div className="flex justify-end">
                            <Button variant="outline" size="sm" onClick={handleReset} className="flex items-center gap-1">
                                <X className="h-4 w-4" />
                                Clear filters
                            </Button>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}
