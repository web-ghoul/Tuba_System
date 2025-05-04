// ServicesForm.tsx
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@mui/material';
import BasicApprovalDetails from '../../components/approval/BasicApprovalDetails';
import { TabNavigation } from '../../components/approval/TabNavigation';
import NormalItemsTab from '../../components/approval/NormalItemsTab';
import ClaimTotalCard from '../../components/approval/ClaimTotalCard';
import React, { useState } from 'react';
import { ServiceItem } from '../../types/services';
const ServicesForm: React.FC = () => {
  const deduct =20;
  const [activeTab, setActiveTab] = useState<'normal' | 'drg'>('normal');
  const [basicDetails, setBasicDetails] = useState({
    service_type: '',
    icd10_diagnoses: '',
    justification: '',
  });
  const [claimItems, setClaimItems] = useState<ServiceItem[]>([]);
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    const finalData = {
      ...data,
      ...basicDetails,
      items: claimItems,
    };
    console.log('Form Data:', finalData);
    // Send finalData to your API here
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6">
          <BasicApprovalDetails
            basicDetails={basicDetails}
            setBasicDetails={setBasicDetails}
          />
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="tab-content">
            {activeTab === 'normal' && <NormalItemsTab deduct={deduct} claimItems={claimItems}
              setClaimItems={setClaimItems} />}
            {activeTab === 'drg' && <div className="p-4">Comming Soon....</div>}
          </div>
          <ClaimTotalCard
            isVisible={true}
            deduct={20}
            claimItems={claimItems}
            labels={{
              claimTotals: 'مجموع المطالبات',
              startSearchText: 'ابدأ باضافة خدمات لعرض مجموع تكلفة الموافقة هنا.',
              totalCost: 'التكلفة الإجمالية',
              totalCostVat: 'ضريبة القيمة المضافة',
              totalCostWithVat: 'المبلغ المغطى مع الضريبة',
              totalDeductibleCost: 'المبلغ المغطى',
              vat: 'الضريبة',
              totalDeductibleCostWithVat: 'المبلغ المغطى  مع الضريبة',
              totalCoveredAmount: 'المبلغ المتحمل',
              totalCoveredAmountWithVat: 'المبلغ المتحمل مع الضريبة',
              
            }}
          />
          <Button type="submit" variant="contained" color="primary" className="w-full md:w-1/3 py-2 rounded">
            إرسال موافقة الخدمات
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
export default ServicesForm; 