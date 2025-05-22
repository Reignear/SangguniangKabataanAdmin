import CustomBarChart from '@/components/custom/CustomBarChart';
import { Card, CardContent } from '@/components/ui/card';
const barChartData = [
    
    {
        name: 'After-School Tutoring',
        budget: 425000,
        category: 'Educational',
        impact: 'High',
        participants: 1200,
        status: 'Active',
    },
    {
        name: 'Scholarship Fund',
        budget: 650000,
        category: 'Educational',
        impact: 'High',
        participants: 450,
        status: 'Active',
    },
    {
        name: 'After-School Tutoring',
        budget: 425000,
        category: 'Educational',
        impact: 'High',
        participants: 1200,
        status: 'Active',
    },
  
];
const barMargins = { top: 20, right: 30, left: 20, bottom: 5 };

export default function BudgetOverview() {
    return (
        <Card className='rounded-sm w-full h-full'>
            <CardContent>
                <h1 className="text-2xl font-bold">Budget Expenditure Overview</h1>
                <p className="text-muted-foreground">Breakdown of expenses by category</p>
                <div className="h-full w-full">
                    <CustomBarChart
                        barChartData={barChartData}
                        barDataKey="budget"
                        barMargins={barMargins}
                        barFill="#1F77B4"
                        XDataKeyName="name"
                        XAngle={-20}
                        XTextAnchor="end"
                        XHeight={100}
                        barName="Budget Allocation"
                        className="h-[400px]"
                        toolTipValue="Budget"
                        toolTilLabel="Program:"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
