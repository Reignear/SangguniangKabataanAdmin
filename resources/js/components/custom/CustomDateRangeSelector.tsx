'use client';

import { CustomCalendar } from '@/components/custom/CustomCalendar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { format, isAfter } from 'date-fns';
import { AlertCircle, CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DateRangeSelectorProps {
    className?: string;
}

export function DateRangeSelector({ className }: DateRangeSelectorProps) {
    const [startDate, setStartDate] = useState<Date>(new Date(2023, 0, 1));
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [open, setOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Validate date range whenever dates change
    useEffect(() => {
        if (startDate && endDate && isAfter(startDate, endDate)) {
            setError('Start date cannot be after end date');
        } else {
            setError(null);
        }
    }, [startDate, endDate]);

    const handleStartDateChange = (date: Date | undefined) => {
        if (date) {
            setStartDate(date);
        }
    };

    const handleEndDateChange = (date: Date | undefined) => {
        if (date) {
            setEndDate(date);
        }
    };

    const applyDateRange = () => {
        if (!error) {
            setOpen(false);
        }
    };

    return (
        <div className={cn('grid gap-2', className)}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn('hover:bg-muted h-9 w-[240px] justify-start text-left font-normal shadow-sm transition-all')}
                    >
                        <CalendarIcon className="mr-2 h-3.5 w-3.5" />
                        {startDate && endDate ? (
                            <>
                                {format(startDate, 'LLL dd, y')} - {format(endDate, 'LLL dd, y')}
                            </>
                        ) : (
                            <span>Select date range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <div className="p-3">
                        <Tabs defaultValue="range" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="range">Date Range</TabsTrigger>
                                <TabsTrigger value="presets">Presets</TabsTrigger>
                            </TabsList>
                            <TabsContent value="range" className="space-y-4 pt-4">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="flex flex-col space-y-2">
                                        <div className="font-medium">Start Date</div>
                                        <CustomCalendar value={startDate} onChange={handleStartDateChange} id="start-date" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <div className="font-medium">End Date</div>
                                        <CustomCalendar value={endDate} onChange={handleEndDateChange} id="end-date" />
                                    </div>
                                </div>

                                {error && (
                                    <Alert variant="destructive" className="mt-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}

                                <div className="flex justify-end">
                                    <Button size="sm" onClick={applyDateRange} className="w-full" disabled={!!error}>
                                        Apply Range
                                    </Button>
                                </div>
                            </TabsContent>
                            <TabsContent value="presets">
                                <div className="flex flex-col space-y-2 p-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const today = new Date();
                                            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                                            setStartDate(startOfMonth);
                                            setEndDate(today);
                                            setOpen(false);
                                        }}
                                    >
                                        Current Month
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const today = new Date();
                                            const startOfQuarter = new Date(today.getFullYear(), Math.floor(today.getMonth() / 3) * 3, 1);
                                            setStartDate(startOfQuarter);
                                            setEndDate(today);
                                            setOpen(false);
                                        }}
                                    >
                                        Current Quarter
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const today = new Date();
                                            const startOfYear = new Date(today.getFullYear(), 0, 1);
                                            setStartDate(startOfYear);
                                            setEndDate(today);
                                            setOpen(false);
                                        }}
                                    >
                                        Year to Date
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const today = new Date();
                                            const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
                                            setStartDate(lastYear);
                                            setEndDate(today);
                                            setOpen(false);
                                        }}
                                    >
                                        Last 12 Months
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
