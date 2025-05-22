import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

export default function StatCards() {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl">Total Budget</h1>
                        <h1 className="text-3xl font-bold">$ 300,300</h1>
                        <p className="flex items-center gap-2 text-sm text-green-500">
                            <ArrowUp className="h-5 w-5" /> 12% from previous year
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl">Program Funded</h1>
                        <h1 className="text-3xl font-bold">18</h1>
                        <p className="flex items-center gap-2 text-sm text-green-500">
                            <ArrowUp className="h-5 w-5" /> 12 new programs this year
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl">Project Youth Impact</h1>
                        <h1 className="text-3xl font-bold">15,000</h1>
                        <p className="flex items-center gap-2 text-sm text-green-500">
                            <ArrowUp className="h-5 w-5" /> 12% increase in reach
                        </p>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
