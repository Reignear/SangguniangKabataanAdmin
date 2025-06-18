import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Info } from 'lucide-react';
import CurrentOfficials from './TermsOfService/CurrentOfficials';
import InfoBox from './TermsOfService/InfoBox';

interface Officials {
    official_id: string;
    official_firstname: string;
    official_lastname: string;
    official_middlename: string;
    official_position: string;
    official_vote: number;
    official_precinct: string;
}
interface ActiveTerm {
    term_year_start: string;
    term_year_end: string;
}
interface PageProps {
    activeTermId: string;
    Officials: Officials[];
    activeTerm: ActiveTerm;
}

export default function TermsOfService({ activeTermId, Officials, activeTerm }: PageProps) {
    const title = 'Sangguniang Kabataan Terms of Service';
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Terms of Service">
            <div className="flex w-full flex-col gap-2">
                <div className="flex w-full flex-col justify-center gap-1">
                    <h1 className="text-center text-xl font-semibold text-red-600">{activeTermId}</h1>
                    <h1 className="text-center font-bold text-gray-800 md:text-3xl">{title}</h1>
                    <Button variant="empty" className="text-xl font-semibold text-red-600 hover:cursor-pointer hover:text-red-700 hover:underline">
                        <a href={route('dashboard.termsofservice.years')}>Year {activeTerm.term_year_end} - {activeTerm.term_year_start}</a>
                    </Button>
                    <p className="text-center text-base text-gray-800">Barangay Youth Council - Terms of Service</p>
                </div>
                <div className="flex w-full flex-row justify-end gap-2"></div>
                <div className="grid-rows mt-2 grid gap-3">
                    <InfoBox Officials={Officials} activeTerm={activeTerm} />
                    <CurrentOfficials Officials={Officials} />
                    <div className="flex flex-row items-center gap-2 rounded-lg border border-blue-600/50 p-5">
                        <Info className="h-6 w-6 text-blue-800" />
                        <h1 className="text-blue-800">
                            This website was created to promote transparency in SK services and ensure public access to information. For further
                            inquiries or concerns, please visit the Barangay Hall or contact the SK Office at (082) 227-5456 local 119 or (082)
                            224-1465.
                        </h1>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
