import { Box, Paper } from "@mui/material";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RiFileExcel2Line } from "react-icons/ri";
import { BsFileEarmarkPdf } from "react-icons/bs";
import EmployeesTable from "../../Tables/EmployeesTable/EmployeesTable";
import { GradientButton } from "../../mui/buttons/GradientButton";
import Forms from "../../forms/Forms";

const EmployeesSection = () => {
  return (
    <Paper className={"paper"}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Forms type={"filterEmployees"} />
        <Box className={`flex justify-center items-center gap-2 flex-wrap`}>
          <PrimaryButton>
            <BsFileEarmarkPdf />
            تصدير PDF
          </PrimaryButton>
          <GradientButton>
            <RiFileExcel2Line />
            تصدير XLS
          </GradientButton>
        </Box>
      </Box>
      <EmployeesTable />
    </Paper>
  );
};

export default EmployeesSection;
