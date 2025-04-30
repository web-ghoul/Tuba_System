import { Box, Paper } from "@mui/material";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { FiEdit } from "react-icons/fi";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { useTabs } from "../../contexts/TabsContext";

const EmployeeMedicalCoverageSection = () => {
  const { dispatch } = useTabs();

  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4`}>
        <h6 className="!font-[700] paper_head">التغطية الطبية</h6>
        <BasicButton>
          تعديل
          <FiEdit />
        </BasicButton>
      </Box>

      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <BasicButton onClick={() => dispatch({ type: "EMPLOYEE", payload: 1 })}>
          <IoArrowForwardSharp />
          السابق
        </BasicButton>
        <GradientButton
          onClick={() => dispatch({ type: "EMPLOYEE", payload: 3 })}
        >
          التالى
          <IoArrowBackSharp />
        </GradientButton>
      </Box>
    </Paper>
  );
};

export default EmployeeMedicalCoverageSection;
