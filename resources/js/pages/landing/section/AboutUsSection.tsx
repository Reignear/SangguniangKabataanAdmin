'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { useRef, useState } from 'react';

interface AboutUsCard {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconClassName?: string;
}

interface AboutUsSectionProps {
    cards: AboutUsCard[];
    title: string;
    description: string;
    className?: string;
}

export default function AboutUsSection({ cards, title, description, className }: AboutUsSectionProps) {
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredCardIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredCardIndex(null);
    };
    const scrollRef = useRef(null);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className || ''}`}
        >
            <div className="text-center">
                <h2 className="text-base font-bold tracking-tight text-gray-900 md:text-4xl">{title}</h2>
                <p className="mx-auto max-w-2xl text-[10px] text-gray-500 md:mt-4 md:text-xl">{description}</p>
            </div>

            <div className="my-4 grid cursor-pointer grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-8">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-full flex-col items-center rounded-lg bg-gray-50 px-1 py-2 text-center shadow-sm transition-all duration-1000 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl md:p-6`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`flex w-10 items-center justify-center rounded-md bg-gray-50 p-2 shadow-md transition-all hover:shadow-lg md:w-18 md:p-6 ${
                                hoveredCardIndex === index ? 'animate-bounce' : ''
                            } ${item.iconClassName}`}
                        >
                            <item.icon className="h-3 w-3 md:h-6 md:w-6" />
                        </div>
                        <h1 className="text-sm font-medium text-gray-900 md:mt-4 md:text-lg">{item.title}</h1>
                        <p className="mt-1 text-[8px] text-gray-500 md:mt-2 md:text-base">{item.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
