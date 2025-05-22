import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Calendar, FolderKanban, Users } from 'lucide-react';

const progressData = [
    { icon: <Users className="h-4 w-4 text-[#3d85c6]" />, name: 'Salaries', value: 30, color: '#3d85c6' },
    { icon: <FolderKanban className="h-4 w-4 text-[#cc0000]" />, name: 'Projects', value: 30, color: '#cc0000' },
    { icon: <BarChart3 className="h-4 w-4 text-[#8e7cc3]" />, name: 'Programs', value: 30, color: '#8e7cc3' },
    { icon: <Calendar className="h-4 w-4 text-[#6aa84f]" />, name: 'Events', value: 30, color: '#6aa84f' },
];

export default function BudgetExpenditure() {
    return (
        <Card className="h-full w-full rounded-sm">
            <CardContent>
                <h1 className="text-2xl font-bold">Budget Expenditure</h1>
                <p className="text-muted-foreground">Breakdown of budget allocation across category</p>
                <div className="mt-4 flex h-full w-full flex-col gap-4">
                    {progressData.map((item) => (
                        <div key={item.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <div className="text-sm font-medium">{item.name}</div>
                                </div>
                                <span className="text-sm font-medium">{item.value}%</span>
                            </div>
                            <Progress className="h-2" value={item.value} valueColor={item.color} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
