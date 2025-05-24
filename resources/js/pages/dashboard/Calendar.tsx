import { CalendarComponent } from '@/components/custom/CustomScreenCalendar';
import { Card, CardContent } from '@/components/ui/card';
import DashboardLayout from '@/layouts/shared/DashboardLayout';

const sampleEvents = [
    {
        id: '1',
        title: 'Team Meeting',
        description: 'Weekly team sync',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
        color: 'bg-blue-500',
    },
    {
        id: '2',
        title: 'Product Launch',
        description: 'New feature release',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
        color: 'bg-green-500',
    },
    {
        id: '3',
        title: 'Client Call',
        description: 'Quarterly review',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
        color: 'bg-purple-500',
    },
    {
        id: '4',
        title: 'Deadline',
        description: 'Project submission',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), 25),
        color: 'bg-red-500',
    },
    {
        id: '5',
        title: 'Birthday',
        description: 'Office celebration',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        color: 'bg-yellow-500',
    },
];
export default function Calendar() {
    return (
        <DashboardLayout className="w-full overflow-hidden" breadCrumbTitle="Calendar">
            <div className="h-[550px] w-full">
                <Card className="h-full">
                    <CardContent className="h-full">
                        <CalendarComponent events={sampleEvents} onDateSelect={(date) => console.log('Selected date:', date)} />
                    </CardContent>
                </Card>
            </div>
            <div className="flex w-full justify-center">
                <h1 className='text-muted-foreground '>A Calendar of event that shows upcoming events in a monthly and yearly view</h1>
            </div>
        </DashboardLayout>
    );
}
