import { Box, Paper } from "@mui/material";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { FiEdit } from "react-icons/fi";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoArrowBackSharp } from "react-icons/io5";
import { useTabs } from "../../contexts/TabsContext";

const EmployeePersonInfoSection = () => {
  const { dispatch } = useTabs();
  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4`}>
        <h6 className="!font-[700] paper_head">المعلومات الشخصية</h6>
        <BasicButton>
          تعديل
          <FiEdit />
        </BasicButton>
      </Box>

      <Box className={`flex justify-end items-center`}>
        <GradientButton
          onClick={() => dispatch({ type: "EMPLOYEE", payload: 1 })}
        >
          التالى
          <IoArrowBackSharp />
        </GradientButton>
      </Box>
    </Paper>
  );
};

export default EmployeePersonInfoSection;
