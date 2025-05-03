import React from 'react';

const LineChartSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full animate-pulse flex flex-col">
      {/* Chart area placeholder */}
      <div className="relative w-full h-full flex items-end">
        {/* X-axis line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>
        
        {/* Y-axis line */}
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gray-200"></div>
        
        {/* Chart line and area */}
        <div className="relative w-full h-full px-4 flex items-end">
          {/* Line path approximation */}
          <svg className="w-full h-3/4" viewBox="0 0 100 50" preserveAspectRatio="none">
            <path 
              d="M0,50 C20,40 40,20 60,30 S80,10 100,20" 
              fill="rgba(90,70,230,0.08)" 
              stroke="#E2E2E2" 
              strokeWidth="2"
            />
          </svg>
          
          {/* Data point placeholders */}
          <div className="absolute bottom-1/4 left-1/6 w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="absolute bottom-2/4 left-2/6 w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="absolute bottom-1/3 left-3/6 w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="absolute bottom-3/5 left-4/6 w-3 h-3 rounded-full bg-gray-200"></div>
          <div className="absolute bottom-2/5 left-5/6 w-3 h-3 rounded-full bg-gray-200"></div>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="w-full flex justify-between mt-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-10 h-4 bg-gray-200 rounded"></div>
        ))}
      </div>
      
      {/* Y-axis labels */}
      <div className="absolute left-2 top-0 h-full flex flex-col justify-between">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-6 h-3 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default LineChartSkeleton;