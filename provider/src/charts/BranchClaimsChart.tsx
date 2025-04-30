import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const BranchClaimsChart: React.FC = () => {
    const data = {
        labels: ['الفرع الرئيسي', 'الفرع الثاني', 'الفرع الثالث', 'الفرع الرابع'],
        datasets: [
            {
                data: [60, 20, 10, 10],
                backgroundColor: ['#2AD2C5', '#7E3FF2', '#FDBA1F', '#A855F7'],
                borderWidth: 0,
                cutout: '70%',
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-right text-lg font-bold mb-4">إحصائية مطالبات الفروع</h2>
            <div className="flex flex-row md:flex-row justify-between items-center gap-4">
                {/* Doughnut on the right (so put it first when using row-reverse) */}
                <div className="w-[200px] h-[200px] relative order-1 md:order-2">
                    <Doughnut data={data} options={options} />
                </div>
    
                {/* Legends on the left */}
                <div className="grid gap-4 text-right order-2 md:order-1">
                    {[
                        { label: 'الفرع الرئيسي', color: '#2AD2C5' },
                        { label: 'الفرع الثاني', color: '#7E3FF2' },
                        { label: 'الفرع الثالث', color: '#FDBA1F' },
                        { label: 'الفرع الرابع', color: '#A855F7' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 justify-end">
                            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: item.color }}></div>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};

export default BranchClaimsChart;
