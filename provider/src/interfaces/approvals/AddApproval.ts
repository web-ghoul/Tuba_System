export interface FormData {
  national_id: string;
  coverage_document_number: string;
}

export interface PatientData {
  coverage_document?: string;
  company?: string;
  coverage_member_number?: string;
  covered_person?: string;
  patient_nationality?: string;
  medical_provider_branch?: string;
  deductible_percent?: number;
  max_network_level?: string;
  branch_readonly?: boolean;
  vat : number ;
}