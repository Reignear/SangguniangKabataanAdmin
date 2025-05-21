/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { AlertCircle, ArrowUpDown, Calendar, CheckCircle2, Clock, Download, FileText, Filter, MoreHorizontal, Printer, Search } from 'lucide-react';
import { type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal, useState } from 'react';

// Mock data for projects
const projectsData = [
    {
        id: 'GOV-2023-001',
        name: 'Public Infrastructure Renewal',
        department: 'Health',
        status: 'In Progress',
        priority: 'High',
        budget: '$2,500,000',
        startDate: '2023-01-15',
        endDate: '2023-12-30',
        completion: 45,
    },
    {
        id: 'GOV-2023-002',
        name: 'Digital Services Transformation',
        department: 'Education',
        status: 'Planning',
        priority: 'Medium',
        budget: '$1,200,000',
        startDate: '2023-03-01',
        endDate: '2024-02-28',
        completion: 15,
    },
    {
        id: 'GOV-2023-003',
        name: 'Community Health Initiative',
        department: 'Economic Empowerment',
        status: 'Completed',
        priority: 'High',
        budget: '$850,000',
        startDate: '2023-02-10',
        endDate: '2023-08-10',
        completion: 100,
    },
    {
        id: 'GOV-2023-004',
        name: 'Environmental Sustainability Program',
        department: 'Social Inclusion and Equity',
        status: 'On Hold',
        priority: 'Medium',
        budget: '$1,500,000',
        startDate: '2023-04-01',
        endDate: '2024-03-31',
        completion: 20,
    },
    {
        id: 'GOV-2023-005',
        name: 'Public Safety Enhancement',
        department: 'Peace-Building and Security',
        status: 'In Progress',
        priority: 'Critical',
        budget: '$3,200,000',
        startDate: '2023-01-05',
        endDate: '2023-11-30',
        completion: 65,
    },
    {
        id: 'GOV-2023-009',
        name: 'Governance',
        department: 'Governance',
        status: 'Planning',
        priority: 'High',
        budget: '$2,800,000',
        startDate: '2023-05-15',
        endDate: '2024-06-30',
        completion: 10,
    },
    {
        id: 'GOV-2023-007',
        name: 'Transportation Infrastructure',
        department: 'Active Citizenship',
        status: 'In Progress',
        priority: 'High',
        budget: '$5,500,000',
        startDate: '2023-02-20',
        endDate: '2024-01-15',
        completion: 35,
    },
    {
        id: 'GOV-2023-008',
        name: 'Environmental Sustainability Program',
        department: 'Environment',
        status: 'On Hold',
        priority: 'Medium',
        budget: '$1,500,000',
        startDate: '2023-04-01',
        endDate: '2024-03-31',
        completion: 20,
    },
    {
        id: 'GOV-2023-010',
        name: 'Public Safety Enhancement',
        department: 'Global Mobility',
        status: 'In Progress',
        priority: 'Critical',
        budget: '$3,200,000',
        startDate: '2023-01-05',
        endDate: '2023-11-30',
        completion: 65,
    },
    {
        id: 'GOV-2023-006',
        name: 'Education Modernization',
        department: 'Agriculture',
        status: 'Planning',
        priority: 'High',
        budget: '$2,800,000',
        startDate: '2023-05-15',
        endDate: '2024-06-30',
        completion: 10,
    },
];

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [participationFilter, setParticipationFilter] = useState('All');

    // Filter projects based on search term and filters
    const filteredProjects = projectsData.filter((project) => {
        const matchesSearch =
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
        const matchesParticipation = participationFilter === 'All' || project.department === participationFilter;

        return matchesSearch && matchesStatus && matchesParticipation;
    });

    // Get unique departments for filter
    const departments = ['All', ...new Set(projectsData.map((project) => project.department))];

    // Get project statistics
    const totalProjects = projectsData.length;
    const completedProjects = projectsData.filter((p) => p.status === 'Completed').length;
    const inProgressProjects = projectsData.filter((p) => p.status === 'In Progress').length;
    const plannedProjects = projectsData.filter((p) => p.status === 'Planning').length;

    // Status badge color mapping
    const getStatusBadge = (
        status:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
              >
            | null
            | undefined,
    ) => {
        switch (status) {
            case 'Completed':
                return (
                    <Badge className="bg-green-500 hover:bg-green-600">
                        <CheckCircle2 className="mr-1 h-3 w-3" /> {status}
                    </Badge>
                );
            case 'In Progress':
                return (
                    <Badge className="bg-amber-500 hover:bg-amber-600">
                        <Clock className="mr-1 h-3 w-3" /> {status}
                    </Badge>
                );
            case 'Planning':
                return (
                    <Badge className="bg-slate-500 hover:bg-slate-600">
                        <FileText className="mr-1 h-3 w-3" /> {status}
                    </Badge>
                );
            case 'On Hold':
                return (
                    <Badge className="bg-red-500 hover:bg-red-600">
                        <AlertCircle className="mr-1 h-3 w-3" /> {status}
                    </Badge>
                );
            default:
                return <Badge>{status}</Badge>;
        }
    };

    // Priority badge color mapping
    const getPriorityBadge = (
        priority:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
              >
            | null
            | undefined,
    ) => {
        switch (priority) {
            case 'Critical':
                return (
                    <Badge variant="outline" className="border-red-500 text-red-500">
                        {priority}
                    </Badge>
                );
            case 'High':
                return (
                    <Badge variant="outline" className="border-orange-500 text-orange-500">
                        {priority}
                    </Badge>
                );
            case 'Medium':
                return (
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        {priority}
                    </Badge>
                );
            case 'Low':
                return (
                    <Badge variant="outline" className="border-green-500 text-green-500">
                        {priority}
                    </Badge>
                );
            default:
                return <Badge variant="outline">{priority}</Badge>;
        }
    };

    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Sangguniang Kabataan Projects">
            <div className="w-full space-y-6 p-6">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Sangguniang Kabataan Projects</h1>
                        <p className="text-muted-foreground">Manage and monitor all SK projects in one place.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="gap-1">
                            <Printer className="h-4 w-4" />
                            Print
                        </Button>
                        <Button variant="outline" className="gap-1">
                            <Download className="h-4 w-4" />
                            Export
                        </Button>
                        <Button variant="add" className="gap-1 text-white">
                            <Calendar className="h-4 w-4" />
                            New Project
                        </Button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalProjects}</div>
                            <p className="text-muted-foreground text-xs">Across all participation</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Completed</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{completedProjects}</div>
                            <p className="text-muted-foreground text-xs">
                                {Math.round((completedProjects / totalProjects) * 100)}% of total projects
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{inProgressProjects}</div>
                            <p className="text-muted-foreground text-xs">
                                {Math.round((inProgressProjects / totalProjects) * 100)}% of total projects
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Planning Phase</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{plannedProjects}</div>
                            <p className="text-muted-foreground text-xs">{Math.round((plannedProjects / totalProjects) * 100)}% of total projects</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                        <Input
                            placeholder="Search projects..."
                            className="pl-8"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[200px]">
                            <Select
                                value={statusFilter}
                                onValueChange={(value) => {
                                    setStatusFilter(value);
                                }}
                            >
                                <SelectTrigger>
                                    <div className="flex w-full items-center gap-2">
                                        <Filter className="h-4 w-4" />
                                        <span>Status: {statusFilter}</span>
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All Statuses</SelectItem>
                                    <SelectItem value="In Progress">In Progress</SelectItem>
                                    <SelectItem value="Completed">Completed</SelectItem>
                                    <SelectItem value="Planning">Planning</SelectItem>
                                    <SelectItem value="On Hold">On Hold</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-[280px]">
                            <Select
                                value={participationFilter}
                                onValueChange={(value) => {
                                    setParticipationFilter(value);
                                }}
                            >
                                <SelectTrigger>
                                    <div className="flex w-full items-center gap-2">
                                        <Filter className="h-4 w-4" />
                                        <span>Participation: {participationFilter}</span>
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map((dept) => (
                                        <SelectItem key={dept} value={dept}>
                                            {dept}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle>Project List</CardTitle>
                        <CardDescription>
                            Showing {filteredProjects.length} of {totalProjects} projects
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Project Name</TableHead>
                                    <TableHead>Participation</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Budget</TableHead>
                                    <TableHead>
                                        <div className="flex items-center">
                                            Completion
                                            <ArrowUpDown className="ml-2 h-4 w-4" />
                                        </div>
                                    </TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredProjects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell className="font-medium">{project.id}</TableCell>
                                        <TableCell>{project.name}</TableCell>
                                        <TableCell>{project.department}</TableCell>
                                        <TableCell>{getStatusBadge(project.status)}</TableCell>
                                        <TableCell>{getPriorityBadge(project.priority)}</TableCell>
                                        <TableCell>{project.budget}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="h-2.5 w-full rounded-full bg-gray-200">
                                                    <div
                                                        className="h-2.5 rounded-full bg-green-600"
                                                        style={{ width: `${project.completion}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs">{project.completion}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View details</DropdownMenuItem>
                                                    <DropdownMenuItem>Edit project</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>View budget</DropdownMenuItem>
                                                    <DropdownMenuItem>View timeline</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">Archive project</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {filteredProjects.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={8} className="text-muted-foreground py-6 text-center">
                                            No projects found matching your criteria
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default Projects;
