import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency, tickFormatter } from '@/lib/utils';
 
import { Legend, LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Abyip from '../Abyip';

const lineGraphData = [
    {
        year: '2021-2022',
        total: 350000,
        health: 52000,
        educational: 110000,
        economicEmpowerment: 65000,
        socialInclusionEquity: 52000,
        peaceBuildingSecurity: 32500,
        governance: 13000,
        activeCitizenShip: 90000,
        environment: 190000,
        globalMobility: 50000,
        agriculture: 270000,
    },
    {
        year: '2022-2023',
        total: 37500,
        health: 60000,
        educational: 127500,
        economicEmpowerment: 750000,
        socialInclusionEquity: 600000,
        peaceBuildingSecurity: 375000,
        governance: 150000,
        activeCitizenShip: 100000,
        environment: 190000,
        globalMobility: 20000,
        agriculture: 200000,
    },
    {
        year: '2023-2024',
        total: 433000,
        health: 650000,
        educational: 1472000,
        economicEmpowerment: 866000,
        socialInclusionEquity: 736000,
        peaceBuildingSecurity: 433000,
        governance: 173000,
        activeCitizenShip: 120000,
        environment: 190000,
        globalMobility: 70000,
        agriculture: 190000,
    },
    {
        year: '2024-2025',
        total: 485000,
        health: 725000,
        educational: 1650000,
        economicEmpowerment: 970000,
        socialInclusionEquity: 825000,
        peaceBuildingSecurity: 485000,
        governance: 195000,
        activeCitizenShip: 105000,
        environment: 190000,
        globalMobility: 90000,
        agriculture: 220000,
    },
    {
        year: '2025-2026',
        total: 535000,
        health: 800000,
        educational: 1815000,
        economicEmpowerment: 1067000,
        socialInclusionEquity: 907000,
        peaceBuildingSecurity: 533000,
        governance: 213000,
        activeCitizenShip: 160000,
        environment: 190000,
        globalMobility: 10000,
        agriculture: 200000,
    },
];
const budgetCategories = [
    { key: 'total', color: '#0ea5e9', name: 'Total Budget', strokeWidth: 2, activeDot: { r: 8 } },
    { key: 'health', color: '#1F77B4', name: 'Health' },
    { key: 'educational', color: '#FF7F0E', name: 'Education' },
    { key: 'economicEmpowerment', color: '#2CA02C', name: 'Economic Empowerment' },
    { key: 'socialInclusionEquity', color: '#D62728', name: 'Social Inclusion and Equity' },
    { key: 'peaceBuildingSecurity', color: '#9467BD', name: 'Peace Building and Security' },
    { key: 'governance', color: '#8C564B', name: 'Governance' },
    { key: 'activeCitizenShip', color: '#E377C2', name: 'Active Citizenship' },
    { key: 'environment', color: '#7F7F7F', name: 'Environment' },
    { key: 'globalMobility', color: '#BCBD22', name: 'Global Mobility' },
    { key: 'agriculture', color: '#17BECF', name: 'Agriculture' },
];

export default function YearComparison() {
    return (
        <Abyip>
            <Card>
                <CardContent>
                    <div className="m-4">
                        <h1 className="text-2xl font-bold">Year-Over-Year Comparison</h1>
                        <p className="text-muted-foreground">Budget comparison with previous fiscal years to track growth and changes</p>
                    </div>
                    <div className="h-[600px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineGraphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="year" />
                                <YAxis tickFormatter={tickFormatter} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        padding: '10px',
                                        fontSize: '14px',
                                        color: '#333',
                                    }}
                                    formatter={(value: number, name: string) => [formatCurrency(value), name]}
                                />
                                <Legend />
                                {budgetCategories.map(({ key, color, name, strokeWidth, activeDot }) => (
                                    <Line
                                        key={key}
                                        type="monotone"
                                        dataKey={key}
                                        stroke={color}
                                        name={name}
                                        strokeWidth={strokeWidth}
                                        activeDot={activeDot}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </Abyip>
    );
}
