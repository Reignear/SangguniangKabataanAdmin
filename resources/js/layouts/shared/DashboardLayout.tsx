import Sidebar from '@/components/custom/CustomAppSideBar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

interface DashboardLayoutProps {
    className?: string;
}

const breadcrumbTitle = 'Sangguniang Kabaatan';
const breadcrumbBarangay = 'BALAGUNAN';

export default function DashboardLayout({ className }: DashboardLayoutProps) {
    const [active, setActive] = React.useState<string | null>('Dashboard');
    const renderChild = () => {
        switch (active) {
            case 'Dashboard':
                return <div>Dashboard Content</div>;

            case 'SK Officials':
                return <div>SK Officials Content</div>;
            case 'KK Officers':
                return <div>KK Officers Content</div>;
            case 'Calendar':
                return <div>Calendar Content</div>;
            case 'Events':
                return <div>Events Content</div>;
            case 'Projects':
                return <div>Projects Content</div>;
            case 'Programs':
                return <div>Programs Content</div>;
            case 'Attachments':
                return <div>Attachments Content</div>;
            case 'Reports':
                return <div>Reports Content</div>;
            case 'Settings':
                return <div>Settings Content</div>;
            default:
                return <div>Default Content</div>;
        }
    };
    console.log('Active state in DashboardLayout:', active);
    return (
        <SidebarProvider>
            <Sidebar breadCrumbTitle={breadcrumbTitle} breadCrumbBarangay={breadcrumbBarangay} active={active} setActive={setActive} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">{active}</BreadcrumbLink>
                                </BreadcrumbItem>
                                {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                                {/* <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem> */}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div>
                    <main className={`h-full w-full ${className}`}>
                        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-8">{renderChild()}</div>
                    </main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
