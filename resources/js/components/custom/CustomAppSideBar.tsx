import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Separator } from '../ui/separator';

interface CustomAppSideBarProps {
    breadCrumbTitle?: string;
    breadCrumbBarangay?: string;
    sideBarItems: NavItem[];
}

export default function AppSidebar({ breadCrumbTitle, breadCrumbBarangay, sideBarItems, ...props }: CustomAppSideBarProps) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="flex justify-center">
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="">{breadCrumbTitle}</span>
                                <span className="text-center font-semibold">{breadCrumbBarangay}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="flex h-full flex-col">
                <SidebarGroup>
                    <SidebarMenu className="flex flex-col gap-4">
                        {sideBarItems.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.href} className="flex w-full items-center justify-start gap-4 rounded-md  ">
                                        <div className='flex gap-4'>
                                            {item.icon && <item.icon className="h-5 w-5" />}
                                            <span className="text-[14px]"> {item.title}</span>
                                        </div>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <div className="mt-auto">
                    <Separator />
                    <Button variant="link">Logout</Button>
                </div>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
