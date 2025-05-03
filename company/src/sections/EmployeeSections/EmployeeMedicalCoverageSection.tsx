import { Box, Paper } from "@mui/material";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { FiEdit } from "react-icons/fi";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { useTabs } from "../../contexts/TabsContext";
import TextLabel from "../../components/TextLabel/TextLabel";
import { useModals } from "../../contexts/ModalsContext";

const EmployeeMedicalCoverageSection = () => {
  const { dispatch } = useTabs();
  const { dispatch: dispatchModal } = useModals();

  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4`}>
        <h6 className="!font-[700] paper_head">التغطية الطبية</h6>
        <BasicButton
          onClick={() =>
            dispatchModal({
              type: "editEmployeeMedicalCoverageModal",
              payload: true,
            })
          }
        >
          تعديل
          <FiEdit />
        </BasicButton>
      </Box>

      <Box className={`grid justify-stretch items-center gap-4 grid-cols-2`}>
        <TextLabel
          title={"وثيقة التغطية الطبية "}
          value={"DOC-202400120 - (DOC-202400120)"}
          variant="employee"
        />
        <TextLabel
          title={"الباقة الحالية"}
          value={"Tuba Primary - (PKG-10)"}
          variant="employee"
        />
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
