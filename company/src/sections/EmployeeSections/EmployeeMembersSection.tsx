import { Box, Paper } from "@mui/material";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoAddCircleOutline, IoArrowForwardSharp } from "react-icons/io5";
import EmployeeMembersTable from "../../Tables/EmployeeMembersTable/EmployeeMembersTable";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useTabs } from "../../contexts/TabsContext";
import { useModals } from "../../contexts/ModalsContext";

const EmployeeMembersSection = () => {
  const { dispatch } = useTabs();
  const { dispatch: dispatchModal } = useModals();

  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4`}>
        <h6 className="!font-[700] paper_head">أعضاء العائلة</h6>
        <GradientButton
          onClick={() =>
            dispatchModal({ type: "addMemberModal", payload: true })
          }
        >
          <IoAddCircleOutline />
          إضافة عضو جديد
        </GradientButton>
      </Box>
      <EmployeeMembersTable />

      <BasicButton
        className={`w-fit`}
        onClick={() => dispatch({ type: "EMPLOYEE", payload: 2 })}
      >
        <IoArrowForwardSharp />
        السابق
      </BasicButton>
    </Paper>
  );
};

export default EmployeeMembersSection;
