import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/layouts/shared/DashboardLayout';

const SKTerms = [{ year: '2023 - 2025' }, { year: '2026 - 2029' }, { year: '2030 - 2033' }, { year: '2034 - 2037' }];
const TermYear = () => {
    return (
        <DashboardLayout className="flex w-full flex-col justify-center">
            <div className=" flex w-lg flex-col items-start justify-start gap-2 rounded-lg border p-2">
                {SKTerms.map((term) => (
                    <>
                        <Button
                            onClick={() => alert(`Selected Term: ${term.year}`)}
                            variant="empty"
                            className="text-lg text-red-500/80 transition-all hover:cursor-pointer hover:text-red-600  "
                        >
                            Sangguniang Kabataan Term {term.year}
                        </Button>
                     <Separator />
                    </>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default TermYear;
