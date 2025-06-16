'use client';

import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addYears, eachDayOfInterval, endOfMonth, format, getYear, startOfMonth, subYears } from 'date-fns';

// Define the type for the data
type DataItem = {
    date: string;
    value: number;
};

type DateRange = { start: Date; end: Date };

type CustomChartProps = {
    Data: DataItem[];
};

export default function CustomChart({ Data }: CustomChartProps) {
    const currentYear = getYear(new Date());
    const currentMonth = new Date().getMonth(); // 0-based month

    // Generate a range of years (5 years back, 5 years forward)
    const generateYears = () => {
        const years = [];
        const startYear = subYears(new Date(), 5).getFullYear();
        const endYear = addYears(new Date(), 5).getFullYear();

        for (let year = startYear; year <= endYear; year++) {
            years.push(year);
        }
        return years;
    };

    const years = generateYears();
    const months = Array.from({ length: 12 }, (_, i) => i); // 0-11 for all months

    const [selectedYear, setSelectedYear] = useState<number>(currentYear);
    const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth); // June (0-based)
    const [dateRange, setDateRange] = useState<DateRange>({
        start: new Date(),
        end: new Date(),
    });
    const [chartData, setChartData] = useState<unknown[]>([]);

    // Update date range when selections change
    useEffect(() => {
        const monthStart = startOfMonth(new Date(selectedYear, selectedMonth));
        const monthEnd = endOfMonth(new Date(selectedYear, selectedMonth));

        setDateRange({
            start: monthStart,
            end: monthEnd,
        });
    }, [selectedYear, selectedMonth]);

    // Process data based on selected date range
    useEffect(() => {
        // Generate all days in the date range
        const allDays = eachDayOfInterval({
            start: dateRange.start,
            end: dateRange.end,
        });

        // Create a map to store data by date
        const dataMap: Record<string, number> = {};

        // Initialize all days with zero values
        allDays.forEach((day) => {
            const dayKey = format(day, 'dd'); // Just day of month for cleaner x-axis
            dataMap[dayKey] = 0;
        });

        // Fill in actual data where it exists
        Data.forEach((item) => {
            const date = new Date(item.date);

            // Check if the date is within our range
            if (date >= dateRange.start && date <= dateRange.end) {
                const dayKey = format(date, 'dd');
                dataMap[dayKey] = item.value;
            }
        });

        // Convert map to array for the chart
        const formattedData = Object.keys(dataMap).map((key) => {
            return {
                period: key,
                value: dataMap[key],
            };
        });

        // Sort data by day of month
        formattedData.sort((a, b) => {
            const dayA = Number.parseInt(a.period);
            const dayB = Number.parseInt(b.period);
            return dayA - dayB;
        });

        setChartData(formattedData);
    }, [dateRange, Data]);

    // Get appropriate label based on selections
    const getLabel = () => {
        const monthName = format(new Date(selectedYear, selectedMonth), 'MMMM');
        return `${monthName} ${selectedYear}`;
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="ml-2 text-xl font-semibold">{getLabel()}</h2>

                <div className="flex  gap-2 flex-row sm:items-center">
                    <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(Number.parseInt(value))}>
                        <SelectTrigger className="w-28">
                            <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(Number.parseInt(value))}>
                        <SelectTrigger className="w-32">
                            <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                            {months.map((month) => (
                                <SelectItem key={month} value={month.toString()}>
                                    {format(new Date(2000, month, 1), 'MMMM')}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <ChartContainer
                config={{
                    value: {
                        label: 'Value',
                        color: 'hsl(var(--chart-1))',
                    },
                }}
                className="h-[300px] w-full sm:h-[355px]"
            >
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barGap={0}
                    barCategoryGap={1} // Minimal gap between bars
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="period" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Bar
                        dataKey="value"
                        fill="#1591EA"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={30} // Adjusted for better appearance with minimal gaps
                    />
                </BarChart>
            </ChartContainer>
        </div>
    );
}
