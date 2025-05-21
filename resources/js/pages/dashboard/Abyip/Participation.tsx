import { Card, CardContent } from '@/components/ui/card';
import Abyip from '../Abyip';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Table } from 'lucide-react';
import {formatCurrency, tickFormatter} from '@/lib/utils';

const barChartData = [
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
    {
        name: 'Summer Sports Camp',
        budget: 380000,
        category: 'Recreational',
        impact: 'Medium',
        participants: 850,
        status: 'Active',
    },
    {
        name: 'Youth Leadership',
        budget: 320000,
        category: 'Career Development',
        impact: 'High',
        participants: 300,
        status: 'Active',
    },
];

export default function Participation() {
    return (
        <Abyip>
            <Card>
                <CardContent>
                    <div className="m-4">
                        <h1 className="text-2xl font-bold">Participation Breakdown</h1>
                        <p className="text-muted-foreground">Detailed breakdown of budget allocation across different youth programs.</p>
                    </div>
                    <div className="h-full">
                        <div className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={barChartData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis dataKey="name" angle={-20} textAnchor="end" height={100} />
                                    <YAxis tickFormatter={tickFormatter} />
                                    <Tooltip
                                        formatter={(value: number) => [formatCurrency(value), 'Budget']}
                                        labelFormatter={(label) => `Program: ${label}`}
                                    />
                                    <Legend />
                                    <Bar dataKey="budget" fill="#0ea5e9" name="Budget Allocation" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="m-4">
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-muted-foreground">Participation</TableHead>
                                            <TableHead className="text-muted-foreground">Budget Allocation</TableHead>
                                            <TableHead className="text-muted-foreground">Impact</TableHead>
                                            <TableHead className="text-muted-foreground">Participants</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Health</TableCell>
                                            <TableCell>
                                                ₱ <span>a</span>
                                            </TableCell>
                                            <TableCell>High</TableCell>
                                            <TableCell>15000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Health</TableCell>
                                            <TableCell>
                                                ₱ <span>a</span>
                                            </TableCell>
                                            <TableCell>High</TableCell>
                                            <TableCell>15000</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Abyip>
    );
}
