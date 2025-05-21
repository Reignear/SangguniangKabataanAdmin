import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Link } from '@inertiajs/react';
import { ArrowUp, CalendarFold, Download, FileText, Printer } from 'lucide-react';
import React from 'react';
interface AbyipProps {
    children?: React.ReactNode;
}
const AbyipNavButtons = [
    { title: 'Overview', href: 'dashboard.abyip.overview' },
    { title: 'Participation', href: 'dashboard.abyip.participation' },
    { title: 'Year Comparison', href: 'dashboard.abyip.comparison' },
    { title: 'Details Breakdown', href: 'dashboard.abyip.breakdown' },
];

export default function Abyip({ children }: AbyipProps) {
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Annual Budget">
            <div className="w-full">
                <div className="flex w-full flex-row items-center justify-between p-4">
                    <div>
                        <h1 className="text-3xl font-bold">Annual Budget</h1>
                        <p className="text-base">Fiscal Year 2025 - 2026</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <Button variant="outline">
                            <Printer />
                            Print
                        </Button>
                        <Button variant="outline">
                            <Download />
                            Download
                        </Button>
                        <Button variant="outline">
                            <FileText />
                            Full Print
                        </Button>
                        <Button variant="outline">
                            <CalendarFold />
                            New Fiscal Year
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 pb-0">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl">Total Budget</h1>
                                <h1 className="text-3xl font-bold">$ 300,300</h1>
                                <p className="flex flex-row items-center gap-2 text-sm">
                                    <span className="flex items-center text-green-500">
                                        <ArrowUp className="h-5 w-5" />
                                        12%
                                    </span>
                                    from previous year
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl">Program Funded</h1>
                                <h1 className="text-3xl font-bold">18</h1>
                                <p className="flex flex-row items-center gap-2 text-sm">
                                    <span className="flex items-center text-green-500">
                                        <ArrowUp className="h-5 w-5" />
                                        12
                                    </span>
                                    new programs this year
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl">Project Youth Impact</h1>
                                <h1 className="text-3xl font-bold">15 000</h1>
                                <p className="flex flex-row items-center gap-2 text-sm">
                                    <span className="flex items-center text-green-500">
                                        <ArrowUp className="h-5 w-5" />
                                        12%
                                    </span>
                                    increase in reach
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="m-4 flex max-w-xl flex-row items-center justify-between gap-1 rounded-md border-2 p-2">
                    {AbyipNavButtons.map((items) => {
                        const isActive = route().current(`${items.href}`);
                        return (
                            <Link href={route(items.href)}>
                                <Button variant="empty" className={isActive ? 'bg-blue-500 text-white' : ''}>
                                    {items.title}
                                </Button>
                            </Link>
                        );
                    })}
                </div>
                <div className="h-full p-4 pt-0">
                    <div className="h-full">{children}</div>
                </div>
            </div>
        </DashboardLayout>
    );
}
