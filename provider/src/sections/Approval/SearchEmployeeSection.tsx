// In SearchEmployeeSection.tsx
import { Box } from "@mui/material";
import PatientSearchForm from "../../forms/Approvals/PatientSearchForm";
import { PatientData } from "../../interfaces/approvals/AddApproval";

interface Props {
  onSuccess: (data: PatientData) => void;
}

const SearchEmployeeSection = ({ onSuccess }: Props) => {
  return (
    <Box>
      <PatientSearchForm onSuccess={onSuccess} />
    </Box>
  );
};

export default SearchEmployeeSection;
