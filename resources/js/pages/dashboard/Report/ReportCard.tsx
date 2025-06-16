import { Button } from '@/components/ui/button';
import { Calendar, Users, Wallet } from 'lucide-react';

const reports = [
    {
        id: 1,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Youth Leadership Training',
        category: 'Program',
        date: 'May 12, 2025',
        amount: 20000,
        participants: 20,
    },
    {
        id: 2,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Community Clean-Up Drive',
        category: 'Activity',
        date: 'April 30, 2025',
        amount: 10000,
        participants: 45,
    },
    {
        id: 3,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Feeding Program',
        category: 'Project',
        date: 'March 18, 2025',
        amount: 10000,
        participants: 60,
    },
    {
        id: 4,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Medical Mission',
        category: 'Program',
        date: 'June 5, 2025',
        amount: 10000,
        participants: 35,
    },
    {
        id: 5,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Educational Materials Distribution',
        category: 'Activity',
        date: 'May 20, 2025',
        amount: 10000,
        participants: 80,
    },
    {
        id: 6,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Tree Planting Activity',
        category: 'Project',
        date: 'April 10, 2025',
        amount: 10000,
        participants: 40,
    },
    {
        id: 7,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Job Fair Event',
        category: 'Activity',
        date: 'March 25, 2025',
        amount: 10000,
        participants: 150,
    },
    {
        id: 8,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Mental Health Awareness Seminar',
        category: 'Program',
        date: 'June 1, 2025',
        amount: 10000,
        participants: 70,
    },
    {
        id: 9,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Livelihood Training Workshop',
        category: 'Activity',
        date: 'May 15, 2025',
        amount: 10000,
        participants: 33,
    },
    {
        id: 10,
        image: 'https://imgs.search.brave.com/VkLMsFTyCtmM4_5TrX5nYmUflAXeBUNLXBSH3DuAAS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0ltYWdlX2Ny/ZWF0ZWRfd2l0aF9h/X21vYmlsZV9waG9u/ZS5wbmc',
        title: 'Senior Citizens Wellness Day',
        category: 'Project',
        date: 'April 22, 2025',
        amount: 10000,
        participants: 25,
    },
];
type ReportCardProps = {
    activeCategory: string;
    searchQuery: string;
    onCardClick?: (report: (typeof reports)[0]) => void;
};

export default function ReportCard({ activeCategory, searchQuery, onCardClick }: ReportCardProps) {
    //Filter report cards based on active category
    const filterReports = reports
        .sort((a, b) => a.date.localeCompare(b.date))
        .filter((report) => {
            const matchFilter = report.category.toLowerCase() === activeCategory?.toLowerCase();
            const searchFilter = report.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchFilter && searchFilter;
        });

    return (
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterReports.map((report) => (
                <div
                    key={report.id}
                    className="flex flex-col rounded-sm border bg-white shadow-md transition-all duration-1000 ease-out hover:-translate-y-1 hover:scale-102 hover:shadow-xl"
                >
                    <div className="h-[250px]">
                        <img src={report.image} alt="Image" className="h-full w-full rounded-t-sm object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg font-semibold">{report.title}</h2>
                            <p className="text-muted-foreground text-sm">{report.category}</p>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
                            <div className="flex items-center gap-5 text-sm md:mt-4">
                                <Calendar className="text-muted-foreground h-4 w-4" />
                                <h1>{report.date}</h1>
                            </div>
                            <div className="flex items-center gap-5 text-sm md:mt-2">
                                <Wallet className="text-muted-foreground h-4 w-4" />
                                <h1>₱ {report.amount}</h1>
                            </div>
                            <div className="flex items-center gap-5 text-sm md:mt-2">
                                <Users className="text-muted-foreground h-4 w-4" />
                                <h1>{report.participants}</h1>
                            </div>
                        </div>

                        <Button key={report.id} variant="empty" className="mt-2 border-2 text-black hover:bg-gray-100">
                            View Full Report
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
