// In SearchEmployeeSection.tsx
import { Box } from "@mui/material";
import PatientSearchForm from "../../forms/Approvals/PatientSearchForm";
import { PatientData } from "../../interfaces/approvals/AddApproval";

interface Props {
  onSuccess: (data: PatientData) => void;
}

const SearchEmployeeSection = ({ onSuccess }: Props) => {
  const handleSuccess = (data: PatientData | null) => {
    if (data) {
      onSuccess(data);
    }
  };

  return (
    <Box>
      <PatientSearchForm onSuccess={handleSuccess} />
    </Box>
  );
};

export default SearchEmployeeSection;
