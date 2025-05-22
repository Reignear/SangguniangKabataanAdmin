/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency, tickFormatter } from '@/lib/utils';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Margin } from 'recharts/types/util/types';
 
interface CustomBarChartProps {
    barChartData: any[] | undefined;
    barDataKey: string;
    barMargins: Margin | undefined;
    XDataKeyName: string;
    XAngle: number;
    XTextAnchor: string;
    XHeight: number;
    barFill: string;
    barName?: string;
    className?: string;
    toolTipValue?: string;
    toolTilLabel?: string;
    
}
export default function CustomBarChart({
    barChartData,
    className,
    barDataKey,
    barFill,
    barName,
    toolTipValue,
    toolTilLabel,
    XDataKeyName,
    XAngle,
    XTextAnchor,
    XHeight,
    barMargins,
    
}: CustomBarChartProps) {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} margin={barMargins}>
                    <XAxis dataKey={XDataKeyName} angle={XAngle} textAnchor={XTextAnchor} height={XHeight} />
                    <YAxis tickFormatter={tickFormatter} />
                    <Tooltip
                        formatter={(value: number) => [formatCurrency(value), toolTipValue]}
                        labelFormatter={(label) => `${toolTilLabel}: ${label}`}
                    />
                    <Legend />
                    <Bar dataKey={barDataKey} fill={barFill} name={barName} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
