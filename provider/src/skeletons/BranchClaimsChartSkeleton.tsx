import React from 'react';

const BranchClaimsChartSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md animate-pulse">
      <div className="h-6 w-48 bg-gray-200 rounded-md mb-4 ml-auto" />

      <div className="flex flex-row justify-between items-center gap-4">
        <div className="w-[200px] h-[200px] bg-gray-100 rounded-full" />

        <div className="grid gap-4 text-right w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 justify-end">
              <div className="w-4 h-4 rounded-sm bg-gray-300" />
              <div className="h-4 w-24 bg-gray-200 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchClaimsChartSkeleton;
