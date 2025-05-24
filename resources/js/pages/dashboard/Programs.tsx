'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { ArrowRight, Calendar, CircleDashed, Clock, Clock4, Plus, Search, Users } from 'lucide-react';
import { useState } from 'react';

// Sample program data - replace with your actual data
const programsData = [
    {
        id: 1,
        title: 'Web Development Bootcamp',
        description: 'Learn modern web development with HTML, CSS, JavaScript, React, and Node.js.',
        category: 'Development',
        duration: '12 weeks',
        startDate: 'June 15, 2025',
        students: 24,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 2,
        title: 'Data Science Fundamentals',
        description: 'Master the basics of data analysis, visualization, and machine learning.',
        category: 'Data Science',
        duration: '8 weeks',
        startDate: 'July 1, 2025',
        students: 18,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 3,
        title: 'UX/UI Design Workshop',
        description: 'Learn to create beautiful, functional interfaces that users love.',
        category: 'Design',
        duration: '6 weeks',
        startDate: 'May 20, 2025',
        students: 15,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 4,
        title: 'Mobile App Development',
        description: 'Build cross-platform mobile applications using React Native.',
        category: 'Development',
        duration: '10 weeks',
        startDate: 'August 5, 2025',
        students: 20,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 5,
        title: 'Digital Marketing Masterclass',
        description: 'Learn SEO, social media marketing, and content strategy.',
        category: 'Marketing',
        duration: '4 weeks',
        startDate: 'June 10, 2025',
        students: 30,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Upcoming',
    },
    {
        id: 6,
        title: 'Cybersecurity Essentials',
        description: 'Understand the fundamentals of network security and threat prevention.',
        category: 'Security',
        duration: '8 weeks',
        startDate: 'July 15, 2025',
        students: 16,
        image: '/placeholder.svg?height=200&width=400',
        status: 'Completed',
    },
];

const Programs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = ['all', ...new Set(programsData.map((program) => program.category))];

    const filteredPrograms = programsData.filter((program) => {
        const matchesSearch =
            program.title.toLowerCase().includes(searchQuery.toLowerCase()) || program.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || program.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <DashboardLayout breadCrumbTitle="Programs" className="overflow-hidden">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Programs</h1>
                        <p className="text-muted-foreground mt-1">Discover our range of educational programs and courses</p>
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
                            <Button variant="outline">
                                <Plus />
                                <span>Add Program</span>
                            </Button>
                        </div>
                    </div>
                </div>

                <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
                    <TabsList className="mb-4 flex flex-wrap">
                        {categories.map((category) => (
                            <TabsTrigger key={category} value={category} className="capitalize">
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map((category) => (
                        <TabsContent key={category} value={category}>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </DashboardLayout>
    );
};

export default Programs;
