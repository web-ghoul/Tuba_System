// forms/ServicesForm.tsx
import { FormProvider } from 'react-hook-form';
import { Button } from '@mui/material';
import BasicApprovalDetails from '../../components/approval/BasicApprovalDetails';
import { TabNavigation } from '../../components/approval/TabNavigation';
import NormalItemsTab from '../../components/approval/NormalItemsTab';
import ClaimTotalCard from '../../components/approval/ClaimTotalCard';
import React from 'react';
import { useServicesForm } from '../../hooks/useServicesForm';
interface ServicesFormProps {
  deduct : number;
  vat:number;
}

const ServicesForm: React.FC<ServicesFormProps> = ({deduct , vat}) => {
  const {
    methods,
    activeTab,
    setActiveTab,
    basicDetails,
    setBasicDetails,
    claimItems,
    setClaimItems,
    onSubmit,
    loading,
    setLoading
  } = useServicesForm(deduct);

  const { handleSubmit } = methods;

  console.log(loading);
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
            {activeTab === 'normal' && (
              <NormalItemsTab
                deduct={deduct}
                vat={vat}
                claimItems={claimItems}
                setClaimItems={setClaimItems}
              />
            )}
            {activeTab === 'drg' && <div className="p-4">قريباً...</div>}
          </div>

          <ClaimTotalCard
            isVisible={true}
            deduct={deduct}
            vatRate ={vat}
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            >
              {loading ? 'جاري الإرسال...' : 'إرسال موافقة الخدمات'}
            </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ServicesForm;
