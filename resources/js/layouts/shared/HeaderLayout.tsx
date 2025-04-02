import CustomHeader from '@/components/custom/CustomHeader';
import { type BreadcrumbItem, type NavItem } from '@/types';
import type { PropsWithChildren } from 'react';

interface SharedHeaderProps extends PropsWithChildren {
    breadcrumbs?: BreadcrumbItem[];
    rightNavItems?: NavItem[];
    title?: string;
}
export default function HeaderLayout({ title, rightNavItems = [] }: SharedHeaderProps) {
    <CustomHeader title={title} rightNavItems={rightNavItems} />;
}
