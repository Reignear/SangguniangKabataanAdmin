import { Card, CardContent } from '@/components/ui/card';
import { Activity, Calendar, ChartColumn, FileText } from 'lucide-react';

const StatCardData = [
    {
        title: 'Total Report',
        icon: FileText,
        value: '24',
        description: '+ 24 from last year',
    },
    {
        title: 'Total Budget Used',
        icon: ChartColumn,
        value: '₱ 1,500,000',
        description: '90% of the budget',
    },
    {
        title: 'Beneficiaries',
        icon: Activity,
        value: '150',
        description: 'Youth and Community Members',
    },
    {
        title: 'Next Report Due',
        icon: Calendar,
        value: 'June 3',
        description: 'Q2 2025',
    },
];
export default function StatCards() {
    return (
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
            {StatCardData.map((data) => (
                <Card key={data.title}>
                    <CardContent className="gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[10px] md:text-base">{data.title}</h1>
                            {data.icon && <data.icon className="h-5 w-5" />}
                        </div>
                        <h1 className="text-base font-semibold md:text-xl">{data.value}</h1>
                        {data.description && <p className="text-muted-foreground text-[8px] md:text-sm">{data.description}</p>}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
