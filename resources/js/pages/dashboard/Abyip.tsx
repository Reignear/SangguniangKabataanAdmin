import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { CalendarFold, Download, Printer } from 'lucide-react';
import { useState } from 'react';
import DetailsBreakdown from './Abyip/AbyipDetailsBreakdown';
import Overview from './Abyip/AbyipOverview';
import Participation from './Abyip/AbyipParticipation';
import StatCards from './Abyip/AbyipStatCards';
import YearComparison from './Abyip/AbyipYearComparison';
export default function Abyip() {
    const [activeTab, setActiveTab] = useState('Overview');
    const AbyipNavButtons = ['Overview', 'Participation', 'Year Comparison', 'Details Breakdown'];
    const AbyipExtraButtons = [
        { title: 'Print', icon: <Printer />, onClick: () => console.log('Print') },
        { title: 'Export', icon: <Download />, onClick: () => console.log('Export') },
        { title: 'New Fiscal Year', icon: <CalendarFold />, onClick: () => console.log('New Fiscal Year') },
    ];
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Annual Budget">
            <div className="w-full">
                <div className="flex w-full flex-row items-center justify-between p-4 pt-0">
                    <div>
                        <h1 className="text-3xl font-bold">Annual Budget</h1>
                        <p className="text-base">Fiscal Year 2025 - 2026</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {AbyipExtraButtons.map((button) => (
                            <Button variant="outline" key={button.title} className="flex items-center gap-2">
                                {button.icon}
                                <span>{button.title}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 pb-0">
                    <StatCards />
                </div>
                <div className="text-muted-foreground m-4 grid grid-cols-4 gap-1 rounded-md border-2 p-1">
                    {AbyipNavButtons.map((item) => (
                        <Button
                            key={item}
                            variant="empty"
                            className={` ${activeTab === item ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </Button>
                    ))}
                </div>
                <div className="h-full p-4 pt-0">
                    {activeTab === 'Overview' && <Overview />}
                    {activeTab === 'Participation' && <Participation />}
                    {activeTab === 'Year Comparison' && <YearComparison />}
                    {activeTab === 'Details Breakdown' && <DetailsBreakdown />}
                </div>
            </div>
        </DashboardLayout>
    );
}
