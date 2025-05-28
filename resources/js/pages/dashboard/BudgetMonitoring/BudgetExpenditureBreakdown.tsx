import { FilterableTable } from '@/components/custom/CustomTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { salaryColumn, salaryFilter } from '../../../../data/BudgetMonitoringData';

const salaryData = [
    { id: '1', position: 'Councilor', name: 'John Doe', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '2', position: 'Councilor', name: 'Jane Smith', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '3', position: 'Councilor', name: 'Bob Johnson', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '4', position: 'Councilor', name: 'Alice Brown', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '1', position: 'Councilor', name: 'John Doe', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '2', position: 'Councilor', name: 'Jane Smith', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '3', position: 'Councilor', name: 'Bob Johnson', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '4', position: 'Councilor', name: 'Alice Brown', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '1', position: 'Councilor', name: 'John Doe', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '2', position: 'Councilor', name: 'Jane Smith', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '3', position: 'Councilor', name: 'Bob Johnson', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
    { id: '4', position: 'Councilor', name: 'Alice Brown', amount: 1400, category: 'MOOE', date: 'June 3, 2003' },
];

export default function BudgetExpenditureBreakdown() {
    const [activeTab, setActiveTab] = useState('Salary');
    const BudgetExpenditureBreakdownNavButtons = ['Salary', 'Projects', 'Programs', 'Events'];
    return (
        <div className="flex h-full w-full flex-col gap-4 p-4 pt-0">
            <div className="text-card-foreground grid grid-cols-4 gap-2 rounded-sm border p-1 shadow-sm">
                {BudgetExpenditureBreakdownNavButtons.map((item) => (
                    <Button
                        variant="outline"
                        className={`text-muted-foreground border-none shadow-none ${activeTab === item ? 'bg-blue-500 text-white hover:bg-blue-500 hover:text-white' : ''}`}
                        onClick={() => setActiveTab(item)}
                    >
                        <span>{item}</span>
                    </Button>
                ))}
            </div>
            <Card className="rounded-sm">
                <CardContent>
                    {activeTab === 'Salary' && <FilterableTable columns={salaryColumn} filters={salaryFilter} data={salaryData} />}
                    {activeTab === 'Projects' && <FilterableTable columns={salaryColumn} filters={salaryFilter} data={salaryData} />}
                    {activeTab === 'Programs' && <FilterableTable columns={salaryColumn} filters={salaryFilter} data={salaryData} />}
                    {activeTab === 'Events' && <FilterableTable columns={salaryColumn} filters={salaryFilter} data={salaryData} />}
                </CardContent>
            </Card>
        </div>
    );
}
