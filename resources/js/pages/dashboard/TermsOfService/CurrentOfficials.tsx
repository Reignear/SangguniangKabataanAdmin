import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
interface CurrentOfficialsProps {
    officials: {
        name: string;
        position: string;
        totalVotes: number;
    }[];
}

const CurrentOfficials = ({ officials }: CurrentOfficialsProps) => {
    return (
        <Card>
            <CardContent>
                <div className="just flex flex-row items-center gap-2">
                    <Users className="h-5 w-5" /> <h1 className="text-lg font-bold">Current Officials ({officials.length})</h1>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-3">
                    {officials.map((official) => (
                        <Card key={official.name}>
                            <CardContent className="flex flex-col justify-start">
                                <h1 className="text-lg font-semibold text-gray-800">{official.name}</h1>
                                <div className="w-36 rounded-lg border border-red-500 py-1 text-center">
                                    <p className="text-[13px] text-red-700">{official.position}</p>
                                </div>
                                <h1 className="text-muted-foreground mt-4 text-base">Total votes: {official.totalVotes}</h1>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CurrentOfficials;
