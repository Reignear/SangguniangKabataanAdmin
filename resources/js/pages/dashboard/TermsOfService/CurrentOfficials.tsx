import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
interface CurrentOfficialsProps {
    officials: {
        id: string;
        name: string;
        position: string;
        totalVotes: number;
        precinct: string;
    }[];
}

const CurrentOfficials = ({ officials }: CurrentOfficialsProps) => {
    return (
        <Card>
            <CardContent>
                <div className="just flex flex-row items-center gap-2">
                    <Users className="h-5 w-5" /> <h1 className="text-lg font-bold">Current Officials ({officials.length})</h1>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {officials.map((official) => (
                        <Card key={official.id}>
                            <CardContent className="flex flex-col justify-start">
                                <h1 className="text-lg font-semibold text-gray-800">{official.name}</h1>
                                <div className="rounded-lg border border-red-500 py-1 text-center md:min-w-36">
                                    <p className="text-[13px] text-red-700">{official.position}</p>
                                </div>
                                <p className="text-muted-foreground mt-4 text-sm">Total votes: {official.totalVotes}</p>
                                <p className="text-muted-foreground text-sm">Precint ID: {official.precinct}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CurrentOfficials;
