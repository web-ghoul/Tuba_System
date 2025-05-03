import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { getBranchesClaims } from '../services/dashboardService'; // adjust import path
import BranchClaimsChartSkeleton from '../skeletons/BranchClaimsChartSkeleton';

ChartJS.register(ArcElement, Tooltip, Legend);

const BranchClaimsChart: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBranchesClaims();
        console.log(response.data);
        
        const chartData = response.data.data;
        
        if (chartData && chartData.length > 0) {
          setData({
            labels: chartData.map((branch: any) => branch.provider_name),
            datasets: [
              {
                data: chartData.map((branch: any) => branch.count),
                backgroundColor: ['#2AD2C5', '#7E3FF2', '#FDBA1F', '#A855F7'],
                borderWidth: 0,
                cutout: '70%',
              },
            ],
          });
        } else {
          // Set data as empty but not null to trigger empty state
          setData({ labels: [], datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }] });
        }
      } catch (error) {
        console.error('Failed to fetch branch claims', error);
        // Also set empty data on error
        setData({ labels: [], datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }] });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Show skeleton during loading
  if (loading) return <BranchClaimsChartSkeleton />;
  
  // Empty state when data is empty
  if (!data || data.labels.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-right text-lg font-bold mb-4">إحصائية مطالبات الفروع</h2>
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد بيانات</h3>
          <p className="text-sm text-gray-500">لم يتم العثور على أي مطالبات للفروع</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-right text-lg font-bold mb-4">إحصائية مطالبات الفروع</h2>
      <div className="flex flex-row md:flex-row justify-between items-center gap-4">
        <div className="w-[200px] h-[200px] relative order-1 md:order-2">
          <Doughnut data={data} options={options} />
        </div>
        
        <div className="grid gap-4 text-right order-2 md:order-1">
          {data.labels.map((label: string, i: number) => (
            <div key={i} className="flex items-center gap-2 justify-end">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchClaimsChart;