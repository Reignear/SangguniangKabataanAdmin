import { ChartAreaInteractive } from '@/layouts/data/Chart';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import Budget from '../../../assets/profit.png';
import Task from '../../../assets/task.png';
import KKOfficer from '../../../assets/user.png';
import Youth from '../../../assets/youth.png';

export default function Dashboard() {
    return (
        <DashboardLayout className="overflow-hidden">
            <div className="h-full w-full">
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-cyan-200">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <img src={Budget} alt="Document Icon" className="h-7 w-7" />
                                <h1>Annual Budget</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">₱ 922,214</h1>
                            </div>
                        </div>
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-amber-200">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <img src={Task} alt="Document Icon" className="h-7 w-7" />
                                <h1> Completed Annual Programs</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">85%</h1>
                            </div>
                        </div>
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-red-200">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <img src={KKOfficer} alt="Document Icon" className="h-7 w-7" />
                                <h1> KK Officers</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">15</h1>
                            </div>
                        </div>
                        <div className="flex aspect-video flex-col gap-y-5 rounded-xl bg-green-200">
                            <div className="flex flex-row items-center justify-start gap-3 p-4">
                                <img src={Youth} alt="Document Icon" className="h-7 w-7" />
                                <h1> Youth</h1>
                            </div>
                            <div className="pl-7 text-3xl">
                                <h1 className="font-bold">346</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                        <ChartAreaInteractive />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
