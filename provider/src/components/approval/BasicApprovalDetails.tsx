import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
import { useIcd10Autocomplete, AutocompleteOption } from '../../hooks/useIcd10Autocomplete';

interface BasicApprovalDetailsProps {
  basicDetails: {
    service_type: string;
    icd10_diagnoses: string;
    justification: string;
  };
  setBasicDetails: React.Dispatch<
    React.SetStateAction<{
      service_type: string;
      icd10_diagnoses: string;
      justification: string;
    }>
  >;
}

const BasicApprovalDetails: React.FC<BasicApprovalDetailsProps> = ({
  basicDetails,
  setBasicDetails,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<AutocompleteOption | null>(null);
  const { options = [], loading } = useIcd10Autocomplete(inputValue);

  // Find and set the selected option when component mounts or when icd10_diagnoses changes
  useEffect(() => {
    if (basicDetails.icd10_diagnoses && options && options.length > 0) {
      const matchingOption = options.find((opt) => opt.value === basicDetails.icd10_diagnoses);
      if (matchingOption) {
        setSelectedOption(matchingOption);
      }
    } else if (!basicDetails.icd10_diagnoses) {
      setSelectedOption(null);
    }
  }, [basicDetails.icd10_diagnoses, options]);

  return (
    <Box className="grid gap-4">
      {/* Service Type Select */}
      <FormControl fullWidth required>
        <InputLabel id="service-type-label">نوع الخدمة</InputLabel>
        <Select
          labelId="service-type-label"
          id="service_type"
          value={basicDetails.service_type}
          label="نوع الخدمة"
          onChange={(e) =>
            setBasicDetails((prev) => ({
              ...prev,
              service_type: e.target.value,
            }))
          }
        >
          <MenuItem value="">
            <em>اختر نوع الخدمة</em>
          </MenuItem>
          <MenuItem value="inpatient">inpatient</MenuItem>
          <MenuItem value="outpatient">outpatient</MenuItem>
        </Select>
      </FormControl>

      {/* ICD10 Diagnoses Autocomplete */}
      <FormControl fullWidth required>
        <Autocomplete
          id="icd10_diagnoses"
          options={options || []}
          getOptionLabel={(option) => {
            // Handle cases where option might be a string or null
            if (typeof option === 'string') return option;
            return option?.label || '';
          }}
          loading={loading}
          inputValue={inputValue}
          value={selectedOption}
          onInputChange={(_, value) => setInputValue(value)}
          onChange={(_, newValue: AutocompleteOption | null) => {
            setSelectedOption(newValue);
            setBasicDetails((prev) => ({
              ...prev,
              icd10_diagnoses: newValue ? newValue.value : '',
            }));
          }}
          isOptionEqualToValue={(option, value) => {
            // Safe comparison logic
            if (!option || !value) return option === value;
            return option.value === value.value;
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="تشخيص ICD10"
              required
              placeholder="اختر التشخيص"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </FormControl>

      {/* Justification TextArea */}
      <TextField
        id="justification"
        label="التبرير"
        placeholder="ادخل التبرير"
        multiline
        required
        rows={4}
        fullWidth
        value={basicDetails.justification}
        onChange={(e) =>
          setBasicDetails((prev) => ({
            ...prev,
            justification: e.target.value,
          }))
        }
      />
    </Box>
  );
};

export default BasicApprovalDetails;