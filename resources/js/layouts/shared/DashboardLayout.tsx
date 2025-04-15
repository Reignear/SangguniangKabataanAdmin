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
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

import dropdown from '../../../assets/dropdown.png';
import user from '../../../assets/user.png';
import { SideBarItem } from '../data/SideBarData';

interface DashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}
const breadcrumbTitle = 'Sangguniang Kabaatan';
const breadcrumbBarangay = 'BALAGUNAN';
const Username = 'Reignear Magallanes';
const position = 'SK Councilor';
export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <Sidebar sideBarItems={SideBarItem} breadCrumbTitle={breadcrumbTitle} breadCrumbBarangay={breadcrumbBarangay} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex w-full items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex w-full items-center justify-between">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink>{'asd'}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <div className="flex items-center gap-5 pr-5">
                                <Avatar>
                                    <AvatarImage src={user} className="h-5 w-5" />
                                </Avatar>
                                <div>
                                    <h1 className="">{Username}</h1>
                                    <p className="text-[13px]">{position}</p>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <img src={dropdown} className="h-5 w-5" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full">
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
