'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { default as CustomIcon } from './CustomIcon';
import CustomPopover from './CustomPopover';

interface CustomHeaderProps {
    rightNavItems?: NavItem[];
    title?: string;
    barangay?: string;
    logo?: string;
}

export default function CustomHeader({ title, barangay, logo, rightNavItems = [] }: CustomHeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Background elements that match the welcome section */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-red-500"></div>
                <div className="absolute top-0 -right-5 h-24 w-24 rounded-full bg-blue-500"></div>
            </div>

            {/* Mobile Navigation */}
            <div className="relative md:hidden">
                <div
                    className={cn(
                        'flex items-center justify-between px-4 py-3 transition-all duration-300',
                        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/80',
                    )}
                >
                    <div className="flex items-center gap-2">
                        <CustomIcon imgSrc={logo} className="h-10 w-10" />
                        <div>
                            <h1 className="text-sm font-bold tracking-wide text-red-500 uppercase">{title}</h1>
                            <p className="text-xs font-semibold tracking-wider text-blue-500">{barangay}</p>
                        </div>
                    </div>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] border-l-4 border-l-red-500 p-0">
                            <div className="flex h-full flex-col">
                                <SheetHeader className="border-b p-6">
                                    <div className="flex items-center gap-3">
                                        <CustomIcon imgSrc={logo} className="h-12 w-12" />
                                        <div>
                                            <h1 className="text-lg font-bold tracking-wide text-red-500 uppercase">{title}</h1>
                                            <p className="text-sm font-semibold tracking-wider text-blue-500">{barangay}</p>
                                        </div>
                                    </div>
                                </SheetHeader>

                                <nav className="flex-1 p-6">
                                    <ul className="space-y-3">
                                        {rightNavItems.map((item, index) => (
                                            <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                                                <a
                                                    href={item.href}
                                                    className="flex items-center rounded-lg px-3 py-2 font-medium tracking-wide text-gray-700 transition-colors hover:text-red-500"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.icon && <item.icon className="mr-3 h-4 w-4" />}
                                                    <span>{item.title}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div
                className={cn(
                    'relative hidden shadow-sm transition-all duration-300 md:block',
                    isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-white/80',
                )}
            >
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <CustomIcon imgSrc={logo} className="h-10 w-10" />
                            <div>
                                <h1 className="text-lg font-bold tracking-wide text-red-500 uppercase">{title}</h1>
                                <p className="text-xs font-semibold tracking-wider text-blue-500 uppercase">{barangay}</p>
                            </div>
                        </div>

                        <nav>
                            <CustomPopover
                                trigger={
                                    <Button variant="ghost" size="icon" className={`rounded-md hover:text-red-500`}>
                                        <Menu className="h-5 w-5" />
                                    </Button>
                                }
                                children={
                                    <ul className="flex flex-col gap-y-3 p-4">
                                        {rightNavItems.map((items, index) => (
                                            <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                                                <a href={items.href} className="hover:text-red-500">
                                                    {' '}
                                                    {items.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
