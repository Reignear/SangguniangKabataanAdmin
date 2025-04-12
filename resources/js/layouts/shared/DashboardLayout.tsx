import Sidebar from '@/components/custom/CustomAppSideBar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

import { SideBarItem } from '../data/SideBarData';

interface DashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}
const breadcrumbTitle = 'Sangguniang Kabaatan';
const breadcrumbBarangay = 'BALAGUNAN';

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <Sidebar sideBarItems={SideBarItem} breadCrumbTitle={breadcrumbTitle} breadCrumbBarangay={breadcrumbBarangay} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink>{}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div>
                    <main className={`h-full w-full overflow-hidden ${className}`}>
                        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-4">{children}</div>
                    </main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
