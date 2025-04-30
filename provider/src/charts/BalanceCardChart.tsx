import { ArrowUpRight } from 'lucide-react';
import Pattern from '../assets/pattern.png'; 
import { Info } from 'lucide-react';

interface BalanceCardProps {
  balance?: number;
  currency?: string;
  hasIncrease?: boolean;
  compareSentence?: string;
  title?: string;
}

const BalanceCardChart = ({
  balance = 495,
  currency = "ريال",
  hasIncrease = true,
  compareSentence = "زيادة مقارنة بيوم أمس",
  title = "الرصيد المستحق اليوم",
}: BalanceCardProps) => {
  return (
    <div className="tuba_card bg-white rounded-xl p-5 shadow-sm max-w-md w-full relative ">
    {/* Header with icon and title */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-gray-100 w-6 h-6 flex items-center justify-center">
          <Info className="w-4 h-4 text-gray-500" />
        </div>
        <span className="font-medium text-black font-bold">{title}</span>
      </div>
    </div>
    
    <hr className="mx-2 text-gray-400" />
    
    {/* Main content */}
    <div className="flex items-start justify-between relative z-10">
      {/* Left: Balance details */}
      <div>
        <div className="flex items-start justify-start gap-2 mb-5 my-2">
          <span className="text-[#5A46E6] font-bold text-3xl">{balance}</span>
          <span className="text-gray-600 mt-3 text-sm">{currency}</span>
        </div>
        
        {/* Increase indicator */}
        {hasIncrease && (
          <div className="flex items-center gap-1 text-green-500 text-sm">
            <span>{compareSentence}</span>
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>
    </div>
    
    {/* Pattern image - positioned absolutely to bottom right */}
    <div className="absolute bottom-0 left-0 w-1/3 h-auto overflow-hidden rounded-bl-lg">
      <img
        src={Pattern}
        alt=""
        className="rtl-flip w-full h-full object-cover"
      />
    </div>
  </div>
  );
};

export default BalanceCardChart;
