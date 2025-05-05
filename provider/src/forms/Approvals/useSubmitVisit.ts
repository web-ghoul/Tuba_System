import { useState } from 'react';

// Define the interface for the specialization object
interface Specialization {
  label: string;
  value: string;
}

// Define the interface for the form data
interface VisitFormData {
  justification: string;
  specialization: Specialization | null;
}

const useSubmitVisit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const submitVisit = async ({ justification, specialization }: VisitFormData) => {
    // Additional validation before submission
    if (!justification || justification.trim() === '') {
      setError('تفاصيل الزيارة مطلوبة');
      return;
    }

    if (!specialization) {
      setError('التخصص مطلوب');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      // Simulate an API call or business logic
      // Replace with actual API call
      console.log('Submitting visit form', { justification, specialization });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If API call is successful
      setLoading(false);
      setSuccess(true);
      alert('Visit claim submitted successfully!');
    } catch (err) {
      setLoading(false);
      setError('Failed to submit visit claim');
      setSuccess(false);
    }
  };

  return { submitVisit, loading, error, success };
};

export default useSubmitVisit;