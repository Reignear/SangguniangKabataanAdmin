import DashboardLayout from '@/layouts/shared/DashboardLayout';
import StatCards from '../dashboard/BudgetMonitoring/BudgetStatCards';
import BudgetExpenditure from './BudgetMonitoring/BudgetExpenditure';
import BudgetExpenditureBreakdown from './BudgetMonitoring/BudgetExpenditureBreakdown';
import BudgetOverview from './BudgetMonitoring/BudgetOverview';
export default function BudgetMonitoring() {
    return (
        <DashboardLayout className="overflow-hidden" breadCrumbTitle="Budget Monitoring">
            <div className="h-full w-full">
                <div className="flex flex-row items-center justify-between p-4 pt-0">
                    <div>
                        <h1 className="text-3xl font-bold">Budget Monitoring</h1>
                        <p className="text-muted-foreground">Fiscal year 2025-2026 </p>
                    </div>
                </div>
                <div className="h-full w-full p-4 pt-0 pb-0">
                    <StatCards />
                </div>
            </div>
            <div className="grid h-full w-full grid-cols-2 gap-2 p-4 pt-0 pb-0">
                <div className="h-full w-full">
                    <BudgetOverview />
                </div>
                <div className="h-full w-full">
                    <BudgetExpenditure />
                </div>
            </div>
            <div className="h-full w-full">
                <BudgetExpenditureBreakdown />
            </div>
        </DashboardLayout>
    );
}
