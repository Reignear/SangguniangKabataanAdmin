import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CustomFormFieldProps {
    id?: string;
    label: string;
    type: string;
    placeholder?: string;
    value: string;
    tabIndex?: number;
    autoComplete?: string;
    onChange: (value: string) => void;
    autofocus?: boolean;
}
interface CustomFormProps {
    fields: CustomFormFieldProps[];
    title?: string;
    className?: string;
}

export default function CustomForm({ fields, title, className }: CustomFormProps) {
    const renderField = (field: CustomFormFieldProps) => {
        switch (field.type) {
            case 'textarea':
                return (
                    <textarea
                        id={field.id}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        tabIndex={field.tabIndex}
                        className="min-w-[60px]"
                    />
                );
            case 'date':
                return <Calendar id={field.id} className="w-full" />;
            default:
                return (
                    <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        id={field.id}
                        autoFocus={field.autofocus}
                        autoComplete={field.autoComplete}
                        tabIndex={field.tabIndex}
                        onChange={(e) => field.onChange(e.target.value)}
                    />
                );
        }
    };

    return (
        <form className="flex flex-col" action="">
            <h1 className="pb-1">{title}</h1>
            <div className={className}>
                {fields.map((field, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <Label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                            {field.label}
                        </Label>
                        {renderField(field)}
                    </div>
                ))}
            </div>
        </form>
    );
}
