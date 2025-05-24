import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import clsx from 'clsx';
import { Plus, Search } from 'lucide-react';
import { useState } from 'react';

/**
 * Represents the status of an activity in the dashboard.
 *
 * - `Upcoming`: The activity is scheduled to occur in the future.
 * - `Cancelled`: The activity has been canceled and will not take place.
 * - `Completed`: The activity has already occurred and is finished.
 */
type Status = 'Upcoming' | 'Cancelled' | 'Completed';

export default function Activity() {
    const [open, setOpen] = useState<string | undefined>(undefined);
    const [filter, setFilter] = useState<Status | 'All'>('All');
    const getStatusClass = (status: Status) => {
        return clsx({
            'text-green-500': status === 'Completed',
            'text-red-500': status === 'Cancelled',
            'text-blue-500': status === 'Upcoming',
        });
    };

    const data: {
        title: string;
        timeDay: string;
        timeFrom: string;
        timeTo: string;
        participation: string;
        participants: number;
        budget: number;
        location: string;
        status: Status;
        id: string;
    }[] = [
        {
            title: 'Monthly Clean Up Drive',
            timeDay: 'March 20, 2025',
            timeFrom: '10:00',
            timeTo: '1:00',
            participation: 'Health',
            participants: 25,
            budget: 25000,
            location: 'Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte',
            status: 'Upcoming',
            id: 'key1',
        },
        {
            title: 'Monthly Clean Up Drive',
            timeDay: 'March 20, 2025',
            timeFrom: '10:00 ',
            timeTo: '1:00 ',
            participation: 'Health',
            participants: 25,
            budget: 25000,
            location: 'Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte',
            status: 'Cancelled',
            id: 'key2',
        },
        {
            title: 'Monthly Clean Up Drive',
            timeDay: 'March 20, 2025',
            timeFrom: '10:00 ',
            timeTo: '1:00 ',
            participation: 'Health',
            participants: 25,
            budget: 25000,
            location: 'Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte',
            status: 'Completed',
            id: 'key3',
        },
        {
            title: 'Monthly Clean Up Drive',
            timeDay: 'March 20, 2025',
            timeFrom: '10:00 ',
            timeTo: '1:00 ',
            participation: 'Health',
            participants: 25,
            budget: 25000,
            location: 'Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte',
            status: 'Completed',
            id: 'key4',
        },
    ];
    const dataButton: (Status | 'All')[] = ['All', 'Upcoming', 'Completed', 'Cancelled'];
    const filteredData = filter === 'All' ? data : data.filter((item) => item.status === filter);
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Events">
            <div className="flex w-full flex-col gap-4 p-4">
                <div className="flex w-full justify-between">
                    <h1 className="text-3xl font-bold">Activity</h1>
                    <Button variant="outline" className="hover:bg-blue-500 hover:text-white">
                        <Plus />
                        <span>Add activity</span>
                    </Button>
                </div>
                <div className="flex h-full w-full flex-col gap-2">
                    <div className="grid grid-cols-2">
                        <div className="w-fit rounded-md border-2 p-1 shadow-sm">
                            {dataButton.map((button) => (
                                <Button variant="empty" onClick={() => setFilter(button)}>
                                    {button}
                                </Button>
                            ))}
                        </div>
                        <div className="flex items-center justify-end">
                            <Button></Button>
                        </div>
                    </div>

                    <div className="relative flex-1">
                        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                        <Input type="search" placeholder="Search activity by name..." className="pl-8" />
                    </div>
                    {filteredData.map((item) => (
                        <Card className={`w-full border-2 shadow-none ${open === item.id ? 'border-blue-500' : ''}`}>
                            <CardContent className="w-full">
                                <h1 className={`pb-2 ${getStatusClass(item.status)}`}>{item.status}</h1>
                                <Accordion type="single" collapsible className="w-full" value={open} onValueChange={(value) => setOpen(value)}>
                                    <AccordionItem value={item.id} className="w-full">
                                        <div className="grid w-full grid-cols-3 text-sm">
                                            <div className="flex flex-row gap-10">
                                                <p className="text-muted-foreground">
                                                    From: <br />
                                                    <span className="text-base font-bold text-black">{item.timeFrom} am</span>
                                                </p>
                                                <p className="text-muted-foreground">
                                                    To: <br />
                                                    <span className="text-base font-bold text-black">{item.timeTo} pm</span>
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Day <br />
                                                    <span className="text-base font-bold text-black">{item.timeDay}</span>
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-muted-foreground">
                                                    Title: <br />
                                                    <span className="text-base font-bold text-black">Monthly Clean Up Drive</span>
                                                </h1>
                                            </div>

                                            <AccordionTrigger className="flex w-full justify-end text-blue-500 hover:text-blue-600">
                                                {open === item.id ? 'Hide more' : 'Show more'}
                                            </AccordionTrigger>
                                        </div>

                                        <AccordionContent className="mt-4 text-sm shadow-lg">
                                            <div className="mt-2 grid grid-rows-2 items-center gap-2">
                                                <div className="grid w-full grid-cols-3">
                                                    <div>
                                                        <h1 className="text-muted-foreground">Participation:</h1>
                                                        <p className="text-base font-bold text-black">Health</p>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-muted-foreground">Participants:</h1>
                                                        <p className="text-base font-bold text-black">25</p>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-muted-foreground">Budget:</h1>
                                                        <p className="text-base font-bold text-black">
                                                            ₱ <span>25,000</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="grid w-full grid-cols-2">
                                                    <div>
                                                        <h1 className="text-muted-foreground">Location:</h1>
                                                        <p className="text-base font-bold text-black">
                                                            Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte
                                                        </p>
                                                    </div>
                                                    <div className="flex w-full flex-row items-end justify-end gap-2">
                                                        <Button variant="destructive" className="w-30">
                                                            Cancel
                                                        </Button>
                                                        <Button variant="add" className="w-30 text-white">
                                                            Reschedule
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
