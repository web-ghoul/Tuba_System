import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ServiceItem } from '../types/services';

export interface BasicDetails {
  service_type: string;
  icd10_diagnoses: string;
  justification: string;
}

export const useServicesForm = (deduct:number) => {
  const methods = useForm();
  const [activeTab, setActiveTab] = useState<'normal' | 'drg'>('normal');
  const [basicDetails, setBasicDetails] = useState<BasicDetails>({
    service_type: '',
    icd10_diagnoses: '',
    justification: '',
  });
  const [claimItems, setClaimItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(false); // ✅ added loading state

  const validateBeforeSubmit = (): boolean => {
    if (claimItems.length === 0) {
      alert('يجب إضافة خدمة واحدة على الأقل.');
      return false;
    }
    return true;
  };

  const onSubmit = async (data: any) => {
    if (!validateBeforeSubmit()) return;
  
    setLoading(true); // ✅ start loading
    try {
      const finalData = {
        ...data,
        ...basicDetails,
        items: claimItems,
      };
  
      console.log('Form Data:', finalData);
  
      // ⏳ Simulate API delay (e.g., 2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      // ✅ You could add a success alert or toast here
      alert('تم إرسال المطالبة بنجاح!');
    } catch (err) {
      console.error('Error submitting form', err);
    } finally {
      setLoading(false); // ✅ end loading
    }
  };
  
  return {
    deduct,
    methods,
    activeTab,
    setActiveTab,
    basicDetails,
    setBasicDetails,
    claimItems,
    setClaimItems,
    onSubmit,
    loading,
    setLoading, // ✅ export setLoading
  };
};
