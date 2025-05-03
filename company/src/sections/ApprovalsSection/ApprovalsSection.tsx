import { Box, Paper } from "@mui/material";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RiFileExcel2Line } from "react-icons/ri";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { GradientButton } from "../../mui/buttons/GradientButton";
import ApprovalsTable from "../../Tables/ApprovalsTable/ApprovalsTable";
import Forms from "../../forms/Forms";

const ApprovalsSection = () => {
  return (
    <Paper className={"paper"}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Forms type={"filterApprovals"} />
        <Box className={`flex justify-center items-center gap-2 flex-wrap`}>
          <GradientButton>
            <RiFileExcel2Line />
            تصدير XLS
          </GradientButton>
          <PrimaryButton>
            <BsFileEarmarkPdf />
            تصدير PDF
          </PrimaryButton>
        </Box>
      </Box>
      <ApprovalsTable />
    </Paper>
  );
};

export default ApprovalsSection;
