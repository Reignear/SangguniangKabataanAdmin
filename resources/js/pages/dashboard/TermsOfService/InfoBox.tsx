import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

interface InfoBoxProps {
    infoBoxDetails: {
        infoName: string;
        infoDescription: string;
        infoDetails?: string;
        infoButtonDetails?: {
            infoButtonText: string;

            infoButtonIcon: React.ReactNode;
            infoButtonFunction: () => void;
        };
    }[];
}
const InfoBox = ({ infoBoxDetails }: InfoBoxProps) => {
    return (
        <div className="grid grid-cols-1 gap-2">
            {infoBoxDetails.map((infoBox, index) => (
                <div key={index} className="rounded-lg border bg-red-500 shadow-lg transition-all hover:cursor-pointer">
                    <div className="flex flex-row items-center justify-between p-5">
                        <div className="flex flex-row items-center gap-2">
                            <Info className="h-6 w-6 text-white" />
                            <div>
                                <h1 className="text-lg text-white">{infoBox.infoName}</h1>
                                <h1 className="text-2xl font-bold text-white">
                                    {infoBox.infoDescription} {infoBox.infoDetails}
                                </h1>
                            </div>
                        </div>
                        {infoBox.infoButtonDetails ? (
                            <Button
                                className="w-36 transition-all hover:cursor-pointer"
                                variant="outline"
                                onClick={infoBox.infoButtonDetails.infoButtonFunction}
                            >
                                {infoBox.infoButtonDetails.infoButtonIcon}
                                {infoBox.infoButtonDetails.infoButtonText}
                            </Button>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoBox;
