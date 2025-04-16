import CustomDialog from '@/components/custom/CustomDialog';
import CustomForm from '@/components/custom/CustomForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LocationInformation, PersonalInformation } from '@/layouts/data/FieldData';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { useState } from 'react';
import Grid from '../../../assets/grid.png';
import Hisoka from '../../../assets/hisoka.jpg';
import Plus from '../../../assets/plus.png';
import TableImage from '../../../assets/table.png';
export default function KKOfficers() {
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
    const renderFormFields = () => {
        return (
            <>
              
                <div className="mt-5 font-bold">
                    <CustomForm fields={PersonalInformation} title="Personal Details" className="grid grid-cols-3 gap-5 pt-3 font-normal" />
                </div>

                <div className="mt-5 font-bold">
                    <CustomForm fields={LocationInformation} title="Location Details" className="grid grid-cols-3 gap-5 pt-3 font-normal" />
                </div>
            </>
        );
    };

    const OfficerData = [
        {
            id: 1,
            memberImage: Hisoka,
            memberName: 'Reignear Magallanes',
            memberGender: 'Biot',
            memberRole: 'Committee',
        },
        {
            id: 2,
            memberImage: Hisoka,
            memberName: 'Reignear Magallanes',
            memberGender: 'Biot',
            memberRole: 'Committee',
        },
        {
            id: 3,
            memberImage: Hisoka,
            memberName: 'Reignear Magallanes',
            memberGender: 'Biot',
            memberRole: 'Committee',
        },
        {
            id: 4,
            memberImage: Hisoka,
            memberName: 'Reignear Magallanes',
            memberGender: 'Biot',
            memberRole: 'Committee',
        },
    ];
    return (
        <DashboardLayout>
            <div className="flex max-h-lvh w-full flex-col rounded-lg bg-gray-100 p-4">
                <div className="flex items-center justify-end">
                    <Input placeholder="Search" className="w-full max-w-xs" />
                    <div className="mr-2 ml-2 rounded-lg border-2">
                        <Button variant="empty" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-red-400' : ''}>
                            <img src={Grid} alt="Grid Icon" className="h-5 w-5" />
                        </Button>
                        <Button variant="empty" onClick={() => setViewMode('table')} className={viewMode === 'table' ? 'bg-red-400' : ''}>
                            <img src={TableImage} alt="Grid Icon" className="h-5 w-5" />
                        </Button>
                    </div>

                    <CustomDialog
                        title="Add new KK member"
                        description="Fill out the form below to add a new member."
                        trigger={
                            <Button className="flex flex-row items-center gap-2" variant="add">
                                <img src={Plus} alt="Plus icon" className="h-4 w-4" />
                            </Button>
                        }
                        subTitle=""
                        children={renderFormFields()}
                        buttonName="Add Member"
                        buttonVariant={'add'}
                    />
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
                                    {OfficerData.map((officer) => (
                                        <TableRow>
                                            <TableCell>
                                                <img className="h-10 w-10 rounded-md" src={officer.memberImage} alt="image" />
                                            </TableCell>
                                            <TableCell>{officer.memberName}</TableCell>
                                            <TableCell>{officer.memberGender}</TableCell>
                                            <TableCell>{officer.memberRole}</TableCell>
                                            <TableCell>
                                                <Button variant="add" className="hover:cursor-pointer" key={officer.id}>
                                                    View
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 justify-center gap-4 p-2 sm:grid-cols-3 lg:grid-cols-4">
                            {OfficerData.map((officer) => (
                                <div
                                    key={officer.id}
                                    className="flex aspect-video max-w-[350px] min-w-[250px] flex-col gap-y-5 rounded-xl bg-green-200"
                                >
                                    <div className="flex flex-col items-start justify-start gap-3 pt-4 pr-4 pl-4">
                                        <h1 className="text-lg font-semibold">{officer.memberName}</h1>
                                        <p>{officer.memberGender}</p>
                                        <Separator className="bg-black" />
                                    </div>
                                    <div className="pl-4 text-lg">
                                        <h1 className="font-bold">{officer.memberRole}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
