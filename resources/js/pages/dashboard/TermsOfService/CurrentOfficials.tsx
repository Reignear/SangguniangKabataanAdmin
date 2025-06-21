import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
interface Officials {
    official_id: string;
    official_firstname: string;
    official_lastname: string;
    official_middlename: string;
    official_position: string;
    official_vote: number;
    official_precinct: string;
}

interface PageProps {
    Officials: Officials[];
}
const CurrentOfficials = ({ Officials }: PageProps) => {
    return (
        <Card>
            <CardContent>
                <div className="just flex flex-row items-center gap-2">
                    <Users className="h-5 w-5" /> <h1 className="text-lg font-bold">Current Officials ({Officials.length})</h1>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {Officials.map((official) => (
                        <Card key={official.official_id}>
                            <CardContent className="flex flex-col justify-start">
                                <h1 className="flex flex-row gap-1 text-[12px] font-semibold text-gray-800 sm:text-base md:text-lg">
                                    <span>{official.official_firstname}</span> <span>{official.official_middlename}</span>
                                    <span>{official.official_lastname}</span>
                                </h1>
                                <div className="rounded-lg border border-red-500 py-1 text-center md:min-w-36">
                                    <p className="text-[10px] text-red-700 md:text-[13px]">{official.official_position}</p>
                                </div>
                                <p className="text-muted-foreground mt-4 text-sm">Total votes: {official.official_vote}</p>
                                <p className="text-muted-foreground text-sm">Precint ID: {official.official_precinct}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CurrentOfficials;
