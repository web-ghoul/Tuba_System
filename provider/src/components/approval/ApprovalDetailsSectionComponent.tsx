
// ApprovalDetails.tsx
import React from 'react';
import { Paper } from '@mui/material';

interface Claim {
    name: string;
    workflow_state: string;
    specialization?: string;
    diseases_name?: string;
    claim_justification?: string;
    coverage_member_number?: string;
    issue_date: string;
}

interface Props {
    claim: Claim;
    hasFurtherDataItems: boolean;
}

// Mock data for development and testing
const mockClaim: Claim = {
    name: "CLM-2023-0457",
    workflow_state: "قيد المراجعة",
    specialization: "طب باطني",
    diseases_name: "التهاب المفاصل الروماتويدي",
    claim_justification: "المريض يعاني من آلام شديدة في المفاصل ويحتاج إلى علاج متخصص.",
    coverage_member_number: "MEM-5671-2023",
    issue_date: "2023-09-15"
};

const ApprovalDetailsSection: React.FC<Props> = ({ 
    claim = mockClaim, // Use mock data as default value
}) => {
    return (
        <Paper className="p-4 border rounded-lg shadow-md bg-white">
            <h4 className="text-info mb-5 font-bold">تفاصيل الطلب</h4>
            <div className="flex justify-between w-3/4  gap-2 flex-wrap">
                <div className="shadow-sm mb-10 w-full lg:w-[60%] rounded overflow-hidden border">
                    <div className="bg-primary  px-4 py-4 flex justify-between items-center">
                        <h3 className="text-white text-lg font-semibold">
                            رقم الطلب #{claim.name}
                        </h3>
                        <div className="text-white text-sm flex items-center gap-2">
                            الحالة:
                            <button
                                type="button"
                                id="status_badge"
                                className="btn btn-sm bg-white text-[#5A46E6] px-2 py-1 rounded font-medium hover:bg-gray-100 transition-colors"
                            >
                                {claim.workflow_state}
                            </button>
                        </div>
                    </div>
                    
                    {/* Additional claim details */}
                    <div className="p-4 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-row gap-3">
                                <span className="text-gray-500 text-sm">التخصص</span>
                                <span className="font-medium">{claim.specialization}</span>
                            </div>
                            <div className="flex  flex-row gap-3">
                                <span className="text-gray-500 text-sm">اسم المرض</span>
                                <span className="font-medium">{claim.diseases_name}</span>
                            </div>
                            <div className="flex  flex-row gap-3">
                                <span className="text-gray-500 text-sm">رقم العضوية</span>
                                <span className="font-medium">{claim.coverage_member_number}</span>
                            </div>
                            <div className="flex  flex-row gap-3">
                                <span className="text-gray-500 text-sm">تاريخ الإصدار</span>
                                <span className="font-medium">{claim.issue_date}</span>
                            </div>
                        </div>
                        
                        {/* Justification if available */}
                        {claim.claim_justification && (
                            <div className="mt-4 pt-3 border-t  flex-row gap-3">
                                <span className="text-gray-500 font-medium mx-2 ">سبب المطالبة</span>
                                <span className="">{claim.claim_justification}</span>
                            </div>
                        )}
                    </div>
                </div>
                
               
            </div>
        </Paper>
    );
};

export default ApprovalDetailsSection;