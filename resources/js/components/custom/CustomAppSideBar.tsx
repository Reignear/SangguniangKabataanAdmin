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
import { type BreadcrumbItem } from '@/types';

interface CustomAppSideBarProps {
    SideBarMain?: BreadcrumbItem[];
    breadCrumbTitle?: string;
    breadCrumbBarangay?: string;
    onClick?: (item: string) => void;
}

export default function AppSidebar({ SideBarMain = [], breadCrumbTitle, breadCrumbBarangay, onClick }: CustomAppSideBarProps) {
    return (
        <Sidebar>
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
                        {SideBarMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className="font-medium"
                                        onClick={() => {
                                            onClick?.(item.title);
                                            console.log('Selected Item in custom appbar:', item.title);
                                        }}
                                    >
                                        {item.title}
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <div className="mt-auto">
                    <Button variant="link">Logout</Button>
                </div>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
