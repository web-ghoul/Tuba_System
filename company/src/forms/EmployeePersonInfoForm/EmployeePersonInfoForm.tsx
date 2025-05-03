import { Box, Typography } from "@mui/material";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useModals } from "../../contexts/ModalsContext";
import { EmployeePersonInfoFormTypes, FormiksTypes } from "../../types/forms.types";

const EmployeePersonInfoForm = ({ formik }: FormiksTypes<EmployeePersonInfoFormTypes>) => {
  const { dispatch } = useModals();
  return (
    <Box
      className={`grid justify-stretch items-center gap-10 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Typography variant="h6" className={`!font-[700]`}>
        المعلومات الشخصية
      </Typography>
      <Box className={`grid justify-stretch items-start gap-8 grid-cols-2`}>
        <Input formik={formik} label={"الاسم"} name={"name"} />
        <Input
          formik={formik}
          label={"رقم الهوية"}
          type={"password"}
          name={"nationalId"}
        />
        <Input
          formik={formik}
          label={"البريد الإلكتروني"}
          type={"email"}
          name={"email"}
        />
        <Input
          formik={formik}
          label={"الجنس"}
          select
          options={["male", "female"]}
          name={"gender"}
        />
        <Input
          formik={formik}
          label={"تاريخ الميلاد"}
          type={"date"}
          name={"dateOfBirth"}
        />
        <Input
          formik={formik}
          label={"رقم الهاتف"}
          type={"tel"}
          name={"phone"}
        />
        <Input
          formik={formik}
          label={"الجنسية"}
          select
          name={"nationality"}
          options={[""]}
        />
        <Input
          formik={formik}
          label={"الحالة الاجتماعية"}
          select
          name={"status"}
          options={[""]}
        />
      </Box>
      <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
        <SubmitButton variant="gradient" loading={false}>
          حفظ
        </SubmitButton>
        <BasicButton
          onClick={() =>
            dispatch({ type: "editEmployeePersonInfoModal", payload: false })
          }
        >
          إلغاء
        </BasicButton>
      </Box>
    </Box>
  );
};

export default EmployeePersonInfoForm;
