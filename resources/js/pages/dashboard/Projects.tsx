/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FilterableTable } from '@/components/custom/CustomTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Calendar, Download, Printer } from 'lucide-react';
import { projectColumns, projectFilter } from '../../../data/ProjectDataFields';
// Mock data for projects
const progress = (completion: number) => {
    {
        if (completion >= 75) {
            return <Progress value={completion} valueColor="#0acd36" />;
        } else if (completion >= 50) {
            return <Progress value={completion} valueColor="#eeeb15" />;
        } else {
            return <Progress value={completion} valueColor="#e71515" />;
        }
    }
};
const projectsData = [
    {
        id: 'GOV-2023-001',
        projectName: 'Public Infrastructure Renewal',
        participation: 'Health',
        status: 'In Progress',
        budget: '$2,500,000',
        finishDate: '2023-12-30',
        completion: 60,
    },
    {
        id: 'GOV-2023-002',
        projectName: 'Digital Services Transformation',
        participation: 'Education',
        status: 'Planning',
        budget: '$1,200,000',
        finishDate: '2024-02-28',
        completion: 15,
    },
    {
        id: 'GOV-2023-003',
        projectName: 'Community Health Initiative',
        participation: 'Economic Empowerment',
        status: 'Completed',
        budget: '$850,000',
        finishDate: '2023-08-10',
        completion: 100,
    },
    {
        id: 'GOV-2023-004',
        projectName: 'Environmental Sustainability Program',
        participation: 'Social Inclusion and Equity',
        status: 'On Hold',
        budget: '$1,500,000',
        finishDate: '2024-03-31',
        completion: 20,
    },
    {
        id: 'GOV-2023-005',
        projectName: 'Public Safety Enhancement',
        participation: 'Peace-Building and Security',
        status: 'In Progress',
        budget: '$3,200,000',
        finishDate: '2023-11-30',
        completion: 65,
    },
    {
        id: 'GOV-2023-009',
        projectName: 'Governance',
        participation: 'Governance',
        status: 'Planning',
        budget: '$2,800,000',
        finishDate: '2024-06-30',
        completion: 10,
    },
    {
        id: 'GOV-2023-007',
        projectName: 'Transportation Infrastructure',
        participation: 'Active Citizenship',
        status: 'In Progress',
        budget: '$5,500,000',
        finishDate: '2024-01-15',
        completion: 35,
    },
    {
        id: 'GOV-2023-008',
        projectName: 'Environmental Sustainability Program',
        participation: 'Environment',
        status: 'On Hold',
        budget: '$1,500,000',
        finishDate: '2024-03-31',
        completion: 20,
    },
    {
        id: 'GOV-2023-010',
        projectName: 'Public Safety Enhancement',
        participation: 'Global Mobility',
        status: 'In Progress',
        budget: '$3,200,000',
        finishDate: '2023-11-30',
        completion: 65,
    },
    {
        id: 'GOV-2023-006',
        projectName: 'Education Modernization',
        participation: 'Agriculture',
        status: 'Planning',
        budget: '$2,800,000',
        finishDate: '2024-06-30',
        completion: 90,
    },
];

const statsCardData = [
    { title: 'Total Projects', data: 10, describe: 'Across all participation' },
    { title: 'Completed', data: 15, describe: '10% of total projects' },
    { title: 'In Progress', data: 10, describe: '23% of total projects' },
    { title: 'Planning Phase', data: 29, describe: '1% of total projects' },
];
const projectsDataWithProgress = projectsData.map((project) => ({
    ...project,
    completion: (
        <div className="grid grid-cols-2 items-center gap-2">
            {progress(project.completion)} <span>{project.completion}%</span>
        </div>
    ),
}));

const Projects = () => {
    return (
        <DashboardLayout className="w-full overflow-hidden" breadCrumbTitle="Sangguniang Kabataan Projects">
            <div className="w-full space-y-6 p-4 pt-0">
                <div className="flex flex-col items-center md:justify-between gap-4 md:flex-row md:items-start">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Sangguniang Kabataan Projects</h1>
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
                <div className="w-full">
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                        {statsCardData.map((stat, index) => (
                            <Card key={index}>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h1 className="text-2xl font-bold">{stat.data}</h1>
                                    <p className="text-muted-foreground text-xs">{stat.describe}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <Card className="w-full">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold">Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="w-full">
                        <FilterableTable columns={projectColumns} filters={projectFilter} data={projectsDataWithProgress} />
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default Projects;
