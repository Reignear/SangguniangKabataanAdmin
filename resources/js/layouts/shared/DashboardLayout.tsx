import Sidebar from '@/components/custom/CustomAppSideBar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Avatar } from '@radix-ui/react-avatar';
import { Bell, ChevronDown } from 'lucide-react';
import { SideBarItem } from '../../../data/SideBarData';

interface DashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
    breadCrumbTitle?: string;
}
const breadcrumbTitle = 'Sangguniang Kabaatan';
const breadcrumbBarangay = 'BALAGUNAN';
const Username = 'Reignear Magallanes';
const position = 'SK Councilor';

export default function DashboardLayout({ children, className, breadCrumbTitle }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <Sidebar sideBarItems={SideBarItem} breadCrumbTitle={breadcrumbTitle} breadCrumbBarangay={breadcrumbBarangay} />
            <SidebarInset>
                <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-white">
                    <div className="flex w-full items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex w-full items-center justify-between">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink className="hover:cursor-pointer">{breadCrumbTitle}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className="flex items-center gap-5 pr-5">
                                <Avatar>
                                    <Bell className="h-5 w-5" />
                                </Avatar>
                                <div>
                                    <h1 className="">{Username}</h1>
                                    <p className="text-[13px]">{position}</p>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <ChevronDown className="h-5 w-5" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full p-4">
                                        <DropdownMenuLabel className="flex justify-center">My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Button variant="link" className="w-24">
                                                Profile
                                            </Button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Button variant="link" className="w-24" onClick={() => route('dashboard.settings')}>
                                                Settings
                                            </Button>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Button variant="link" className="w-24">
                                                Logout
                                            </Button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
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
