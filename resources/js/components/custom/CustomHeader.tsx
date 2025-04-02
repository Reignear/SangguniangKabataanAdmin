import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { type NavItem } from '@/types';
import { Menu } from 'lucide-react';
import SKLogo from '../../../assets/logo.png';
import CustonIcon from './CustomIcon';

interface CustomHeaderProps {
    rightNavItems?: NavItem[];
    title?: string;
    barangay?: string;
}

export default function CustomHeader({ title, barangay, rightNavItems = [] }: CustomHeaderProps) {
    return (
        <>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild className="m-2 flex items-center justify-between shadow-md md:hidden">
                        <Button>
                            <Menu></Menu>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[50vw] sm:w-[35vw] md:w-[25vw] lg:hidden">
                        <SheetHeader className="font-2xl flex flex-col items-center justify-center font-bold">
                            <CustonIcon imgSrc={SKLogo} className="h-15 w-15" />
                            <h1>{title}</h1>
                            <p className="text-md font-thin">{barangay}</p>
                        </SheetHeader>
                        <div className="flex flex-col items-center justify-center gap-2">
                            {rightNavItems.map((item, index) => (
                                <Button key={index} variant="outline" className="w-28">
                                    <a href={item.href}>{item.title}</a>
                                </Button>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            {/* For desktop size */}
            <div className="mr-2 ml-2 hidden items-center justify-between px-4 shadow-lg md:flex md:items-center md:justify-between md:rounded-lg md:border md:border-slate-300 md:bg-white/50 md:px-4 md:shadow-md">
                <div className="flex flex-col items-center justify-center pt-2 pb-2 font-bold">
                    <h1>{title}</h1>
                    <p className="text-md font-thin">{barangay}</p>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2">
                    {rightNavItems.map((item, index) => (
                        <Button key={index} variant="outline" className="w-28">
                            <a href={item.href}>{item.title}</a>
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
}
