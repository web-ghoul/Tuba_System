import React from 'react';
import {
    Box,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';

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
    icd10Options?: { label: string; value: string }[];
}

export const mockIcd10Options = [
    { label: 'A00 - Cholera', value: 'A00' },
    { label: 'B01 - Varicella [chickenpox]', value: 'B01' },
    { label: 'C34 - Malignant neoplasm of bronchus and lung', value: 'C34' },
    { label: 'E11 - Type 2 diabetes mellitus', value: 'E11' },
    { label: 'I10 - Essential (primary) hypertension', value: 'I10' },
    { label: 'J45 - Asthma', value: 'J45' },
    { label: 'K35 - Acute appendicitis', value: 'K35' },
    { label: 'M54 - Dorsalgia [back pain]', value: 'M54' },
    { label: 'N39 - Urinary tract infection', value: 'N39' },
    { label: 'Z00 - General medical examination', value: 'Z00' },
];

const BasicApprovalDetails: React.FC<BasicApprovalDetailsProps> = ({
    basicDetails,
    setBasicDetails,
    icd10Options = mockIcd10Options,
}) => {
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

            {/* ICD10 Diagnoses Select */}
            <FormControl fullWidth required>
                <InputLabel id="icd10-label">تشخيص ICD10</InputLabel>
                <Select
                    labelId="icd10-label"
                    id="icd10_diagnoses"
                    value={basicDetails.icd10_diagnoses}
                    label="تشخيص ICD10"
                    onChange={(e) =>
                        setBasicDetails((prev) => ({
                            ...prev,
                            icd10_diagnoses: e.target.value,
                        }))
                    }
                >
                    <MenuItem value="">
                        <em>اختر التشخيص</em>
                    </MenuItem>
                    {icd10Options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
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
