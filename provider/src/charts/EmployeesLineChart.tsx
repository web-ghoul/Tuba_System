import React, { useEffect, useState } from 'react';
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
import { Download } from 'lucide-react';
import { getEmployeesMonthsLineChart } from '../services/dashboardService'; // adjust path if needed
import LineChartSkeleton from '../skeletons/lineChartSkeleton';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const EmployeesLineChart: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<number[]>([]);

  const months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
  ];

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await getEmployeesMonthsLineChart();
        const data = response.data.data; // expects [5, 10, ...] — array of numbers
        setChartData(data);
      } catch (error) {
        console.error('Failed to fetch line chart data:', error);
        setChartData(Array(12).fill(0)); // fallback to 0s
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  const data = {
    labels: months,
    datasets: [
      {
        label: 'عدد الموظفين',
        data: chartData,
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
        <button className="bg-[#F4F4F4] text-sm px-3 py-1 rounded-md flex items-center gap-1">
          تحميل <Download size={16} />
        </button>
      </div>

      <div className="h-[300px]">
        {loading ? <LineChartSkeleton /> : <Line data={data} options={options} />}

      </div>
    </div>
  );
};

export default EmployeesLineChart;
