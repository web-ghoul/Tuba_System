import { useState } from 'react';
import VisitForm from '../../forms/Approvals/VisitForm';
import { Box } from '@mui/material';
import ServicesForm from '../../forms/Approvals/ServicesForm';

const AddApprovalSection = ({deduct , vat}) => {
  const [activeTab, setActiveTab] = useState<'visit' | 'claim'>('visit');
  const [showNavigation, setShowNavigation] = useState(false);
  const [showButton, setShowButton] = useState(true); // State to track button visibility

  const handleAddApprovalClick = () => {
    setShowNavigation(true);
    setShowButton(false); // Hide the button when clicked
  };

  return (
   <Box> 
    <div className="rounded-lg shadow-md p-6 border gap-10" id="claim_view2">
      <h5 className="tuba_card_head_title">إنشاء موافقة</h5>
      <h4 className="text-center font-medium text-xl" id="add_claim_title">
        الرجاء إضافة تفاصيل الموافقة الخاصة بك
      </h4>

      {/* Only show the button if showButton is true */}
      {showButton && (
        <button
          type="button"
          className="toggle-navigation w-full px-16 border-2 border-primary rounded-xl py-3 flex justify-center items-center gap-2 transition-all"
          style={{ color: '#5A46E6' }}
          onClick={handleAddApprovalClick}
        >
          <img src="/assets/media/add_solid2.svg" className="mx-2" alt="" />
          إضافة موافقة
        </button>
      )}

      {showNavigation && (
        <div id="navigation" className="mb-6">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <p className="text-muted">يرجى تحديد نوع الموافقة</p>
            </div>
            <div className="w-full mt-4">
              <ul className="flex border-b mb-5 text-base">
                <li className="mx-5">
                  <button
                    className={`nav-link nav-btn ${activeTab === 'visit' ? 'text-primary border-b-2 border-primary' : ''}`}
                    onClick={() => setActiveTab('visit')}
                  >
                    زيارة
                  </button>
                </li>
                <li className="mx-5">
                  <button
                    className={`nav-link nav-btn ${activeTab === 'claim' ? 'text-primary border-b-2 border-primary' : ''}`}
                    onClick={() => setActiveTab('claim')}
                  >
                    خدمات
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Render forms only if the navigation has been shown */}
      {showNavigation && activeTab === 'visit' && <VisitForm />}
      {showNavigation && activeTab === 'claim' &&  <ServicesForm deduct={deduct} vat ={vat} /> }
    </div>
    </Box>
  );
};

export default AddApprovalSection;
