import Sidebar from '@/components/custom/CustomAppSideBar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
    className?: string;
    selectedItem?: string;
}
const SideBarData = [
    {
        title: 'Dashboard',
        href: '#',
    },
    {
        title: 'SK Officials',
        href: '#',
    },
    {
        title: 'KK Officers',
        href: '#',
    },
    {
        title: 'Calendar',
        href: '#',
    },
    {
        title: 'Events',
        href: '#',
    },
    {
        title: 'Projects',
        href: '#',
    },
    {
        title: 'Programs',
        href: '#',
    },
    {
        title: 'Attachments',
        href: '#',
    },
    {
        title: 'Reports',
        href: '#',
    },
    {
        title: 'Settings',
        href: '#',
    },
];
const breadcrumbTitle = 'Sangguniang Kabaatan';
const breadcrumbBarangay = 'BALAGUNAN';

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <Sidebar SideBarMain={SideBarData} breadCrumbTitle={breadcrumbTitle} breadCrumbBarangay={breadcrumbBarangay} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div>
                    <main className={`h-full w-full ${className}`}>
                        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-8">{children}</div>
                    </main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
