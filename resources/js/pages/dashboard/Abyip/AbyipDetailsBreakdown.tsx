import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Search } from 'lucide-react';
const budgetBreakdown = [
    {
        id: 1,
        name: 'Scholarship Fund',
        category: 'Educational Programs',
        subcategory: 'Financial Aid',
        allocation: 650000,
        spent: 162500,
        remaining: 487500,
        status: 'On Track',
    },
    {
        id: 2,
        name: 'After-School Tutoring',
        category: 'Educational Programs',
        subcategory: 'Academic Support',
        allocation: 425000,
        spent: 106250,
        remaining: 318750,
        status: 'On Track',
    },
    {
        id: 3,
        name: 'Summer Sports Camp',
        category: 'Recreational Activities',
        subcategory: 'Sports Programs',
        allocation: 380000,
        spent: 95000,
        remaining: 285000,
        status: 'On Track',
    },
    {
        id: 4,
        name: 'Youth Leadership',
        category: 'Career Development',
        subcategory: 'Leadership Training',
        allocation: 320000,
        spent: 80000,
        remaining: 240000,
        status: 'On Track',
    },
    {
        id: 5,
        name: 'Arts & Music Program',
        category: 'Recreational Activities',
        subcategory: 'Creative Arts',
        allocation: 290000,
        spent: 72500,
        remaining: 217500,
        status: 'On Track',
    },
    {
        id: 6,
        name: 'Mental Health Workshops',
        category: 'Mental Health Support',
        subcategory: 'Wellness Programs',
        allocation: 275000,
        spent: 68750,
        remaining: 206250,
        status: 'On Track',
    },
    {
        id: 7,
        name: 'Internship Placement',
        category: 'Career Development',
        subcategory: 'Work Experience',
        allocation: 265000,
        spent: 66250,
        remaining: 198750,
        status: 'On Track',
    },
    {
        id: 8,
        name: 'STEM Education',
        category: 'Educational Programs',
        subcategory: 'Technical Education',
        allocation: 245000,
        spent: 61250,
        remaining: 183750,
        status: 'On Track',
    },
    {
        id: 9,
        name: 'Community Service',
        category: 'Community Outreach',
        subcategory: 'Volunteer Programs',
        allocation: 195000,
        spent: 48750,
        remaining: 146250,
        status: 'On Track',
    },
    {
        id: 10,
        name: 'Digital Literacy',
        category: 'Educational Programs',
        subcategory: 'Technical Education',
        allocation: 180000,
        spent: 45000,
        remaining: 135000,
        status: 'On Track',
    },
    {
        id: 11,
        name: 'Staff Salaries',
        category: 'Administrative Costs',
        subcategory: 'Personnel',
        allocation: 450000,
        spent: 112500,
        remaining: 337500,
        status: 'On Track',
    },
    {
        id: 12,
        name: 'Facilities Maintenance',
        category: 'Administrative Costs',
        subcategory: 'Facilities',
        allocation: 175000,
        spent: 43750,
        remaining: 131250,
        status: 'On Track',
    },
    {
        id: 13,
        name: 'Transportation Services',
        category: 'Administrative Costs',
        subcategory: 'Operations',
        allocation: 100000,
        spent: 25000,
        remaining: 75000,
        status: 'On Track',
    },
    {
        id: 14,
        name: 'Peer Counseling',
        category: 'Mental Health Support',
        subcategory: 'Support Services',
        allocation: 210000,
        spent: 52500,
        remaining: 157500,
        status: 'On Track',
    },
    {
        id: 15,
        name: 'Youth Sports Leagues',
        category: 'Recreational Activities',
        subcategory: 'Sports Programs',
        allocation: 300000,
        spent: 75000,
        remaining: 225000,
        status: 'On Track',
    },
];
export default function DetailsBreakdown() {
    return (
        <Card>
            <CardContent>
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Detailed Budget Breakdown</h1>
                    <p className="text-muted-foreground">Line-by-line breakdown of all budget allocations and expenditures.</p>
                </div>
                <div className="flex w-full flex-row items-center gap-2 p-4">
                    <div className="relative flex-1">
                        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                        <Input type="search" placeholder="Search name or participation" className="pl-8" />
                    </div>
                    <Select>
                        <SelectTrigger className="max-w-[300px]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Year</SelectLabel>
                                <SelectItem value="2025-2026">2025-2026</SelectItem>
                                <SelectItem value="2024-2025">2024-2025</SelectItem>
                                <SelectItem value="2023-2024">2023-2024</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="m-4 rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-muted-foreground">Program Item</TableHead>
                                <TableHead className="text-muted-foreground">Category</TableHead>
                                <TableHead className="text-muted-foreground">Sub Category</TableHead>
                                <TableHead className="text-muted-foreground">Allocation</TableHead>
                                <TableHead className="text-muted-foreground">Spent</TableHead>
                                <TableHead className="text-muted-foreground">Remaining</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {budgetBreakdown.map((item) => (
                                <TableRow className="hover:bg-slate-100" key={item.id}>
                                    <TableCell className="pt-4 pb-4">{item.name}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.subcategory}</TableCell>
                                    <TableCell>{item.allocation}</TableCell>
                                    <TableCell>{item.spent}</TableCell>
                                    <TableCell>{item.remaining}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
