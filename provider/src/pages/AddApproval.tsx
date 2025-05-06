// In AddApproval.tsx
import { useState } from "react";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import AddApprovalSection from "../sections/Approval/AddApprovalSection";
import SearchEmployeeSection from "../sections/Approval/SearchEmployeeSection";
import { PatientData } from "../interfaces/approvals/AddApproval";

const AddApproval: React.FC = () => {
  const [patientData, setPatientData] = useState<PatientData | null>(null);

  return (
    <PrimaryContainer className={`!grid justify-stretch items-start mt-0 gap-2`}>
        <SearchEmployeeSection onSuccess={setPatientData} />
        {patientData && <AddApprovalSection deduct={patientData.deductible_percent} vat ={patientData.vat} />}  
    </PrimaryContainer>
  );
};

export default AddApproval;
