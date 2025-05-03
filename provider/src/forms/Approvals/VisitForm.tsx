import { useState } from 'react';
import { Autocomplete, TextField, Button } from '@mui/material';
import { specializationOptions } from '../../constants/specializations';
import useSubmitVisit from './useSubmitVisit';

const VisitForm = () => {
  const [justification, setJustification] = useState('');
  const [specialization, setSpecialization] = useState(null); // null for Autocomplete
  const { submitVisit } = useSubmitVisit(); // Custom hook for form submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitVisit({ justification, specialization });
  };

  return (
    <div className="visit_form_container gap-10 mt-6">
      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="flex flex-row md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="visit_justification" className="block font-medium mb-1">
              تفاصيل الزيارة <span className="text-red-500">*</span>
            </label>
            <textarea
              id="visit_justification"
              rows={5}
              required
              className="w-full border border-gray-300 rounded p-2"
              placeholder="يرجى كتابة تفاصيل الزيارة..."
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
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
              onChange={(e, newValue) => setSpecialization(newValue)}
              isOptionEqualToValue={(option, value) => option.value === value?.value}
              renderInput={(params) => (
                <TextField {...params} label="اختر التخصص" required fullWidth />
              )}
              disableClearable
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full md:w-1/3 py-2 rounded"
          >
            إرسال موافقة الزيارة
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VisitForm;
