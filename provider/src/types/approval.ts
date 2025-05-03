// Define the Claim type
export interface ClaimItem {
  allow_amend: number;
  auto_approve_passed: number;
  auto_approver_check_date: string;
  claim: string;
  claim_price: number;
  covered_base: number;
  covered_taxed: number;
  covered_vat: number;
  creation: string;
  deductible_base: number;
  deductible_taxed: number;
  deductible_vat: number;
  docstatus: number;
  doctype: string;
  drg_bed_daily_price: number;
  drg_bed_days_count: number;
  drg_bed_price: number;
  drg_complexity_level: number;
  drg_equipment_price: number;
  drg_medication_price: number;
  drg_price_actual: number;
  drg_price_base: number;
  drg_price_total: number;
  drg_staff_hourly_price: number;
  drg_staff_hours_count: number;
  drg_staff_price: number;
  idx: number;
  is_approved: number;
  is_deductible_overlimit: number;
  is_drg: number;
  is_prescription: number;
  is_rejected: number;
  is_visit: number;
  item_name: string;
  mark_as_received: number;
  medical_provider_branch: string;
  modified: string;
  modified_by: string;
  name: string;
  owner: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  prescription_allowed_dispenses_count: number;
  prescription_is_recurring: number;
  prescription_minimum_dispense_period: number;
  prescription_total_dispensing_period: number;
  price_base: number;
  price_taxed: number;
  price_vat: number;
  provider_claim_item: string;
  quantity: number;
  status: string;
  tax_template: string;
}

  
  export interface ClaimActivity {
    id: number;
    date: string; // ISO 8601 format date
    activity: string;
  }
  
  export interface Claim {
    allow_amend: number;
    allow_comments: number;
    approved_claims_count: number;
    auto_approve_passed: number;
    auto_approver_check_date: string;
    claim_items_count: number;
    claim_justification: string;
    comments: any[]; // You can replace `any` with a proper type if known
    company: string;
    coverage_document: string;
    coverage_document_number: string;
    coverage_member_number: string;
    covered_person: string;
    covered_person_name: string;
    covered_person_nationality: string;
    creation: string;
    discharged_by: string;
    discharged_date: string;
    diseases: string;
    diseases_name: string;
    docstatus: number;
    doctype: string;
    employee: string;
    following_up_claims_count: number;
    has_initial_diagnosis: number;
    has_primary_diagnosis: number;
    idx: number;
    is_approved: number;
    is_rejected: number;
    is_smoker: number;
    is_visit_claim: number;
    issue_date: string;
    items: ClaimItem[]; // Define ClaimItem separately
    medical_provider: string;
    medical_provider_branch: string;
    modified: string;
    modified_by: string;
    name: string;
    owner: string;
    package: string;
    package_auto_approve_limit: number;
    package_coverage_percent: number;
    package_deductible_percent: number;
    package_enable_auto_approve: number;
    package_has_max_deductible_limit: number;
    package_max_deductible_limit: number;
    package_maximum_network_level: string | null;
    patient_user: string;
    payment_status: string;
    queue_status: string;
    received_claims_count: number;
    service_type: string;
    specialization: string;
    tax_template: string;
    total_covered_base: number;
    total_covered_taxed: number;
    total_covered_vat: number;
    total_deductible_base: number;
    total_deductible_taxed: number;
    total_deductible_vat: number;
    total_price_base: number;
    total_price_taxed: number;
    total_price_vat: number;
    workflow_state: string;
  }
  