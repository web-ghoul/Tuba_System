import React from 'react';

type Props = {
  activeTab: 'normal' | 'drg';
  setActiveTab: (tab: 'normal' | 'drg') => void;
};

export const TabNavigation: React.FC<Props> = ({ activeTab, setActiveTab }) => (
  <div className="mb-3 flex justify-end">
    <ul className="flex">
      <li>
        <button
          className={`
            px-4 py-2 font-medium border
            border-gray-300
            rtl:rounded-r-lg rtl:rounded-l-none ltr:rounded-l-lg ltr:rounded-r-none
            ${activeTab === 'normal' 
              ? 'bg-primary text-white border-indigo-600' 
              : ''}
          `}
          onClick={() => setActiveTab('normal')}
        >
          Regular Elements
        </button>
      </li>
      <li>
        <button
          className={`
            px-4 py-2 font-medium border
           
            rtl:rounded-l-lg rtl:rounded-r-none ltr:rounded-r-lg ltr:rounded-l-none
            ${activeTab === 'drg' 
              ? 'bg-primary text-white border-indigo-600' 
              : ''}
          `}
          onClick={() => setActiveTab('drg')}
        >
          DRG Elements
        </button>
      </li>
    </ul>
  </div>
);