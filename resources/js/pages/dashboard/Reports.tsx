import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Search } from 'lucide-react';
import { useState } from 'react';
import ReportCard from './Report/ReportCard';
import StatCards from './Report/StatCards';

const reportButtons = ['Project', 'Program', 'Activity'];
export default function Reports() {
    const [activeCategory, setActiveCategory] = useState('Project');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Reports">
            <div className="w-full p-4">
                <div className="flex md:flex-row flex-col items-center justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold md:text-start text-center">Reports</h1>
                        <p className="text-muted-foreground md:text-start text-center">This section features list of reports across all PPA</p>
                    </div>
                    <div className="relative">
                        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                        <Input
                            className="w-sm rounded-sm pl-8"
                            placeholder="Search for report"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <StatCards />
                </div>
                <div className="mt-4 grid w-full grid-cols-3 gap-1 rounded-sm border p-1">
                    {reportButtons.map((button) => (
                        <Button
                            key={button}
                            variant="empty"
                            className={`rounded-sm border transition-all ${activeCategory === button ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setActiveCategory(button)}
                        >
                            {button}
                        </Button>
                    ))}
                </div>
                <div className="mt-4">
                    <ReportCard activeCategory={activeCategory} searchQuery={searchQuery}  />
                </div>
            </div>
        </DashboardLayout>
    );
}
