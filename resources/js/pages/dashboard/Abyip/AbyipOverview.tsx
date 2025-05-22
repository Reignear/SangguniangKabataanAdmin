import { Card, CardContent } from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
export default function Overview() {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="m-5 flex flex-col">
                        <h1 className="text-2xl font-bold">Budget Distribution</h1>
                        <p className="text-muted-foreground">
                            Comprehensive overview of the Youth Investment Program budget allocation for the fiscal year
                            <span> 2025-2026</span>
                        </p>
                    </div>
                    <div className="h-[650px] p-4">
                        <div className="flex h-full w-full items-center justify-center p-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={[
                                            { value: 400, name: 'Program A' },
                                            { value: 400, name: 'Program A' },
                                            { value: 400, name: 'Program A' },
                                            { value: 400, name: 'Program A' },
                                            { value: 400, name: 'Program A' },
                                            { value: 400, name: 'Program A' },
                                        ]}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={230}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                        <Cell fill="#0088FE" />
                                        <Cell fill="#00C49F" />
                                        <Cell fill="#FFBB28" />
                                        <Cell fill="#0088FE" />
                                        <Cell fill="#00C49F" />
                                        <Cell fill="#FFBB28" />
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-4 grid grid-cols-3 gap-4">
                <Card>
                    <CardContent className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-xl font-bold">Administrative Costs</h1>
                            <p className="text-muted-foreground">Staff, Facilities, and operational expenses</p>
                            <p className="text-muted-foreground">
                                Type: <span>Program</span>
                            </p>
                            <p className="text-muted-foreground">
                                Participation: <span>Health</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold">
                                $ <span>700 000</span>
                            </h1>
                            <Progress className="h-4" value={30}></Progress>
                            <p className="text-muted-foreground text-sm">
                                <span>30% </span> from the whole budget
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
