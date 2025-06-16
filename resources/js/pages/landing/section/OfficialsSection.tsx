'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Official {
    name: string;
    position: string;
    img: string;
}

interface OfficialProps {
    title: string;
    description: string;
    officials: Official[];
}

export default function OfficialsSection({ officials, title, description }: OfficialProps) {
    const [isHovering, setIsHovering] = useState(false);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0.5, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:py-12 lg:px-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="text-center">
                <h2 className="text-base font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl">{title}</h2>
                <p className="mx-auto max-w-2xl text-[10px] text-gray-500 md:mt-4 md:text-xl">{description}</p>
            </div>

            <motion.div
                className="mt-8 grid grid-cols-3 gap-4 md:gap-8 lg:grid-cols-5"
                variants={containerVariants}
                initial="hidden"
                animate={isHovering ? 'visible' : 'hidden'}
            >
                {officials.map((official, index) => (
                    <motion.div key={index} className="flex flex-col items-center text-center" variants={itemVariants}>
                        <div
                            className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-r from-red-100 to-blue-100 p-1 md:h-40 md:w-40"
                            style={{ backgroundColor: '#f3f4f6' }}
                        >
                            {official.img ? (
                                <img
                                    src={official.img || '/placeholder.svg'}
                                    alt={official.name}
                                    className="h-full w-full rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
                                    <span className="text-4xl font-bold text-gray-400">{official.name.charAt(0)}</span>
                                </div>
                            )}
                        </div>
                        <h3 className="md:mt-4 mt-2 text-sm md:text-lg font-medium text-gray-900">{official.name}</h3>
                        <p className="text-[10px] md:text-base text-gray-500">{official.position}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
