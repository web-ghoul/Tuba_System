import { useState } from 'react';
import { Autocomplete, TextField, Button } from '@mui/material';
import { specializationOptions } from '../../constants/specializations';
import useSubmitVisit from './useSubmitVisit';

// Define the interface for the specialization object
interface Specialization {
  label: string;
  value: string;
}

// Define error state interface
interface FormErrors {
  justification: string;
  specialization: string;
}

const VisitForm = () => {
  const [justification, setJustification] = useState<string>('');
  const [specialization, setSpecialization] = useState<Specialization | undefined>(undefined); // undefined for Autocomplete
  const [errors, setErrors] = useState<FormErrors>({
    justification: '',
    specialization: ''
  });
  const { submitVisit, loading, error } = useSubmitVisit(); // Custom hook for form submission

  // Validation function
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      justification: '',
      specialization: ''
    };

    // Check justification - required and not just spaces
    if (!justification || justification.trim() === '') {
      newErrors.justification = 'تفاصيل الزيارة مطلوبة ولا يمكن أن تكون فارغة';
      isValid = false;
    }

    // Check specialization - required
    if (!specialization) {
      newErrors.specialization = 'التخصص مطلوب';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      submitVisit({ justification, specialization: specialization ?? null });
    }
  };

  return (
    <div className="visit_form_container gap-10 mt-6">
      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="visit_justification" className="block font-medium mb-1">
              تفاصيل الزيارة <span className="text-red-500">*</span>
            </label>
            <textarea
              id="visit_justification"
              rows={5}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="يرجى كتابة تفاصيل الزيارة..."
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              onBlur={() => {
                if (!justification || justification.trim() === '') {
                  setErrors({
                    ...errors, 
                    justification: 'تفاصيل الزيارة مطلوبة ولا يمكن أن تكون فارغة'
                  });
                } else {
                  setErrors({...errors, justification: ''});
                }
              }}
            />
            {errors.justification && (
              <p className="text-red-500 text-sm mt-1">{errors.justification}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-[14px]">
            <label htmlFor="visit_specialization" className="block font-medium mb-1">
              التخصص <span className="text-red-500">*</span>
            </label>
            <Autocomplete
              id="visit_specialization"
              options={specializationOptions}
              getOptionLabel={(option) => option.label}
              value={specialization}
              onChange={(_, newValue) => {
                setSpecialization(newValue as Specialization | undefined);
                if (newValue) {
                  setErrors({...errors, specialization: ''});
                }
              }}
              isOptionEqualToValue={(option, value) => option.value === value?.value}
              renderInput={(params) => (
                <TextField 
                  {...params} 
                  label="اختر التخصص" 
                  fullWidth 
                  error={!!errors.specialization}
                  helperText={errors.specialization}
                />
              )}
              disableClearable
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full md:w-1/3 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'جاري الإرسال...' : 'إرسال موافقة الزيارة'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VisitForm;