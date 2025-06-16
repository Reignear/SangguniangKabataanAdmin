import { Button } from '@/components/ui/button';
import { ArrowLeftFromLine, Calendar, Download, MapPin, Minus, Printer, Share2, Users, Wallet } from 'lucide-react';
import { useState } from 'react';

// export interface SelectedReport {}

const relatedReportSample = [
    {
        title: 'Youth skills',
        date: 'June 2 2003',
        ppa: 'Activity',
    },
    {
        title: 'Youth skills',
        date: 'June 2 2003',
        ppa: 'Activity',
    },
    {
        title: 'Youth skills',
        date: 'June 2 2003',
        ppa: 'Activity',
    },
];

export default function FullReport() {
    const [activeCategory, setActiveCategory] = useState('Overview');
    //Specify type of button variants to avoid error
    type ButtonVariant =
        | 'default'
        | 'link'
        | 'add'
        | 'outline'
        | 'empty'
        | 'destructive'
        | 'secondary'
        | 'ghost'
        | 'customLogoBased'
        | null
        | undefined;

    //Report details
    const reportDetails = [
        { icon: Calendar, title: 'Date', data: 'June 3, 2003' },
        { icon: MapPin, title: 'Location', data: 'Balagunan Sto tomas davao del norte' },
        { icon: Users, title: 'Beneficiaries', data: '20' },
        { icon: Wallet, title: 'Budget Utilization', data: { utilization: '20000', allocation: '21000' } },
    ];

    //Action button
    const actionButton: { id: number; icon: React.ElementType; title: string; variant: ButtonVariant }[] = [
        { id: 1, icon: Download, title: 'Download Full Report', variant: 'add' },
        { id: 2, icon: Share2, title: 'Share Report', variant: 'outline' },
        { id: 3, icon: Printer, title: 'Print Report', variant: 'outline' },
    ];

    //Calculate utilization
    const calculateUtilization = (utilization: number, allocation: number): string => {
        if (allocation === 0) return '0%';
        const percentage = (utilization / allocation) * 100;
        return `${percentage.toFixed(2)}%`;
    };
    //Details Buttons
    const detailButtons = ['Overview', 'Details', 'Gallery', 'Documents'];

    return (
        <div className="flex h-full w-full flex-col gap-5 p-4">
            <div className="flex flex-row items-center justify-start gap-5">
                <a href={route('dashboard.reports')}>
                    <Button variant="outline" className="hover:cursor-pointer">
                        <ArrowLeftFromLine />
                    </Button>
                </a>
                <h1 className="text-2xl font-extrabold">Youth Leadership Summit 2023</h1>
            </div>
            <div className="grid grid-cols-[4fr_2fr] gap-5">
                <div className="flex flex-col gap-5">
                    <div className="h-[75svh] rounded-md border">
                        <img
                            src="https://imgs.search.brave.com/sfE17UW78rj21M7IpOm6XMKipV1hqT3lhn8uWFQd91I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/MTEwNDczNC9waG90/by93b21hbi1zaWxo/b3VldHRlLWF0LXN1/bnNldC1vbi1oaWxs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zUHJDSGNsdFM0/VHR4VVhIeFQ5ckxY/ckcxNTRMcGY3MEJO/RFFma3lzUm5RPQ"
                            alt=""
                            className="h-full w-full rounded-md object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 rounded-md border p-1">
                        {detailButtons.map((detailButton) => (
                            <Button
                                variant="empty"
                                className={`${activeCategory === detailButton ? 'bg-blue-500 text-white' : 'text-muted-foreground hover:bg-gray-100 hover:text-black'}`}
                                onClick={() => setActiveCategory(detailButton)}
                            >
                                {detailButton}
                            </Button>
                        ))}
                    </div>
                    <div>
                        {activeCategory === 'Overview' && (
                            <div className="flex flex-col gap-y-5">
                                <div>
                                    <h1 className="text-xl font-bold">Description</h1>
                                    <p className="text-muted-foreground">
                                        A lone balloon drifted silently across the twilight sky, carrying with it a note no one would ever read.
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Objectives</h1>
                                    <p className="text-muted-foreground">
                                        <span> {`\u25CF`} First Objective</span>
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Outcomes</h1>
                                    <p className="text-muted-foreground">
                                        <span> {`\u25CF`} First Outcome</span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {/* Report Details */}
                    <div className="flex flex-col gap-y-3 rounded-md border p-4 shadow-sm">
                        <h1 className="text-lg font-bold">Report Details</h1>
                        {reportDetails.map((details) => (
                            <div className="flex flex-row items-center gap-2">
                                <details.icon className="text-muted-foreground h-5 w-5" />
                                <div className="flex flex-col">
                                    <h1 className="text-black">{details.title}</h1>
                                    {typeof details.data === 'string' ? (
                                        <p className="text-muted-foreground text-sm">{details.data}</p>
                                    ) : (
                                        <>
                                            {details.data.utilization && details.data.allocation && (
                                                <p className="text-muted-foreground text-sm">
                                                    ₱{Number(details.data.utilization).toLocaleString()}
                                                    <span> of ₱ </span>
                                                    {Number(details.data.allocation).toLocaleString()} (
                                                    {calculateUtilization(Number(details.data.utilization), Number(details.data.allocation))})
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Actions */}
                    <div className="flex flex-col gap-y-3 rounded-md border p-4 shadow-sm">
                        <h1 className="text-lg font-bold">Actions</h1>
                        {actionButton.map((actionButton) => (
                            <Button key={actionButton.id} variant={actionButton.variant} className="h-10">
                                {actionButton.title}
                            </Button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-3 rounded-md border p-4 shadow-sm">
                        <h1 className="text-lg font-bold">Related Reports</h1>
                        {relatedReportSample.map((relatedReport) => (
                            <div className="mt-2 flex flex-col">
                                <h1 className="text-base font-bold">{relatedReport.title}</h1>
                                <p className="text-muted-foreground flex gap-2 text-sm">
                                    {relatedReport.ppa}{' '}
                                    <span>
                                        <Minus className="text-muted-foreground w-3" />
                                    </span>
                                    <span>{relatedReport.date}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
