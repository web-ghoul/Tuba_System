import { Box, Paper } from "@mui/material";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { FiEdit } from "react-icons/fi";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useTabs } from "../../contexts/TabsContext";
import TextLabel from "../../components/TextLabel/TextLabel";
import { useModals } from "../../contexts/ModalsContext";

const EmployeeJobInfoSection = () => {
  const { dispatch } = useTabs();
  const { dispatch: dispatchModal } = useModals();

  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4`}>
        <h6 className="!font-[700] paper_head">معلومات العمل</h6>
        <BasicButton
          onClick={() =>
            dispatchModal({
              type: "editEmployeeJobInfoModal",
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
          title={"البريد الإلكتروني للعمل"}
          value={"a.tarek@tuba.com"}
          variant="employee"
        />
        <TextLabel title={"رقم الموظف"} value={"780"} variant="employee" />
        <TextLabel title={"المسمى الوظيفي "} value={"."} variant="employee" />
        <TextLabel
          title={"الراتب"}
          value={"اقل من 4000 ريال"}
          variant="employee"
        />
        <TextLabel title={"المجموعة"} value={"."} variant="employee" />
      </Box>

      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <BasicButton onClick={() => dispatch({ type: "EMPLOYEE", payload: 0 })}>
          <IoArrowForwardSharp />
          السابق
        </BasicButton>
        <GradientButton
          onClick={() => dispatch({ type: "EMPLOYEE", payload: 2 })}
        >
          التالى
          <IoArrowBackSharp />
        </GradientButton>
      </Box>
    </Paper>
  );
};

export default EmployeeJobInfoSection;
