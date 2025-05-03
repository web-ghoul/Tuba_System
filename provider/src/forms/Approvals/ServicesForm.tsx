// components/ClaimForm.tsx

import React, { useState } from 'react';
// import ServiceTypeSelect from './ServiceTypeSelect';
// import ICD10Select from './ICD10Select';
// import JustificationTextarea from './JustificationTextarea';
import {TabNavigation} from '../../components/approval/TabNavigation';
import NormalItemsTab from '../../components/approval/NormalItemsTab';
// import TotalClaim from './TotalClaim';

const ServicesForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'normal' | 'drg'>('normal');

  return (
    <div id="claim_form_div" className="">
      <div className="grid gap-6">
        {/* Service Type */}
       

        {/* ICD10 Select */}
        {/* <ICD10Select /> */}

        {/* Justification Textarea */}
        {/* <JustificationTextarea /> */}

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'normal' && <NormalItemsTab />}
          {activeTab === 'drg' && <div className="p-4">DRG Tab Placeholder</div>}
        </div>

        {/* Total Claim Summary */}
        {/* <TotalClaim /> */}

        {/* Submit Button */}
        <button
          id="save_btn"
          type="button"
          className="btn my-5 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hidden"
        >
          <span className="indicator-label">Save</span>
          <span className="indicator-progress flex items-center gap-2">
            Please wait
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServicesForm;
