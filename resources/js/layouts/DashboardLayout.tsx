import Sidebar from '@/components/custom/CustomAppSideBar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Attachments from '@/pages/dashboard/Attachments';
import Calendar from '@/pages/dashboard/Calendar';
import Events from '@/pages/dashboard/Events';
import KKOfficers from '@/pages/dashboard/KKOfficers';
import MainDashboard from '@/pages/dashboard/DashboardDashboard';
import Program from '@/pages/dashboard/Programs';
import Projects from '@/pages/dashboard/Projects';
import Reports from '@/pages/dashboard/Reports';
import Settings from '@/pages/dashboard/Settings';
import SKOfficials from '@/pages/dashboard/SKOfficials';
import ABYIP from '@/pages/dashboard/Abyip';
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
                return <MainDashboard />;
            case 'SK Officials':
                return <SKOfficials />;
            case 'KK Officers':
                return <KKOfficers />;
            case 'Calendar':
                return <Calendar />;
            case 'Events':
                return <Events />;
            case 'Projects':
                return <Projects />;
            case 'Programs':
                return <Program />;
            case 'Attachments':
                return <Attachments />;
            case 'Reports':
                return <Reports />;
            case 'Settings':
                return <Settings />;
            case 'ABYIP':
                return <ABYIP/>;
            default:
                return <MainDashboard />;
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
                    <main className={`h-full w-full overflow-hidden ${className}`}>
                        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-4">{renderChild()}</div>
                    </main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
