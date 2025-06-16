/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, ArrowLeft, ArrowRight, Hammer, ScrollText, Users } from 'lucide-react';
import { JSX, useEffect, useState } from 'react';

const data = [
    {
        id: '1',
        title: 'Youth Environmental Forum',
        description: 'Forum discussing environmental issues and sustainable solutions',
        finishedDate: '3/5/2024',
        category: 'Program',
        fileCount: 3,
        attachments: [
            {
                attachmentTitle: 'Youth Environmental Forum',
                attachmentType: 'Document',
                attachmentSpecifiedType: 'PDF',
                attachmentSize: '1.2 MB',
                attachmentDate: '2024-03-05',
                attachmentUploader: 'John Doe',
            },
            {
                attachmentTitle: 'Annual Report 2023',
                attachmentType: 'Zipped',
                attachmentSpecifiedType: 'DOCX',
                attachmentSize: '2.8 MB',
                attachmentDate: '2024-01-15',
                attachmentUploader: 'John Doe',
            },
        ],
    },
    {
        id: '2',
        title: 'Barangay Tree Planting',
        description: 'A community-wide effort to plant trees in public spaces',
        finishedDate: '3/10/2024',
        category: 'Activity',
        fileCount: 4,
        attachments: [
            {
                attachmentTitle: 'Event Poster',
                attachmentType: 'Image',
                attachmentSpecifiedType: 'JPEG',
                attachmentSize: '780 KB',
                attachmentDate: '2024-04-22',
                attachmentUploader: 'John Doe',
            },
            {
                attachmentTitle: 'Source Files',
                attachmentType: 'Zip Files',
                attachmentSpecifiedType: 'ZIP',
                attachmentSize: '5.3 MB',
                attachmentDate: '2024-02-10',
                attachmentUploader: 'John Doe',
            },
        ],
    },
    {
        id: '3',
        title: 'SK Coding Bootcamp',
        description: 'Technology upskilling program for the youth',
        finishedDate: '3/18/2024',
        category: 'Project',
        fileCount: 2,
        attachments: [
            {
                attachmentTitle: 'Volunteer Orientation Slides',
                attachmentType: 'Document',
                attachmentSpecifiedType: 'PPTX',
                attachmentSize: '3.1 MB',
                attachmentDate: '2024-03-30',
                attachmentUploader: 'John Doe',
            },
            {
                attachmentTitle: 'Cleanup Day Gallery',
                attachmentType: 'Image',
                attachmentSpecifiedType: 'PNG',
                attachmentSize: '2.4 MB',
                attachmentDate: '2024-05-01',
                attachmentUploader: 'John Doe',
            },
        ],
    },
    {
        id: '4',
        title: 'Mental Health Awareness Workshop',
        description: 'Educational session on youth mental well-being',
        finishedDate: '4/1/2024',
        category: 'Program',
        fileCount: 5,
        attachmens: [
            {
                attachmentTitle: 'Volunteer Orientation Slides',
                attachmentType: 'Document',
                attachmentSpecifiedType: 'PPTX',
                attachmentSize: '3.1 MB',
                attachmentDate: '2024-03-30',
                attachmentUploader: 'John Doe',
            },
            {
                attachmentTitle: 'Cleanup Day Gallery',
                attachmentType: 'Images',
                attachmentSpecifiedType: 'PNG',
                attachmentSize: '2.4 MB',
                attachmentDate: '2024-05-01',
                attachmentUploader: 'John Doe',
            },
        ],
    },
    {
        id: '5',
        title: 'Coastal Clean-up Day',
        description: 'Volunteers gather to clean the local beach and coastlines',
        finishedDate: '4/10/2024',
        category: 'Activity',
        fileCount: 3,
    },
    {
        id: '6',
        title: 'SK E-sports Tournament',
        description: 'Inter-barangay e-sports competition to promote digital skills',
        finishedDate: '4/15/2024',
        category: 'Project',
        fileCount: 6,
    },
    {
        id: '7',
        title: 'Youth Voter Education Campaign',
        description: 'Awareness drive to educate first-time voters',
        finishedDate: '5/1/2024',
        category: 'Program',
        fileCount: 1,
    },
    {
        id: '8',
        title: 'Barangay Fitness Challenge',
        description: 'Monthly challenge promoting physical activity among youth',
        finishedDate: '5/8/2024',
        category: 'Activity',
        fileCount: 2,
    },
    {
        id: '9',
        title: 'Community Garden Project',
        description: 'Building and maintaining a shared garden space',
        finishedDate: '5/20/2024',
        category: 'Project',
        fileCount: 4,
    },
    {
        id: '10',
        title: 'SK Debate Training Workshop',
        description: 'Developing public speaking and critical thinking',
        finishedDate: '6/1/2024',
        category: 'Program',
        fileCount: 3,
    },
    {
        id: '11',
        title: 'Riverbank Clean-up Initiative',
        description: 'Removing trash and planting trees along riverbanks',
        finishedDate: '6/5/2024',
        category: 'Activity',
        fileCount: 5,
    },
    {
        id: '12',
        title: 'Barangay Mural Art Project',
        description: 'Collaborative youth mural painting on public walls',
        finishedDate: '6/15/2024',
        category: 'Project',
        fileCount: 2,
    },
    {
        id: '13',
        title: 'Youth Entrepreneurship Seminar',
        description: 'Introduction to starting and managing a business',
        finishedDate: '7/1/2024',
        category: 'Program',
        fileCount: 4,
    },
    {
        id: '14',
        title: 'SK Bike for a Cause',
        description: 'Charity cycling event to raise funds for school supplies',
        finishedDate: '7/10/2024',
        category: 'Activity',
        fileCount: 3,
    },
    {
        id: '15',
        title: 'Barangay Recycling Drive',
        description: 'Household waste recycling and awareness campaign',
        finishedDate: '7/20/2024',
        category: 'Project',
        fileCount: 7,
    },
    {
        id: '16',
        title: 'Youth Disaster Preparedness Training',
        description: 'Simulations and education on handling natural disasters',
        finishedDate: '8/1/2024',
        category: 'Program',
        fileCount: 2,
    },
    {
        id: '17',
        title: 'Neighborhood Watch Patrol',
        description: 'Youth volunteers assist in community safety',
        finishedDate: '8/10/2024',
        category: 'Activity',
        fileCount: 1,
    },
];

