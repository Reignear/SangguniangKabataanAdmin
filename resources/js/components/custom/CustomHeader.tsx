'use client';

import type { NavItem } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface CustomHeaderProps {
    rightNavItems?: NavItem[];
    title?: string;
    barangay?: string;
    logo?: string;
}

export default function CustomHeader({ title, barangay, logo, rightNavItems = [] }: CustomHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <header className="sticky top-0 z-1 w-full border-b border-red-400/20 px-3 shadow-lg shadow-red-400/20 backdrop-blur-sm transition-all duration-300">
            <div className="">
                <div className="flex items-center justify-between p-2">
                    <div className="flex flex-row items-center gap-2">
                        <img src={logo} alt="SK Logo" className="h-5 w-5 md:h-10 md:w-10" />
                        <h1 className="text-lg font-bold text-red-400 uppercase md:text-2xl">
                            {title}
                            <span>{barangay ? ` ${barangay}` : 'Barangay name is not set'}</span>
                        </h1>
                    </div>
                    <div className="">
                        <div className="hidden md:block">
                            <ul className="flex flex-row gap-5">
                                {rightNavItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-gray text-base transition-all duration-300 hover:text-red-400 hover:underline hover:underline-offset-8"
                                    >
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center md:hidden">
                            <Menu onClick={handleOpen} className="h-4 w-4" />
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 z-50 flex h-screen w-1/2 flex-col border-l border-violet-400/20 bg-gray-900/95 p-5 shadow-lg backdrop-blur-sm"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <button onClick={handleClose} className="text-white">
                                    <X />
                                </button>
                            </div>

                            <nav className="flex-1">
                                <ul className="flex flex-col items-center space-y-4">
                                    {rightNavItems.map((item, index) => (
                                        <li key={index} className="text-base text-gray-300 transition-colors hover:text-red-400">
                                            <a href={item.href} onClick={handleClose} className="block py-2">
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
