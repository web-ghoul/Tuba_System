import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,    
    Filler,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import React from 'react';
  import { Download } from 'lucide-react'; // Optional icon lib
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);
  
  const ClaimsLineChart: React.FC = () => {
    const months = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
  
    const data = {
      labels: months,
      datasets: [
        {
          label: 'عدد الموظفين',
          data: [5, 20, 35, 40, 25, 50, 22, 40, 38, 100, 40, 0],
          fill: true,
          backgroundColor: 'rgba(90,70,230,0.08)',
          borderColor: '#5A46E6',
          tension: 0.3,
          pointBackgroundColor: '#5A46E6',
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context: any) => `${context.parsed.y} موظف`,
          },
          backgroundColor: '#00D1B2',
          titleColor: '#fff',
          bodyColor: '#fff',
        },
      },
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10,
          },
        },
      },
    };
  
    return (
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">عدد الموظفين لكل شهر</h2>
          <div className="flex items-center gap-2">
            <button className="bg-[#F4F4F4] text-sm px-3 py-1 rounded-md flex items-center gap-1">
               تحميل<Download size={16} /> 
            </button>
          </div>
        </div>
  
        <div className="h-[300px]">
          <Line data={data} options={options} />
        </div>
      </div>
    );
  };
  
  export default ClaimsLineChart;
  