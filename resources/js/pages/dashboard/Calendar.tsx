import { CalendarComponent } from '@/components/custom/CustomScreenCalendar';
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
        <DashboardLayout className="overflow-hidden" breadCrumbTitle='Calendar'>
            <div className="h-[600px] w-full p-4">
                <CalendarComponent events={sampleEvents} onDateSelect={(date) => console.log('Selected date:', date)} />
            </div>
        </DashboardLayout>
    );
}
