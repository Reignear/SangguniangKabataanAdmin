import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { type NavItem } from '@/types';
import { Menu } from 'lucide-react';
import SKLogo from '../../../assets/logo.png';
import { Button } from '../ui/button';
import CustonIcon from './CustomIcon';

interface CustomHeaderProps {
    rightNavItems?: NavItem[];
    title?: string;
}

export default function CustomHeader({ title, rightNavItems = [] }: CustomHeaderProps) {
    return (
        <>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button>
                            <Menu></Menu>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[50vw] sm:w-[35vw] md:w-[25vw] lg:hidden">
                        <SheetHeader className="font-2xl flex flex-col items-center justify-center font-bold">
                            <CustonIcon imgSrc={SKLogo} className="h-15 w-15" />
                            <SheetTitle>{title}</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col items-center justify-center">
                            <Button>
                                <a href="">Log In</a>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="w-full">
                <NavigationMenu className="w-full">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <div className="flex w-full flex-row items-center justify-between px-4">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="text-lg font-bold">{title || 'Sangguniang Kabataan'}</div>
                                </div>

                                <div className="hidden gap-4 lg:flex">
                                    {rightNavItems.map((item, index) => (
                                        <Button key={index} variant="ghost">
                                            <a href={item.href}>{item.title}</a>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
