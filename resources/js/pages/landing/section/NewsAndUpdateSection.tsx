'use client';

import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '../../../components/ui/pagination';

interface NewsItem {
    image: string;
    date: string;
    title: string;
    excerpt: string;
    link: string;
}

interface NewsAndUpdateSectionProps {
    newsItem: NewsItem[];
    title: string;
    description: string;
}

export default function NewsAndUpdateSection({ newsItem, title, description }: NewsAndUpdateSectionProps) {
    const [startIndex, setStartIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
    const itemsPerPage = 3;

    // Get the current visible items
    const visibleItems = newsItem.slice(startIndex, startIndex + itemsPerPage);

    // Get the next or previous item for animation
    const nextItem = startIndex + itemsPerPage < newsItem.length ? newsItem[startIndex + itemsPerPage] : null;
    const prevItem = startIndex > 0 ? newsItem[startIndex - 1] : null;

    const handleNext = () => {
        if (startIndex + itemsPerPage < newsItem.length && !animating) {
            setAnimating(true);
            setDirection('next');

            // Wait for animation to complete before changing the actual data
            setTimeout(() => {
                setStartIndex(startIndex + 1);
                setAnimating(false);
                setDirection(null);
            }, 500);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0 && !animating) {
            setAnimating(true);
            setDirection('prev');

            // Wait for animation to complete before changing the actual data
            setTimeout(() => {
                setStartIndex(startIndex - 1);
                setAnimating(false);
                setDirection(null);
            }, 500);
        }
    };

    // Determine if buttons should be disabled
    const isNextDisabled = startIndex + itemsPerPage >= newsItem.length || animating;
    const isPreviousDisabled = startIndex <= 0 || animating;

    // Render a news card
    const renderNewsCard = (item: NewsItem, animationClass = '') => (
        <div className={`overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg ${animationClass}`}>
            <div className="h-48 bg-gray-200">
                <div className="bg-opacity-50 flex h-full items-center justify-center bg-gray-300 text-gray-500">
                    <span className="text-lg font-medium">{item.image}</span>
                </div>
            </div>
            <div className="p-6">
                <div className="text-[10px] font-medium text-gray-500 md:text-sm">{item.date}</div>
                <h3 className="text-[12px] font-bold text-gray-900 md:text-xl">{item.title}</h3>
                <p className="text-[10px] text-gray-600 md:text-base">{item.excerpt}</p>
                <div className="flex cursor-pointer items-center text-[10px] font-medium text-blue-500 md:text-sm">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>Read more</span>
                        <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="mx-auto h-full max-w-7xl px-4">
            <div className="text-center">
                <h2 className="text-gray-90 text-base font-bold tracking-tight md:text-4xl">{title}</h2>
                <p className="mx-auto max-w-2xl text-[10px] text-gray-500 md:mt-4 md:text-xl">{description}</p>
            </div>

            <div className="relative overflow-hidden md:mt-12">
                <div className="grid grid-cols-2 gap-3 p-2 md:gap-6 md:p-4 lg:grid-cols-3">
                    {visibleItems.map((item, index) => {
                        let animationClass = '';

                        if (animating) {
                            if (direction === 'next') {
                                if (index === 0) {
                                    animationClass = 'animate-slide-out-left';
                                } else if (index === 1) {
                                    animationClass = 'animate-slide-left-to-left';
                                } else if (index === 2) {
                                    animationClass = 'animate-slide-right-to-center';
                                }
                            } else if (direction === 'prev') {
                                if (index === 0) {
                                    animationClass = 'animate-slide-left-to-center';
                                } else if (index === 1) {
                                    animationClass = 'animate-slide-center-to-right';
                                } else if (index === 2) {
                                    animationClass = 'animate-slide-out-right';
                                }
                            }
                        }

                        return (
                            <div key={`${startIndex}-${index}`} className="relative transition-all duration-1000 ease-out hover:scale-105">
                                {renderNewsCard(item, animationClass)}
                            </div>
                        );
                    })}
                </div>

                {/* New item that will slide in */}
                {animating && direction === 'next' && nextItem && (
                    <div className="animate-slide-in-from-right absolute top-0 right-0 w-1/3">{renderNewsCard(nextItem)}</div>
                )}

                {animating && direction === 'prev' && prevItem && (
                    <div className="animate-slide-in-from-left absolute top-0 left-0 w-1/3">{renderNewsCard(prevItem)}</div>
                )}
            </div>

            <div className="flex h-full w-full items-center justify-center p-4 pt-8">
                <Pagination>
                    <PaginationContent className="flex gap-x-10">
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePrevious();
                                }}
                                className={isPreviousDisabled ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNext();
                                }}
                                className={isNextDisabled ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
