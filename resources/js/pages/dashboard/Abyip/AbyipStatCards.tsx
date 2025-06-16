import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

export default function StatCards() {
    return (
        <div className="grid grid-cols-3 gap-1 p-4 py-0 md:gap-4">
            <Card>
                <CardContent className="px-2 md:px-6">
                    <div className="flex flex-col gap-1 md:gap-4">
                        <h1 className="text-[10px] md:text-xl">Total Budget</h1>
                        <h1 className="text-base font-bold md:text-3xl">$ 300,300</h1>
                        <p className="flex items-center gap-2 text-[8px] text-green-500 md:text-sm">
                            <ArrowUp className="h-3 w-3 md:h-5 md:w-5" /> 12% from previous year
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="px-2 md:px-6">
                    <div className="flex flex-col gap-1 md:gap-4">
                        <h1 className="text-[10px] md:text-xl">Program Funded</h1>
                        <h1 className="text-base font-bold md:text-3xl">18</h1>
                        <p className="flex items-center gap-2 text-[8px] text-green-500 md:text-sm">
                            <ArrowUp className="h-3 w-3 md:h-5 md:w-5" /> 12 new programs this year
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="px-2 md:px-6">
                    <div className="flex flex-col gap-1 md:gap-4">
                        <h1 className="text-[10px] md:text-xl">Project Youth Impact</h1>
                        <h1 className="text-base font-bold md:text-3xl">15,000</h1>
                        <p className="flex items-center gap-2 text-[8px] text-green-500 md:text-sm">
                            <ArrowUp className="h-3 w-3 md:h-5 md:w-5" /> 12% increase in reach
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
