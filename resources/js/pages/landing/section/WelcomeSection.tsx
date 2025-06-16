import { motion } from 'framer-motion';
import { useRef } from 'react';

interface WelcomeSectionProps {
    barangay: string;
    missionStatement: string;
    missionStatementAuthor: string;
    title1: string;
    title2: string;
    title3: string;
    logo?: string;
}

export default function WelcomeSection({ barangay, missionStatement, missionStatementAuthor, title1, title2, title3, logo }: WelcomeSectionProps) {
    const scrollRef = useRef(null);
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5, delay: 3 * 0.1 }}
                className="relative mx-auto max-w-7xl text-center"
            >
                <div className="mb-8 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold tracking-wider text-gray-600 uppercase md:text-4xl">{title1}</h2>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
                        <span className="block text-red-500">{title2}</span>
                        <span className="block text-blue-500">{title3}</span>
                    </h1>
                    <h3 className="mt-3 text-xl font-bold tracking-wide text-gray-800 uppercase sm:text-4xl md:text-5xl">
                        OF <span>{barangay}</span>
                    </h3>

                    <div className="mt-4 max-w-2xl md:mt-8">
                        <p className="text-md text-gray-600 italic sm:text-lg md:text-xl">
                            {missionStatement}
                            <span className="block text-right font-medium not-italic">
                                —<span>{missionStatementAuthor}</span>
                            </span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
