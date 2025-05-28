import { FilterConfig } from '../js/components/custom/CustomFilter';

//Budget Expenditure Breakdown (Salary)
export const salaryColumn = [
    { id: 'id', header: 'ID', accessorKey: 'id', columnClassName: 'w-[100px] ' },
    { id: 'name', header: 'Name', accessorKey: 'name', enableSorting: true },
    { id: 'position', header: 'Position', accessorKey: 'position' },
    { id: 'amount', header: 'Amount', accessorKey: 'amount' },
    { id: 'category', header: 'Category', accessorKey: 'category' },
    { id: 'date', header: 'Date', accessorKey: 'date' },
];

export const salaryFilter: FilterConfig[] = [
    {
        id: 'name',
        label: "Officer's Name",
        type: 'input',
        placeholder: "Search salary by officer's name",
        filterClassName: 'w-[300px]',
    },
];

//Budget Expenditure Breakdown (Projects)

//Budget Expenditure Breakdown (Programs)
//Budget Expenditure Breakdown (Events)
