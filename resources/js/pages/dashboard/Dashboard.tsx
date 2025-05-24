import CustomChart from '@/components/custom/CustomChart';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { HandCoins, ListChecks, User, Users } from 'lucide-react';

const sampleData = [
    { date: '2025-05-01', value: 120 },
    { date: '2025-05-02', value: 150 },
    { date: '2025-05-03', value: 180 },
    { date: '2025-05-04', value: 200 },
    { date: '2025-05-05', value: 220 },
    { date: '2025-05-06', value: 190 },
    { date: '2025-05-07', value: 170 },
    { date: '2025-05-08', value: 160 },
    { date: '2025-05-09', value: 210 },
    { date: '2025-05-10', value: 230 },
    { date: '2025-05-15', value: 250 },
    { date: '2025-05-20', value: 270 },
    { date: '2025-05-25', value: 290 },
    { date: '2025-05-30', value: 310 },
];
export default function Dashboard() {
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Dashboard">
            <div className="h-full w-full">
                <div className="flex flex-1 flex-col gap-4 p-2 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                       
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-gradient-to-br from-cyan-500/50 to-cyan-500/5 shadow-sm hover:shadow-md transition-all">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <HandCoins className="h-7 w-7" />
                                <h1>Annual Budget</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">₱ 922,214</h1>
                            </div>
                        </div>
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-gradient-to-br from-amber-500/50 to-amber-500/5 shadow-sm hover:shadow-md transition-all">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <ListChecks className="h-7 w-7" />
                                <h1> Completed Annual Programs</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">85%</h1>
                            </div>
                        </div>
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-gradient-to-br from-red-500/50 to-red-500/5 shadow-sm hover:shadow-md transition-all">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <Users className="h-7 w-7" />
                                <h1> KK Officers</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">15</h1>
                            </div>
                        </div>
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-gradient-to-br from-green-500/50 to-green-500/5 shadow-sm hover:shadow-md transition-all">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <User className="h-7 w-7" />
                                <h1> Youth</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">346</h1>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-md bg-white shadow-sm md:min-h-min">
                        <CustomChart Data={sampleData} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
