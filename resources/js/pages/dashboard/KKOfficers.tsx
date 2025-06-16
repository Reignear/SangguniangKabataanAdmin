import CustomDialog from '@/components/custom/CustomDialog';
import { FilterConfig } from '@/components/custom/CustomFilter';
import CustomForm from '@/components/custom/CustomForm';
import { FilterableTable } from '@/components/custom/CustomTable';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { LayoutGrid, Plus, Table2 } from 'lucide-react';
import { useState } from 'react';
import Hisoka from '../../../assets/hisoka.jpg';

import { LocationInformation, PersonalInformation } from '../../../data/FieldData';
const userData = [
    { id: '1', image: Hisoka, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: '2', image: Hisoka, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: '3', image: Hisoka, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
    { id: '4', image: Hisoka, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
    { id: '5', image: Hisoka, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Inactive' },
    { id: '6', image: Hisoka, name: 'David Lee', email: 'david@example.com', role: 'User', status: 'Active' },
    { id: '7', image: Hisoka, name: 'Eva Garcia', email: 'eva@example.com', role: 'Editor', status: 'Active' },
    { id: '8', image: Hisoka, name: 'Frank Miller', email: 'frank@example.com', role: 'Admin', status: 'Active' },
    { id: '9', image: Hisoka, name: 'Grace Taylor', email: 'grace@example.com', role: 'User', status: 'Inactive' },
    { id: '10', image: Hisoka, name: 'Henry Clark', email: 'henry@example.com', role: 'Editor', status: 'Active' },
    { id: '11', image: Hisoka, name: 'Ivy Robinson', email: 'ivy@example.com', role: 'User', status: 'Active' },
    { id: '12', image: Hisoka, name: 'Jack White', email: 'jack@example.com', role: 'Admin', status: 'Inactive' },
    { id: '13', image: Hisoka, name: 'Karen Martin', email: 'karen@example.com', role: 'Editor', status: 'Active' },
    { id: '14', image: Hisoka, name: 'Leo Adams', email: 'leo@example.com', role: 'User', status: 'Active' },
    { id: '15', image: Hisoka, name: 'Mia Scott', email: 'mia@example.com', role: 'Admin', status: 'Inactive' },
    { id: '16', image: Hisoka, name: 'Noah Baker', email: 'noah@example.com', role: 'User', status: 'Active' },
    { id: '17', image: Hisoka, name: 'Olivia King', email: 'olivia@example.com', role: 'Editor', status: 'Active' },
    { id: '18', image: Hisoka, name: 'Peter Wright', email: 'peter@example.com', role: 'Admin', status: 'Active' },
    { id: '19', image: Hisoka, name: 'Quinn Hill', email: 'quinn@example.com', role: 'User', status: 'Inactive' },
    { id: '20', image: Hisoka, name: 'Ryan Evans', email: 'ryan@example.com', role: 'Editor', status: 'Active' },
];
const columns = [
    { id: 'name', header: 'Name', accessorKey: 'name', enableSorting: true },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'role', header: 'Role', accessorKey: 'role' },
    { id: 'status', header: 'Status', accessorKey: 'status' },
];
const filters: FilterConfig[] = [
    {
        id: 'name',
        label: 'Search by Name',
        type: 'input',
        placeholder: 'Search name...',
        filterClassName: 'w-[200px]',
    },
    {
        id: 'role',
        label: 'Filter by Role',
        type: 'select',
        placeholder: 'Select role',
        options: [
            { value: 'Admin', label: 'Admin' },
            { value: 'User', label: 'User' },
            { value: 'Editor', label: 'Editor' },
        ],
        filterClassName: 'w-[200px]',
    },
    {
        id: 'status',
        label: 'Filter by Status',
        type: 'select',
        placeholder: 'Select status',
        options: [
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
        ],
        filterClassName: 'w-[200px]',
    },
];

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

    return (
        <DashboardLayout breadCrumbTitle="Katipunan ng Kabataan Officers" className="overflow-hidden">
            <div className="max-full flex h-[600px] w-full flex-col rounded-lg bg-gray-100 p-4">
                <div className="flex w-full flex-row items-center justify-between">
                    <h1>Filters</h1>
                    <div className="flex">
                        <div className="mr-2 ml-2 flex rounded-lg border-2">
                            <Button variant="empty" onClick={() => setViewMode('table')} className={viewMode === 'table' ? 'bg-red-400' : ''}>
                                <Table2 className="h-5 w-5" />
                            </Button>
                            <Button variant="empty" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-red-400' : ''}>
                                <LayoutGrid className="h-5 w-5" />
                            </Button>
                        </div>

                        <CustomDialog
                            title="Add new KK member"
                            description="Fill out the form below to add a new member."
                            trigger={
                                <Button className="flex flex-row items-center gap-2" variant="add">
                                    <Plus />
                                </Button>
                            }
                            children={renderFormFields()}
                            buttonName="Add Member"
                            buttonVariant={'add'}
                        />
                    </div>
                </div>
                <div className="mt-5 max-h-full overflow-y-auto">
                    {viewMode === 'table' ? (
                        <div className="w-full">
                            <FilterableTable data={userData} columns={columns} filters={filters} initialPageSize={5} defaultSortColumn="name" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 justify-center gap-4 p-2 sm:grid-cols-3 lg:grid-cols-4">
                            {userData.map((officer) => (
                                <div
                                    key={officer.id}
                                    className="flex aspect-video max-w-[350px] min-w-[160px] flex-col gap-y-5 rounded-xl bg-green-200"
                                >
                                    <div className="flex flex-col items-center justify-center gap-3 pt-4 pr-4 pl-4 md:flex-row md:items-start md:justify-start">
                                        <div>
                                            <img src={officer.image} alt="" className="h-15 w-24 rounded-md md:w-15" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-lg font-semibold">{officer.name}</h1>
                                            <p>{officer.email}</p>
                                        </div>
                                    </div>
                                    <div className="pr-2 pl-2">
                                        <Separator className="bg-black" />
                                    </div>

                                    <div className="pb-2 text-center text-lg md:pl-4 md:text-start">
                                        <h1 className="font-bold">{officer.role}</h1>
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
