// skeletons/ClaimsStatusChartSkeleton.tsx
import React from 'react';

const ClaimsStatusChartSkeleton: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md animate-pulse">
            <div className="h-6 bg-gray-300 w-40 mb-6 ml-auto rounded"></div>
            <div className="flex justify-between gap-4">
                <div className="w-[200px] h-[200px] bg-gray-200 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    {Array(5).fill(0).map((_, i) => (
                        <div key={i} className="flex items-center gap-2 justify-end">
                            <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                            <div className="w-20 h-4 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClaimsStatusChartSkeleton;
