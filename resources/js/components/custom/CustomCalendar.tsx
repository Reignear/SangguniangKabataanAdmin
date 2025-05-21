/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format, getMonth, getYear, setMonth, setYear } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const FormSchema = z.object({
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
});

interface CustomCalendarProps {
    Label?: string;
    onChange?: (date: Date | undefined) => void;
    value?: Date | null;
    id?: string;
}

export function CustomCalendar({ Label, onChange, value, id }: CustomCalendarProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            dob: value ?? undefined,
        },
    });

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 1950 + i);

    const handleChangeMonth = (month: string, field: any) => {
        const newDate = setMonth(value ?? new Date(), months.indexOf(month));
        field.onChange(newDate);
        onChange?.(newDate);
    };

    const handleChangeYear = (year: string, field: any) => {
        const newDate = setYear(value ?? new Date(), parseInt(year, 10));
        field.onChange(newDate);
        onChange?.(newDate);
    };

    return (
        <Form {...form}>
            <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>{Label}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={'outline'}
                                        className={cn('w-64 pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                                    >
                                        {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0" align="start">
                                <div className="flex flex-row gap-2 p-2">
                                    <Select
                                        onValueChange={(value) => handleChangeMonth(value, field)}
                                        value={field.value ? months[getMonth(field.value)] : undefined}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {months.map((month) => (
                                                    <SelectItem key={month} value={month}>
                                                        {month}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Select
                                        onValueChange={(value) => handleChangeYear(value, field)}
                                        value={field.value ? getYear(field.value).toString() : undefined}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {years.map((year) => (
                                                    <SelectItem key={year} value={year.toString()}>
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Calendar
                                    id={id}
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(date) => {
                                        field.onChange(date);
                                        onChange?.(date);
                                    }}
                                    disabled={(date) => date > new Date()}
                                    month={field.value ?? undefined}
                                    onMonthChange={(date) => {
                                        field.onChange(date);
                                        onChange?.(date);
                                    }}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Form>
    );
}
