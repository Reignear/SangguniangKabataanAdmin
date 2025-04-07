import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import Grid from '../../../assets/grid.png';
import Plus from '../../../assets/plus.png';
import TableImage from '../../../assets/table.png';

export default function KKOfficers() {
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('table'); // State to manage view mode (grid or table)

    return (
        <div className="flex h-full w-full flex-col rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-end">
                <Input placeholder="Search" className="w-full max-w-xs" />
                <div className="mr-2 ml-2 rounded-lg border-2">
                    <Button variant="format" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-gray-200' : ''}>
                        <img src={Grid} alt="Grid Icon" className="h-5 w-5" />
                    </Button>
                    <Button variant="format" onClick={() => setViewMode('table')} className={viewMode === 'table' ? 'bg-gray-200' : ''}>
                        <img src={TableImage} alt="Grid Icon" className="h-5 w-5" />
                    </Button>
                </div>

                <Button className="flex flex-row items-center gap-2 bg-blue-400" variant="add">
                    Add member
                    <img src={Plus} alt="Plus icon" className="h-4 w-4" />
                </Button>
            </div>
            <Separator className="mt-5 mb-5" />
            <div>
                <h1>Filters</h1>
                <div className="flex w-full flex-row items-center gap-2 pt-2">
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Alphabetical Order" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">A-Z</SelectItem>
                                    <SelectItem value="banana">Z-A</SelectItem>
                                    <SelectItem value="blueberry">by Age</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Committee</SelectItem>
                                    <SelectItem value="banana">Committee</SelectItem>
                                    <SelectItem value="blueberry">Committee</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sort</SelectLabel>
                                    <SelectItem value="apple">All</SelectItem>
                                    <SelectItem value="banana">Male</SelectItem>
                                    <SelectItem value="blueberry">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="mt-5 rounded-lg border-2">
                {viewMode === 'table' ? (
                    <div>
                        <Table>
                            <TableCaption>List of members </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Member</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Gender</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>image here</TableCell>
                                    <TableCell>Reignear Magallanes</TableCell>
                                    <TableCell>Biot</TableCell>
                                    <TableCell>Committee</TableCell>
                                    <TableCell>
                                        <Button variant="destructive">View</Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>image here</TableCell>
                                    <TableCell>Reignear Magallanes</TableCell>
                                    <TableCell>Biot</TableCell>
                                    <TableCell>Committee</TableCell>
                                    <TableCell>
                                        <Button variant="destructive">View</Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>image here</TableCell>
                                    <TableCell>Reignear Magallanes</TableCell>
                                    <TableCell>Biot</TableCell>
                                    <TableCell>Committee</TableCell>
                                    <TableCell>
                                        <Button variant="destructive">View</Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>image here</TableCell>
                                    <TableCell>Reignear Magallanes</TableCell>
                                    <TableCell>Biot</TableCell>
                                    <TableCell>Committee</TableCell>
                                    <TableCell>
                                        <Button variant="destructive">View</Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>image here</TableCell>
                                    <TableCell>Reignear Magallanes</TableCell>
                                    <TableCell>Biot</TableCell>
                                    <TableCell>Committee</TableCell>
                                    <TableCell>
                                        <Button variant="destructive">View</Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>image here</TableCell>
                                    <TableCell>Reignear Magallanes</TableCell>
                                    <TableCell>Biot</TableCell>
                                    <TableCell>Committee</TableCell>
                                    <TableCell>
                                        <Button variant="destructive">View</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div>Grid here </div>
                )}
            </div>
        </div>
    );
}
