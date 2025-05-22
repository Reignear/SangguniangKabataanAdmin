import { FilterConfig } from '../js/components/custom/CustomFilter';

export const projectColumns = [
    { id: 'id', header: 'ID', accessorKey: 'id', columnClassName: 'w-[150px]' },
    { id: 'projectName', header: 'Project Name', accessorKey: 'projectName', enableSorting: true },
    { id: 'participation', header: 'Participation', accessorKey: 'participation' },
    { id: 'status', header: 'Status', accessorKey: 'status' },
    { id: 'budget', header: 'Budget', accessorKey: 'budget' },
    { id: 'finishDate', header: 'Finish Date', accessorKey: 'finishDate' },
    { id: 'completion', header: 'Completion', accessorKey: 'completion', columnClassName: 'w-[150px]'},
];

export const projectFilter: FilterConfig[] = [
    { id: 'projectName', label: 'Project name', type: 'input', filterClassName: 'w-md', placeholder: 'Search project by project name' },
];
