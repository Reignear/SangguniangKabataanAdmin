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
import { Link, usePage } from '@inertiajs/react';

interface CustomAppSideBarProps {
    breadCrumbTitle?: string;
    breadCrumbBarangay?: string;
    sideBarItems: NavItem[];
}

export default function AppSidebar({ breadCrumbTitle, breadCrumbBarangay, sideBarItems, ...props }: CustomAppSideBarProps) {
    const { url } = usePage();
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
                        {sideBarItems.map((item) => {
                            const relativePath = item.href.indexOf('/', 8);
                            const isActive = item.href.startsWith(url, relativePath);

                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className={`p-5 ${isActive ? 'text-white hover:text-white' : ''}`}
                                        style={{ backgroundColor: isActive ? '#1591EA' : '' }}
                                    >
                                        <Link prefetch href={item.href} className="flex w-full items-center justify-start gap-4 rounded-md">
                                            <div className="flex gap-4">
                                                {item.icon && <item.icon className="h-5 w-5" />}
                                                <span className="text-[14px]"> {item.title}</span>
                                            </div>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