type PPACardProps = {
    activeCategory: string;
    searchQuery: string;
    onCardClick: (ppa: (typeof data)[0]) => void;
};

export default function PPACard({ activeCategory, searchQuery, onCardClick }: PPACardProps) {
  
    // Filter and sort data based on active category and search query
    const filterCategory = data
        .sort((a, b) => a.category.localeCompare(b.category))
        .filter((item) => {
            const matchFilter = item.category.toLowerCase() === activeCategory.toLowerCase();
            const searchFilter = item.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchFilter && searchFilter;
        });
    //Dynamic icon based on category
    const getCategoryIcon = (category: string) => {
        const icons: Record<string, JSX.Element> = {
            Program: <ScrollText className="h-4 w-4" />,
            Activity: <Activity className="h-4 w-4" />,
            Project: <Hammer className="h-4 w-4" />,
        };
        return icons[category] || <Users className="h-4 w-4" />;
    };

    //Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(filterCategory.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filterCategory.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="mt-3 grid w-full grid-cols-3 gap-2">
                {currentItems.map((ppa) => (
                    <Card
                        key={ppa.id}
                        className={`transition-shadow duration-200 ease-in-out hover:cursor-pointer hover:shadow-md ${activeCategory === ppa.category.toLowerCase() ? 'border-blue-500 shadow-lg' : ' '}`}
                        onClick={() => onCardClick(ppa)}
                    >
                        <CardContent>
                            <div className="flex flex-row items-center gap-4">
                                {getCategoryIcon(ppa.category)}
                                <h1 className="rounded-full border p-1 pr-5 pl-5 text-sm">{ppa.category}</h1>
                            </div>
                            <div className="mt-3 flex w-full flex-col gap-1">
                                <h1 className="font-semibold">{ppa.title}</h1>
                                <p className="text-muted-foreground text-sm">{ppa.description}</p>
                                <div className="mt-2 flex w-full items-center justify-between">
                                    <p className="text-muted-foreground text-sm">{ppa.finishedDate}</p>
                                    <h1 className="text-muted-foreground text-sm">{ppa.fileCount} files</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* <Pagination></Pagination> */}
            </div>
            {currentItems.length === 0 && (
                <div className="py-12 text-center">
                    <h3 className="text-lg font-medium">No {activeCategory.toLowerCase()} found</h3>
                    <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
                </div>
            )}
            <div className="mt-1 flex items-center justify-end">
                <div className="p-4 pt-0 pb-0">
                    <Button variant="empty" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <ArrowLeft />
                    </Button>
                    <Button variant="empty" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
