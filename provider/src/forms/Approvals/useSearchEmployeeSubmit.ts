import { useState } from "react";
import axios, { AxiosError } from "axios";

interface FormData {
  national_id: string;
  coverage_document_number: string;
}

interface PatientData {
  coverage_document?: string;
  company?: string;
  coverage_member_number?: string;
  covered_person?: string;
  patient_nationality?: string;
  medical_provider_branch?: string;
  deductible_percent?: number;
  max_network_level?: string;
  branch_readonly?: boolean;
}

interface ApiError {
  message: string;
}

export const useSearchEmployeeSubmit = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchEmployee = async (data: FormData): Promise<PatientData | null> => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (data.national_id === "1234567890") {
        return {
          coverage_document: "DOC123456",
          company: "ACME Health Insurance",
          coverage_member_number: "MEM987654",
          covered_person: "John Doe",
          patient_nationality: "Saudi",
          medical_provider_branch: "Riyadh Central Hospital",
          deductible_percent: 10,
          max_network_level: "Level 3",
          branch_readonly: false,
        };
      }
      // Using axios instead of fetch
      const response = await axios.post<PatientData>('/api/search-patient', data);
      
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError<ApiError>;
      setError(
        axiosError.response?.data?.message || 
        'حدث خطأ أثناء البحث، يرجى المحاولة مرة أخرى'
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { searchEmployee, isLoading, error };
};