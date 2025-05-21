import { DateRangeSelector } from '@/components/custom/CustomDateRangeSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { ChartColumnIncreasing, Download, PhilippinePeso, PiggyBank, Plus, TrendingUp } from 'lucide-react';
export default function BudgetMonitoring() {
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Budget Monitoring">
            <div className="w-full">
                <div className="flex flex-row items-center justify-between p-4">
                    <div>
                        <h1 className="text-3xl font-bold">Budget Monitoring Dashboard</h1>
                        <p className="text-muted-foreground">Fiscal year 2025-2026 </p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <DateRangeSelector />
                        <Button variant="outline">
                            <Download className="h-5 w-5" />
                            <span>Export</span>
                        </Button>
                        <Button variant="add">
                            <Plus className="h-5 w-5" />
                            <span>Add</span>
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-4 gap-2 p-4">
                        <Card>
                            <CardContent>
                                <div className="flex flex-col items-start gap-4">
                                    <div className="flex w-full flex-row items-center justify-between">
                                        <h1 className="font-bold">Total Budget</h1>
                                        <PhilippinePeso className="h-5 w-5" />
                                    </div>
                                    <h1 className="text-2xl font-bold">
                                        ₱ <span> 250 000</span>
                                    </h1>
                                </div>
                                <p className="text-muted-foreground flex gap-2 text-sm">
                                    <span className="flex flex-row items-center gap-1 text-green-500">
                                        <TrendingUp />
                                        20%
                                    </span>
                                    from last year
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <div className="flex flex-col items-start gap-4">
                                    <div className="flex w-full flex-row items-center justify-between">
                                        <h1 className="font-bold">Total Spent</h1>
                                        <ChartColumnIncreasing className="h-5 w-5" />
                                    </div>
                                    <h1 className="text-2xl font-bold">
                                        ₱ <span> 250 000</span>
                                    </h1>
                                </div>
                                <p className="text-muted-foreground flex gap-2 text-sm">
                                    <span>20%</span>
                                    from last year
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <div className="flex flex-col items-start gap-4">
                                    <div className="flex w-full flex-row items-center justify-between">
                                        <h1 className="font-bold">Remaining Budget</h1>
                                        <PhilippinePeso className="h-5 w-5" />
                                    </div>
                                    <h1 className="text-2xl font-bold">
                                        ₱ <span> 250 000</span>
                                    </h1>
                                </div>
                                <p className="text-muted-foreground flex gap-2 text-sm">
                                    <span>20%</span>
                                    of total budget
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <div className="flex flex-col items-start gap-4">
                                    <div className="flex w-full flex-row items-center justify-between">
                                        <h1 className="font-bold">Savings</h1>
                                        <PiggyBank className="h-5 w-5" />
                                    </div>
                                    <h1 className="text-2xl font-bold">
                                        ₱ <span> 250 000</span>
                                    </h1>
                                </div>
                                <p className="text-muted-foreground flex gap-2 text-sm">
                                    <span className="flex flex-row items-center">20%</span>
                                    of total budget
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
