import React from 'react';

const InvoiceChartSkeleton: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 animate-pulse flex flex-col justify-between w-full max-w-full overflow-hidden">
      <div className="h-6 bg-gray-200 rounded w-40 mb-4" />
      
      {/* Chart placeholder - constrained width with responsive sizing */}
      <div className="w-full max-w-[300px] h-[150px] bg-gray-200 rounded-full mx-auto" />
      
      <hr className="border border-[#EBEBEB] my-6" />
      
      <div className="flex justify-between gap-2 w-full">
        <div className="space-y-2 flex-1">
          <div className="w-full max-w-32 h-4 bg-gray-200 rounded" />
          <div className="w-16 h-6 bg-gray-200 rounded" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="w-full max-w-32 h-4 bg-gray-200 rounded" />
          <div className="w-16 h-6 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default InvoiceChartSkeleton;