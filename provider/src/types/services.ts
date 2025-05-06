export interface ServiceItem {
    id?: string;
    service_id: string;
    service_name: string;
    quantity: string;
    unit_price: string;
    total: string;
    base_price: string;
    base_coverage_rate: string;
    base_coverage: string;
    description?: string;
    notes?: string;
    is_visit: boolean;
    is_repeat?: boolean;
    allowed_times?: string;
    transaction?: string;
    total_paid?: string;
    files?: File[];
    type: string;
}

export interface Claim {
    id?: string;
    items: ServiceItem[];
    workflow_state?: string;
}

export interface EditItemState {
    data: ServiceItem | null;
    index: number | null;
}


export interface Service {
    id: string;
    name: string;
    price: number;
}

export type FormData = {
    serviceId: string;
    serviceName: string;
    isRepeat: boolean;
    allowedTimes: string;
    transaction: string;
    totalPresciption:string;
    totalPaid: string;
    base_price: string;
    base_coverage_rate: string;
    base_coverage: string;
    description: string;
    quantity: string;
    unitPrice: string;
    total: string;
    files: File[];
};

export interface AddServiceFormProps {
    onClose: () => void;
    deduct:number;
    onAdd?: (formData: any) => void;
    onEdit?: (formData: any, index: number) => void;
    editData?: any;
    editIndex?: number;
    serviceType: string;
    type: string;
    vat:number;
}
export interface ClaimTotalCardProps {
    isVisible: boolean;
    labels: {
        claimTotals: string;
        startSearchText: string;
        totalCost: string;
        totalCostVat: string;
        totalCostWithVat: string;
        totalDeductibleCost: string;
        vat: string;
        totalDeductibleCostWithVat: string;
        totalCoveredAmount: string;
        totalCoveredAmountWithVat: string;
    };
    claimItems?: ServiceItem[];
    vatRate?: number;
    deduct :number | any;
}
export interface ReadonlyInputProps {
    label: string;
    id: string;
    value?: string;
    percent?: boolean;
}
export interface ServiceSubmissionData {
    service_id: string;
    service_name: string;
    is_repeat: boolean;
    type: string;
    allowed_times: string | null;
    transaction: string | null;
    total_paid: string | null;
    total_prescription: string | null;
    description: string;
    quantity: string;
    unit_price: string;
    total: string;
    base_price: string;
    base_coverage_rate: string;
    base_coverage: string;
    files: File[];
    is_visit: boolean;
  }
  
