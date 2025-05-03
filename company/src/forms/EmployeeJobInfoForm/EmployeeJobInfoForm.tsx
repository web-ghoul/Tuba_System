import { Box, Typography } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useModals } from "../../contexts/ModalsContext";
import {
  EmployeeJobInfoFormTypes,
  FormiksTypes,
} from "../../types/forms.types";

const EmployeeJobInfoForm = ({
  formik,
}: FormiksTypes<EmployeeJobInfoFormTypes>) => {
  const { dispatch } = useModals();
  return (
    <Box
      className={`grid justify-stretch items-center gap-10 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Typography variant="h6" className={`!font-[700]`}>
        معلومات العمل
      </Typography>
      <Box className={`grid justify-stretch items-start gap-8 grid-cols-2`}>
        <Input
          formik={formik}
          label={"البريد الإلكتروني للعمل"}
          name={"email"}
          type={"email"}
        />
        <Input
          formik={formik}
          label={"رقم الموظف"}
          type={"date"}
          name={"employeeNo"}
        />
        <Input
          formik={formik}
          label={"المسمى الوظيفي "}
          select
          name={"jobTitle"}
          options={["Software Engineer", "Frontend Developer"]}
        />
        <Input
          formik={formik}
          label={"الراتب"}
          select
          name={"salary"}
          options={["اقل من 4000 ريال", "اقل من 5000 ريال"]}
        />
      </Box>
      <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
        <SubmitButton variant="gradient" loading={false}>
          حفظ
        </SubmitButton>
        <BasicButton
          onClick={() =>
            dispatch({ type: "editEmployeeJobInfoModal", payload: false })
          }
        >
          إلغاء
        </BasicButton>
      </Box>
    </Box>
  );
};

export default EmployeeJobInfoForm;
