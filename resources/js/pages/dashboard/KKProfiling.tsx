import CustomDialog from '@/components/custom/CustomDialog';
import { FilterConfig } from '@/components/custom/CustomFilter';
import { FilterableTable } from '@/components/custom/CustomTable';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Plus } from 'lucide-react';
const youthDate = [
    {
        id: 1,
        youthPurok: 'Purok 1',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
    {
        id: 2,
        youthPurok: 'Purok 2',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
    {
        id: 3,
        youthPurok: 'Purok 3',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
    {
        id: 4,
        youthPurok: 'Purok 4',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
    {
        id: 5,
        youthPurok: 'Purok 5',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
    {
        id: 1,
        youthPurok: 'Purok 6',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
    {
        id: 2,
        youthPurok: 'Purok 7',
        youthName: 'Reignear Magallanes',
        youthGender: 'Biot',
        youthBirthdate: '2000-01-01',
    },
];
const columns = [
    { id: 'youthPurok', header: 'Purok', accessorKey: 'youthPurok' },
    { id: 'youthName', header: 'Name', accessorKey: 'youthName', enableSorting: true },
    { id: 'youthGender', header: 'Gender', accessorKey: 'youthGender' },
    { id: 'youthBirthdate', header: 'Birthdate', accessorKey: 'youthBirthdate' },
];
const filters: FilterConfig[] = [
    {
        id: 'youthPurok',
        label: 'Search by Purok',
        type: 'input',
        placeholder: 'Search purok...',
    },
    {
        id: 'youthName',
        label: 'Search by Name',
        type: 'input',
        placeholder: 'Search name...',
    },
    {
        id: 'youthGender',
        label: 'Filter by Gender',
        type: 'select',
        placeholder: 'Select gender',
        options: [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
        ],
    },
];
export default function KKProfiling() {
    return (
        <div>
            <DashboardLayout className="overflow-hidden" breadCrumbTitle="Katipunan ng Kabataan Profiling">
                <div className="flex h-[600px] w-full flex-col gap-y-2 rounded-lg bg-gray-100 p-4">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex w-full flex-row items-center justify-between gap-2">
                            <h1>Filters</h1>

                            <CustomDialog
                                title="Add new youth"
                                description="Fill out the form below to add new youth"
                                trigger={
                                    <Button variant={'add'}>
                                        <Plus />
                                    </Button>
                                }
                                children={<h1>Hello</h1>}
                                buttonName="Add Youth"
                                buttonVariant={'add'}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex h-full w-full flex-col">
                            <FilterableTable data={youthDate} columns={columns} filters={filters} initialPageSize={5} defaultSortColumn="youthName" />
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </div>
    );
}
