import { useState } from "react";
import axios, { AxiosError } from "axios";
import { PatientData } from "../../interfaces/approvals/AddApproval";
import { getPatientInfo } from "../../services/searchEmployeeService";

interface FormData {
  national_id: string;
  coverage_document_number: string;
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

      if (data.national_id) {
        const response = await getPatientInfo(data.national_id);
        console.log(response.data.data[0]);
        if (response.data.data[0]) {
          
          const member = response.data.data[0];
          if(!member.coverage_activated){
            setError(
              'هذا الموظف غير متفعل'
            );
            return null;
          }
          return {
            coverage_document: "DOC123456",
            company: "ACME Health Insurance",
            coverage_member_number: member.name,
            covered_person: member.name1,
            patient_nationality: member.nationality,
            vat: member.nationality=="Saudi Arabia"?0:15,
            //barnch from redux
            medical_provider_branch: "Riyadh Central Hospital",
            deductible_percent: 10  ,
            max_network_level: "Level 3",
            branch_readonly: false,
          };
        }else{
          // const axiosError = err as AxiosError<ApiError>;
          setError(
           
            'هذا الموظف غير تابع لطوبي'
          );
          return null;
        }

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