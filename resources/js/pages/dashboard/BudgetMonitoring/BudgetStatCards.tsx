import { Card, CardContent } from '@/components/ui/card';
import { ChartColumnIncreasing, PhilippinePeso, PiggyBank, TrendingUp } from 'lucide-react';

export default function StatCards() {
    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            <Card className="from-primary/20 to-primary/5 bg-gradient-to-br shadow-md transition-all hover:shadow-lg">
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
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 shadow-md transition-all">
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
                        from the annual budget
                    </p>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 shadow-md transition-all">
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
                        of annual budget
                    </p>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 shadow-md transition-all">
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
                        of total spent
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
