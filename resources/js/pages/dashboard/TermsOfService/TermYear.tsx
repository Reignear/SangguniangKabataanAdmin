import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/layouts/shared/DashboardLayout';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
interface TermYearData {
    term_service_id: string;
    term_year_start: string;
    term_year_end: string;
}

interface PageProps {
    TermYears: TermYearData[];
}
const TermYear = ({ TermYears }: PageProps) => {
    return (
        <DashboardLayout className="flex w-full flex-col justify-center" breadCrumbTitle="Terms of Service / Years of Terms Service">
            <div className="flex max-w-lg flex-col items-start justify-start gap-2 rounded-lg border p-2">
                {TermYears && TermYears.length > 0 ? (
                    TermYears.map((term) => (
                        <>
                            <Button
                                onClick={() => router.visit(route('dashboard.termsofservice.active.year', { term_service_id: term.term_service_id }))}
                                variant="empty"
                                className="text-base text-red-500/80 transition-all hover:cursor-pointer hover:text-red-600 md:text-lg"
                            >
                                Sangguniang Kabataan Term {term.term_year_start} - {term.term_year_end}
                            </Button>
                            <Separator />
                        </>
                    ))
                ) : (
                    <p>No term years available</p>
                )}
            </div>
        </DashboardLayout>
    );
};

export default TermYear;
