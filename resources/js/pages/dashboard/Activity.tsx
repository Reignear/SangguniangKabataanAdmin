import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import DashboardLayout from '@/layouts/shared/DashboardLayout';
import clsx from 'clsx';
import { Plus, Search } from 'lucide-react';
import { useState } from 'react';

type Status = 'Upcoming' | 'Cancelled' | 'Completed';
export default function Activity() {
    const data: {
        title: string;
        timeDay: string;
        timeFrom: string;
        timeTo: string;
        description: string;
        participation: string;
        participants: number;
        budget: number;
        location: string;
        status: Status;
        id: string;
    }[] = [
        {
            title: 'Drive',
            timeDay: 'March 20, 2025',
            timeFrom: '10:00',
            timeTo: '1:00',
            description: 'A general health awareness drive to promote community wellness.',
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
            timeFrom: '10:00',
            timeTo: '1:00',
            description: 'A regular initiative to clean up the community and maintain public hygiene.',
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
            timeFrom: '10:00',
            timeTo: '1:00',
            description: 'A monthly clean-up activity focused on promoting environmental cleanliness.',
            participation: 'Health',
            participants: 25,
            budget: 25000,
            location: 'Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte',
            status: 'Completed',
            id: 'key3',
        },
        {
            title: 'Clean Up Drive',
            timeDay: 'March 20, 2025',
            timeFrom: '10:00',
            timeTo: '1:00',
            description: 'A local drive to remove waste and improve public sanitation.',
            participation: 'Health',
            participants: 25,
            budget: 25000,
            location: 'Purok 1 San Isidro Balagunan Sto tomas Davao Del Norte',
            status: 'Completed',
            id: 'key4',
        },
        {
            title: 'Tree Planting Campaign',
            timeDay: 'April 5, 2025',
            timeFrom: '08:00',
            timeTo: '11:00',
            description: 'A campaign to plant trees and enhance environmental sustainability.',
            participation: 'Environment',
            participants: 30,
            budget: 18000,
            location: 'Barangay Hall, San Miguel, Panabo City',
            status: 'Upcoming',
            id: 'key5',
        },
        {
            title: 'Blood Donation Drive',
            timeDay: 'April 12, 2025',
            timeFrom: '09:00',
            timeTo: '12:00',
            description: 'An event encouraging voluntary blood donation to support medical needs.',
            participation: 'Health',
            participants: 40,
            budget: 30000,
            location: 'Municipal Gym, Sto Tomas, Davao del Norte',
            status: 'Upcoming',
            id: 'key6',
        },
        {
            title: 'Feeding Program',
            timeDay: 'March 28, 2025',
            timeFrom: '11:00',
            timeTo: '13:00',
            description: 'A community service to provide meals to underprivileged residents.',
            participation: 'Social Welfare',
            participants: 20,
            budget: 10000,
            location: 'Purok 4, Balagunan, Sto Tomas',
            status: 'Completed',
            id: 'key7',
        },
        {
            title: 'Mental Health Awareness Talk',
            timeDay: 'May 2, 2025',
            timeFrom: '14:00',
            timeTo: '16:00',
            description: 'An informative session promoting mental health awareness and support.',
            participation: 'Health',
            participants: 50,
            budget: 20000,
            location: 'Sto Tomas National High School',
            status: 'Upcoming',
            id: 'key8',
        },
        {
            title: 'Barangay Clean-Up',
            timeDay: 'April 15, 2025',
            timeFrom: '07:00',
            timeTo: '10:00',
            description: 'A barangay-wide cleanup event focused on keeping public areas clean.',
            participation: 'Environment',
            participants: 35,
            budget: 15000,
            location: 'Barangay San Isidro',
            status: 'Cancelled',
            id: 'key9',
        },
        {
            title: 'COVID-19 Vaccination Campaign',
            timeDay: 'April 20, 2025',
            timeFrom: '08:00',
            timeTo: '12:00',
            description: 'A public vaccination drive to protect residents against COVID-19.',
            participation: 'Health',
            participants: 60,
            budget: 50000,
            location: 'San Isidro Health Center',
            status: 'Completed',
            id: 'key10',
        },
        {
            title: 'Youth Leadership Workshop',
            timeDay: 'May 10, 2025',
            timeFrom: '09:00',
            timeTo: '17:00',
            description: 'A full-day training workshop to develop leadership skills among youth.',
            participation: 'Education',
            participants: 45,
            budget: 40000,
            location: 'Davao del Norte State College',
            status: 'Upcoming',
            id: 'key11',
        },
        {
            title: 'Barangay Tree Inventory',
            timeDay: 'April 22, 2025',
            timeFrom: '06:00',
            timeTo: '10:00',
            description: 'An inventory activity to document existing trees for environmental tracking.',
            participation: 'Environment',
            participants: 15,
            budget: 12000,
            location: 'Purok 3, Sto Tomas',
            status: 'Completed',
            id: 'key12',
        },
        {
            title: 'Community Livelihood Training',
            timeDay: 'May 3, 2025',
            timeFrom: '08:30',
            timeTo: '15:30',
            description: 'A workshop to teach livelihood skills and promote economic self-sufficiency.',
            participation: 'Livelihood',
            participants: 50,
            budget: 35000,
            location: 'San Isidro Multipurpose Hall',
            status: 'Upcoming',
            id: 'key13',
        },
        {
            title: 'Fire Safety Seminar',
            timeDay: 'March 30, 2025',
            timeFrom: '10:00',
            timeTo: '12:00',
            description:
                'A seminar to educate residents on fire safety measures and prevention. A seminar to educate residents on fire safety measures and prevention.A seminar to educate residents on fire safety measures and prevention.',
            participation: 'Public Safety',
            participants: 28,
            budget: 14000,
            location: 'Purok 2, San Isidro, Sto Tomas',
            status: 'Cancelled',
            id: 'key14',
        },
    ];

    const [open, setOpen] = useState<string | undefined>(undefined);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    //Filter data and sort data
    const filterActivity = data
        .sort((a, b) => new Date(b.timeDay).getTime() - new Date(a.timeDay).getTime())
        .filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.participation.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeCategory === 'All' || item.status.toLowerCase() === activeCategory.toLowerCase();
            return matchesSearch && matchesFilter;
        });
    const dataButton: (Status | 'All')[] = ['All', 'Upcoming', 'Completed', 'Cancelled'];
    const getStatusClass = (status: Status) => {
        return clsx({
            'text-green-500': status === 'Completed',
            'text-red-500': status === 'Cancelled',
            'text-blue-500': status === 'Upcoming',
        });
    };

    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Events">
            <div className="flex w-full flex-col gap-4 p-4 pt-0">
                <div className="flex w-full justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Activity</h1>
                        <p className="text-muted-foreground">Manage and monitor all SK activity</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                            <Input
                                type="search"
                                placeholder="Search activity by name..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="hover:bg-blue-500 hover:text-white">
                            <Plus />
                            <span>Add activity</span>
                        </Button>
                    </div>
                </div>
                <div className="flex h-full w-full flex-col gap-2">
                    <div className="text-muted-foreground grid grid-cols-4 gap-1 rounded-md border p-1">
                        {dataButton.map((activity) => (
                            <Button
                                variant="empty"
                                className={`${activeCategory === activity ? 'bg-blue-500 text-white' : ''}`}
                                onClick={() => setActiveCategory(activity)}
                            >
                                {activity}
                            </Button>
                        ))}
                    </div>

                    {filterActivity.map((activity) => (
                        <Card className={`w-full border-2 shadow-none ${open === activity.id ? 'border-blue-500' : ''}`}>
                            <CardContent className="w-full">
                                <h1 className={`pb-2 ${getStatusClass(activity.status)}`}>{activity.status}</h1>
                                <Accordion type="single" collapsible className="w-full" value={open} onValueChange={(value) => setOpen(value)}>
                                    <AccordionItem value={activity.id} className="w-full">
                                        <div className="grid w-full grid-cols-3 text-sm">
                                            <div className="flex flex-row gap-10">
                                                <p className="text-muted-foreground">
                                                    From: <br />
                                                    <span className="not-first: text-base text-black">{activity.timeFrom} am</span>
                                                </p>
                                                <p className="text-muted-foreground">
                                                    To: <br />
                                                    <span className="not-first: text-base text-black">{activity.timeTo} pm</span>
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Day <br />
                                                    <span className="text-base text-black">{activity.timeDay}</span>
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-muted-foreground">
                                                    Title: <br />
                                                    <span className="text-base font-bold text-black">{activity.title}</span>
                                                </h1>
                                            </div>

                                            <AccordionTrigger className="flex w-full justify-end text-blue-500 hover:text-blue-600">
                                                {open === activity.id ? 'Hide more' : 'Show more'}
                                            </AccordionTrigger>
                                        </div>

                                        <AccordionContent className="mt-4 text-sm shadow-lg">
                                            <div className="mt-2 grid grid-rows-3 items-center gap-2">
                                                <div className="w-full">
                                                    <h1 className="text-muted-foreground">Description: </h1>
                                                    <p className="text-base">{activity.description}</p>
                                                </div>
                                                <div className="grid w-full grid-cols-3">
                                                    <div>
                                                        <h1 className="text-muted-foreground">Participation:</h1>
                                                        <p className="text-base text-black">{activity.participation}</p>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-muted-foreground">Participants:</h1>
                                                        <p className="text-base text-black">{activity.participants}</p>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-muted-foreground">Budget:</h1>
                                                        <p className="text-base text-black">
                                                            ₱ <span>{activity.budget}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="grid w-full grid-cols-2">
                                                    <div>
                                                        <h1 className="text-muted-foreground">Location:</h1>
                                                        <p className="text-base text-black">{activity.location}</p>
                                                    </div>
                                                    <div className="flex w-full flex-row items-end justify-end gap-2">
                                                        <Button key={activity.id} variant="destructive" className="w-30">
                                                            Cancel
                                                        </Button>
                                                        <Button key={activity.id} variant="add" className="w-30 text-white">
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
                    {filterActivity.length === 0 && (
                        <div className="text-muted-foreground w-full p-4 text-center">No activities found matching your search criteria.</div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
