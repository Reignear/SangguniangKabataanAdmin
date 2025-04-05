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
import { SideBarData } from '@/data/SideBarData';
 

interface CustomAppSideBarProps {
    breadCrumbTitle?: string;
    breadCrumbBarangay?: string;
    onClick?: (item: string) => void;
    active: string | null;
    setActive: (item: string) => void;
}


export default function AppSidebar({ breadCrumbTitle, breadCrumbBarangay, onClick, active, setActive }: CustomAppSideBarProps) {
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
                        {SideBarData.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className={`font-medium ${active === item.title ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}
                                        onClick={() => {
                                            setActive(item.title);
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
