import { Box, Typography } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useModals } from "../../contexts/ModalsContext";
import {
  EmployeeMedicalCoverageFormTypes,
  FormiksTypes,
} from "../../types/forms.types";

const EmployeeMedicalCoverageForm = ({
  formik,
}: FormiksTypes<EmployeeMedicalCoverageFormTypes>) => {
  const { dispatch } = useModals();
  return (
    <Box
      className={`grid justify-stretch items-center gap-10 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Typography variant="h6" className={`!font-[700]`}>
        التغطية الطبية
      </Typography>
      <Box className={`grid justify-stretch items-start gap-8 grid-cols-2`}>
        <Input
          formik={formik}
          label={"وثيقة التغطية الطبية"}
          select
          name={"medicalCoverageDoc"}
          options={["male", "female"]}
        />
        <Input
          formik={formik}
          label={"الباقة الحالية "}
          select
          name={"package"}
          options={["male", "female"]}
        />
      </Box>
      <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
        <SubmitButton variant="gradient" loading={false}>
          حفظ
        </SubmitButton>
        <BasicButton
          onClick={() =>
            dispatch({ type: "editEmployeeMedicalCoverageModal", payload: false })
          }
        >
          إلغاء
        </BasicButton>
      </Box>
    </Box>
  );
};

export default EmployeeMedicalCoverageForm;
