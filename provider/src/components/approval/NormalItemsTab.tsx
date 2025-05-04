import React, { useState } from 'react';
import { ServiceTable } from '../../components/Tables/ServiceTable'; // Adjust the path if needed

// Mock example data; replace this with actual props or context
const mockClaim = {
  workflow_state: 'Pending',
  items: [
    {
      item_name: 'X-Ray Chest',
      price_base: 100,
      deductible_base: 10,
      covered_base: 90,
      workflow_state: 'Approved',
    },
    {
      item_name: 'Blood Test',
      price_base: 200,
      deductible_base: 40,
      covered_base: 160,
      workflow_state: 'Pending',
    },
  ],
};

const NormalItemsTab: React.FC = ({deduct, claimItems ,setClaimItems}) => {
  const [showRay, setShowRay] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showMedication, setShowMedication] = useState(false);

  return (
    <div className="space-y-6">
      {/* Toggle: Ray Items */}
      <div className="border border-gray-200 rounded-xl">
        <button
          type="button"
          onClick={() => setShowRay(!showRay)}
          className="w-full px-4 py-3 text-right font-medium bg-gray-50 hover:bg-gray-100 rounded-t-xl"
        >
          {showRay ? '−' : '+'} اشعة 
        </button>
        {showRay && (
          <div className="p-4">
            <ServiceTable
              type="ray"
              tableId="ray_items_table"
              claim={{ items: claimItems }}
              onClaimUpdate={(updatedClaim) => {
                setClaimItems(updatedClaim.items);
              }}  
              deduct={deduct}
              id="ray_table_btn"
            />
          </div>
        )}
      </div>

      {/* Toggle: Analysis Items */}
      <div className="border border-gray-200 rounded-xl">
        <button
          type="button"
          onClick={() => setShowAnalysis(!showAnalysis)}
          className="w-full px-4 py-3 text-right font-medium bg-gray-50 hover:bg-gray-100 rounded-t-xl"
        >
          {showAnalysis ? '−' : '+'} تحاليل
        </button>
        {showAnalysis && (
          <div className="p-4">
            <ServiceTable
              type="analysis"
              tableId="analysis_items_table"
              claim={{ items: claimItems }}
              onClaimUpdate={(updatedClaim) => {
                setClaimItems(updatedClaim.items);
              }}
              deduct={deduct}
              id="analysis_table_btn"
            />
          </div>
        )}
      </div>

      {/* Toggle: Medication Items */}
      <div className="border border-gray-200 rounded-xl">
        <button
          type="button"
          onClick={() => setShowMedication(!showMedication)}
          className="w-full px-4 py-3 text-right font-medium bg-gray-50 hover:bg-gray-100 rounded-t-xl"
        >
          {showMedication ? '−' : '+'}  ادوية
        </button>
        {showMedication && (
          <div className="p-4">
            <ServiceTable
              type="medication"
              tableId="medication_items_table"
              // claimItems = {claimItems}
              // setClaimItems={setClaimItems}
              claim={{ items: claimItems }}
              onClaimUpdate={(updatedClaim) => {
                setClaimItems(updatedClaim.items);
              }}
              deduct={deduct}
              id="medication_table_btn"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NormalItemsTab;
