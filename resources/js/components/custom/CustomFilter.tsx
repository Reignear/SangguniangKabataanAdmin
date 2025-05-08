'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

export type FilterType = 'select' | 'input' | 'sort';

export interface FilterOption {
    value: string;
    label: string;
}

export interface FilterConfig {
    id: string;
    label: string;
    type: FilterType;
    placeholder?: string;
    options?: FilterOption[];
}

interface CustomFilterProps {
    className?: string;
    config: FilterConfig;
    value: string;
    onChange: (id: string, value: string) => void;
}

export function CustomFilter({ className, config, value, onChange }: CustomFilterProps) {
    const { id, type, placeholder, label, options = [] } = config;

    const handleChange = (newValue: string) => {
        onChange(id, newValue);
    };

    const renderFilterInput = () => {
        switch (type) {
            case 'select':
                return (
                    <Select value={value} onValueChange={(val) => handleChange(val)}>
                        <SelectTrigger className={cn('w-full', className)}>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );

            case 'input':
                return (
                    <Input type="text" className={className} placeholder={placeholder} value={value} onChange={(e) => handleChange(e.target.value)} />
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex w-full flex-col space-y-2">
            {label && <Label className="text-sm font-medium">{label}</Label>}
            <div className="flex w-full flex-row items-center justify-between gap-2">
                <div className="flex-1">{renderFilterInput()}</div>
            </div>
        </div>
    );
}
