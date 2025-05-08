'use client';

import type React from 'react';
import { useState } from 'react';

interface AboutUsCard {
    title: string;
    description: string;
    icon: React.ReactNode;
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

    return (
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className || ''}`}>
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">{description}</p>
            </div>

            <div className="mt-8 grid cursor-pointer gap-8 md:grid-cols-3">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-full flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-lg transition-all duration-1000 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`w-18 rounded-md bg-gray-50 p-6 text-center shadow-md transition-all hover:shadow-lg ${
                                hoveredCardIndex === index ? 'animate-bounce-subtle' : ''
                            } ${item.iconClassName}`}
                        >
                            {item.icon}
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-gray-500">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
