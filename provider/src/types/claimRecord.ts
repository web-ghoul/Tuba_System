import { ClaimRequestStatusKey } from '../constants/claimStatus';
import { ClaimItem } from './approval';

export interface ClaimRecord {
  name: string;
  nationality: string;
  issue_date: string;
  total_price_base: number;
  total_price_vat: number;
  total_price_taxed: number;
  workflow_state: ClaimRequestStatusKey;
}

export interface Filters {
  nationalId: string;
  workflowState: string;
  issueDate: string;
}
export interface ServiceDetails {
  service_type: string;
  covered_person_doc?: {
      name1: string;
  };
  company_doc?: {
      name1: string;
  };
  branch_id?: string;
}
export interface CoverageDetails {
  coverage_document_number: string;
  coverage_document: string;
}
export interface ServiceTableProps {
  type: string;
  tableId: string;
  claim?: { items?: ClaimItem[]; workflow_state?: string };
  id: string;
}
