import { Button } from '@/components/ui/button';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { Info } from 'lucide-react';
import CurrentOfficials from './TermsOfService/CurrentOfficials';
import InfoBox from './TermsOfService/InfoBox';
const currentOfficials = [
    {id: "1", name: 'Reignear Magallanes', position: 'SK Chairperson', totalVotes: 100, precinct: 'A323' },
    {id: "2", name: 'John Doe', position: 'SK Kagawad', totalVotes: 80, precinct: 'B456' },
    {id: "3", name: 'Jane Smith', position: 'SK Treasurer', totalVotes: 90, precinct: 'C789' },
    {id: "4", name: 'Jaasdassne Smith', position: 'SK Treasurer', totalVotes: 90, precinct: 'C789' },
];
const title = 'Sangguniang Kabataan Terms of Service';
export default function TermsOfService() {
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Terms of Service">
            <div className="flex w-full flex-col gap-2">
                <div className="flex w-full flex-col justify-center gap-1">
                    <h1 className="text-center text-xl font-semibold text-red-600">20234323423</h1>
                    <h1 className="text-center font-bold text-gray-800 md:text-3xl">{title}</h1>
                    <Button variant="empty" className="text-xl font-semibold text-red-600 hover:cursor-pointer hover:text-red-700 hover:underline">
                        <a href={route('dashboard.termsofservice.year')}>Year {`2023 - 2025`}</a>
                    </Button>
                    <p className="text-center text-base text-gray-800">Barangay Youth Council - Terms of Service</p>
                </div>
                <div className="flex w-full flex-row justify-end gap-2"></div>
                <div className="grid-rows mt-2 grid gap-3">
                    <InfoBox officials={currentOfficials} />
                    <CurrentOfficials officials={currentOfficials} />
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
