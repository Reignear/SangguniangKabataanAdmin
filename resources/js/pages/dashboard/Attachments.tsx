import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Search } from 'lucide-react';
import { useState } from 'react';
import AttachmentField, { SelectedCard } from './Attachments/AttachmentField';
import PPACard from './Attachments/PPACard';

const Attachments = () => {
    const [activeCategory, setActiveCategory] = useState('Project');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCard, setSelectedCard] = useState<SelectedCard | null>(null);
    const categoryButtons = ['Project', 'Program', 'Activity'];

    const handleCardClick = (ppa: SelectedCard) => {
        setSelectedCard(ppa);
    };

    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Attachments">
            <div className="w-full p-4 pt-0">
                <div className="mb-4 flex flex-row items-center justify-between">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold">Attachments</h1>
                        <p className="text-muted-foreground">Manage attachments for programs, activities, and projects</p>
                    </div>
                    <div className="relative w-xl">
                        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                        <Input
                            className="w-full pl-8"
                            type="search"
                            placeholder="Search PPA's name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        ></Input>
                    </div>
                </div>
                <div className="rounded-md border p-4 shadow-md">
                    <div className="grid grid-cols-3 gap-1 rounded-md border-2 p-2">
                        {categoryButtons.map((category) => (
                            <Button
                                key={category}
                                variant="empty"
                                className={`${activeCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'} hover:cursor-pointer`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    {/* PPA Card */}
                    <div className="h-full w-full">
                        <PPACard activeCategory={activeCategory} searchQuery={searchQuery} onCardClick={handleCardClick} />
                    </div>
                </div>
                <div className="mt-4 h-full w-full">
                    <AttachmentField selectedCard={selectedCard} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Attachments;
