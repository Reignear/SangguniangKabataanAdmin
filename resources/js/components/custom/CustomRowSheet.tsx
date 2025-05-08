/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface RowDetailSheetProps<T> {
    isOpen: boolean;
    onClose: () => void;
    data: T | null;
    columns: Array<{ id: string; header: string; accessorKey: string }>;
    onStatusToggle?: (row: T) => void;
}

export function RowDetailSheet<T extends Record<string, any>>({ isOpen, onClose, data, columns, onStatusToggle }: RowDetailSheetProps<T>) {
    if (!data) return null;

    // Check if the row has a status field and determine if it's active
    const hasStatus = 'status' in data;
    const isActive = hasStatus && data.status === 'Active';

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <SheetContent className="sm:max-w-md">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle>Row Details</SheetTitle>
                </SheetHeader>
                <SheetDescription className="p-5">View and edit the details for this record.</SheetDescription>

                <div className="mt-6 space-y-4 p-5">
                    {columns.map((column) => (
                        <div key={column.id} className="grid grid-cols-3 items-center gap-4">
                            <div className="font-medium">{column.header}</div>
                            <div className="col-span-2 break-words">{data[column.accessorKey]}</div>
                        </div>
                    ))}

                    <div className="mt-6 space-y-4 border-t pt-4">
                        {hasStatus && onStatusToggle && (
                            <div>
                                {isActive ? (
                                    <Button className="w-full" variant="destructive" onClick={() => onStatusToggle(data)}>
                                        Set Inactive
                                    </Button>
                                ) : (
                                    <Button className="w-full" variant="add" onClick={() => onStatusToggle(data)}>
                                        Set Active
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
