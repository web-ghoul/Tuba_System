import { ClaimRequestStatusKey } from '../constants/claimStatus';

export interface ClaimRecord {
  id: number;
  name: string;
  nationality: string;
  issueDate: string;
  total: number;
  vat: number;
  totalWithVat: number;
  status: ClaimRequestStatusKey;
}

export interface Filters {
  nationalId: string;
  workflowState: string;
  issueDate: string;
}
