import { Box, Paper } from "@mui/material";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { FiEdit } from "react-icons/fi";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoArrowBackSharp } from "react-icons/io5";
import { useTabs } from "../../contexts/TabsContext";
import TextLabel from "../../components/TextLabel/TextLabel";

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

      <Box className={`grid justify-stretch items-center gap-4 grid-cols-2`}>
        <TextLabel title={"الاسم"} value={"علي طارق محمود"} variant="employee" />
        <TextLabel title={"رقم الهوية"} value={"16228916839"} variant="employee" />
        <TextLabel title={"البريد الإلكتروني"} value={"alitarek@gmail.com"}  variant="employee"/>
        <TextLabel title={"الجنس"} value={"الذكر"}  variant="employee"/>
        <TextLabel title={"تاريخ الميلاد"} value={"2024-08-11"}  variant="employee"/>
        <TextLabel title={"رقم الهاتف"} value={"+966 55 123 4567"}  variant="employee"/>
        <TextLabel title={"الجنسية"} value={"مصري"} variant="employee" />
        <TextLabel title={"الحالة الاجتماعية"} value={"مطلق"} variant="employee" />
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
