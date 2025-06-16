'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { ArrowRight, Calendar, CircleDashed, Clock, Clock4, Plus, Search, Users } from 'lucide-react';
import { useState } from 'react';

// Sample program data - replace with your actual data
const programsData = [
    {
        id: 1,
        title: 'Public Health Awareness',
        description: 'Improve community health through education and access to resources.',
        category: 'Health',
        duration: '6 weeks',
        startDate: 'July 10, 2025',
        students: 22,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 2,
        title: 'Educational Leadership Training',
        description: 'Empower educators with leadership and curriculum design skills.',
        category: 'Education',
        duration: '10 weeks',
        startDate: 'August 1, 2025',
        students: 28,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 3,
        title: 'Women in Business Initiative',
        description: 'Support women entrepreneurs with training and microfinancing.',
        category: 'Economic Empowerment',
        duration: '8 weeks',
        startDate: 'June 20, 2025',
        students: 19,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 4,
        title: 'Inclusion and Equity Workshop',
        description: 'Foster inclusive practices in communities and organizations.',
        category: 'Social Inclusion & Equity',
        duration: '5 weeks',
        startDate: 'July 5, 2025',
        students: 25,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 5,
        title: 'Conflict Resolution Bootcamp',
        description: 'Learn peacebuilding strategies and mediation techniques.',
        category: 'Peace Building & Security',
        duration: '7 weeks',
        startDate: 'June 18, 2025',
        students: 17,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 6,
        title: 'Youth in Governance Program',
        description: 'Engage young people in civic leadership and policy advocacy.',
        category: 'Governance',
        duration: '9 weeks',
        startDate: 'August 12, 2025',
        students: 21,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 7,
        title: 'Active Citizenship Campaign',
        description: 'Promote voter education, participation, and community action.',
        category: 'Active Citizenship',
        duration: '6 weeks',
        startDate: 'July 25, 2025',
        students: 26,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 8,
        title: 'Climate Action Project',
        description: 'Engage communities in climate mitigation and environmental sustainability.',
        category: 'Environment',
        duration: '8 weeks',
        startDate: 'June 30, 2025',
        students: 24,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 9,
        title: 'Youth Global Exchange',
        description: 'Foster cultural exchange and mobility opportunities for youth.',
        category: 'Global Mobility',
        duration: '4 weeks',
        startDate: 'August 15, 2025',
        students: 18,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 10,
        title: 'Smart Agriculture Training',
        description: 'Equip farmers with modern agricultural techniques and technologies.',
        category: 'Agriculture',
        duration: '10 weeks',
        startDate: 'July 8, 2025',
        students: 27,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
];

const Programs = () => {
    const participationButton = [
        'All',
        'Health',
        'Education',
        'Economic Empowerment',
        'Social Inclusion & Equity',
        'Peace Building & Security',
        'Governance',
        'Active Citizenship',
        'Environment',
        'Global Mobility',
        'Agriculture',
    ];
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPrograms = programsData.filter((program) => {
        const matchesSearch =
            program.title.toLowerCase().includes(searchQuery.toLowerCase()) || program.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'All' || program.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <DashboardLayout breadCrumbTitle="Programs" className="overflow-hidden">
            <div className="container mx-auto p-4 pt-0">
                <div className="mb-4 flex flex-col items-center justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-center text-3xl font-bold tracking-tight md:text-start">Programs</h1>
                        <p className="text-muted-foreground mt-1">Discover our range of programs</p>
                    </div>
                    <div className="relative flex w-full gap-2 md:w-96">
                        <div className="w-full">
                            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                            <Input
                                type="search"
                                placeholder="Search programs..."
                                className="w-full pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div>
                            <Button variant="add">
                                <Plus />
                                <span>Add Program</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-1 rounded-md border p-1 md:grid-cols-3 lg:grid-cols-6">
                    {participationButton.map((button) => (
                        <Button
                            key={button}
                            className={`text-[12px] md:text-sm ${activeCategory === button ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'} `}
                            onClick={() => setActiveCategory(button)}
                            variant="empty"
                        >
                            {button}
                        </Button>
                    ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPrograms.map((program) => (
                        <Card key={program.id} className="overflow-hidden transition-all hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={program.image || '/placeholder.svg'}
                                    alt={program.title}
                                    className="h-full w-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <CardTitle className="text-xl">{program.title}</CardTitle>
                                    <Badge variant="outline" className="capitalize">
                                        {program.category}
                                    </Badge>
                                </div>
                                <CardDescription className="mt-2 line-clamp-2">{program.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="text-muted-foreground flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{program.duration}</span>
                                    </div>
                                    <div className="text-muted-foreground flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{program.startDate}</span>
                                    </div>
                                    <div className="text-muted-foreground flex items-center gap-1">
                                        <Users className="h-4 w-4" />
                                        <span>{program.students} students</span>
                                    </div>
                                    <div className="text-muted-foreground flex items-center gap-1">
                                        {program.status === 'Completed' ? (
                                            <>
                                                <Clock4 className="h-4 w-4" />
                                                <span>{program.status}</span>
                                            </>
                                        ) : (
                                            <>
                                                <CircleDashed className="h-4 w-4" />
                                                <span>{program.status}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="group w-full">
                                    View Program
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {filteredPrograms.length === 0 && (
                    <div className="py-12 text-center">
                        <h3 className="text-lg font-medium">No programs found</h3>
                        <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Programs;
