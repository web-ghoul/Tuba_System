import { Box, Typography } from "@mui/material";
import { FormiksTypes, UpdatePasswordFormTypes } from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";

const UpdatePasswordForm = ({
  formik,
}: FormiksTypes<UpdatePasswordFormTypes>) => {
  return (
    <Box
      className={`grid justify-stretch items-center gap-10 md:gap-6 sm:gap-4 sm:justify-center max-w-[30vw] m-auto`}
    >
      <Box className={`grid justify-center items-center gap-4 text-center`}>
        <Logo theme="dark" className="w-[200px] m-auto" />
        <Typography variant="subtitle1" className="text-[#121212] !font-[600]">
          مرحبًا بك في طوبي! لأمان حسابك، يُرجى تحديث كلمة المرور الخاصة بك قبل
          المتابعة.
        </Typography>
      </Box>
      <Box
        className={`grid justify-stretch items-start gap-8 sm:flex sm:flex-wrap sm:justify-center`}
      >
        <Input
          formik={formik}
          label={"كلمة المرور المؤقتة"}
          type={"password"}
          name={"oldPassword"}
          ac={"current-pasword"}
        />
        <Input
          formik={formik}
          label={"كلمة المرور الجديدة"}
          type={"password"}
          name={"password"}
          ac={"current-pasword"}
        />
        <Input
          formik={formik}
          label={"تأكيد كلمة المرور الجديدة"}
          type={"password"}
          name={"confirmPassword"}
          ac={"current-pasword"}
        />
      </Box>
      <Box
        className={`grid justify-stretch items-center gap-2 sm:justify-center`}
      >
        <SubmitButton
          loading={false}
          className={`transition-all bg-gradient_primary hover:bg-gradient_primary_reverse w-full`}
        >
          تحديث كلمة المرور
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default UpdatePasswordForm;
