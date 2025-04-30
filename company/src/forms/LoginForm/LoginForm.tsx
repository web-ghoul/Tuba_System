import { Box, Typography } from "@mui/material";
import { LoginFormiksTypes } from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";

const LoginForm = ({ formik }: LoginFormiksTypes) => {
  return (
    <Box
      className={`grid justify-stretch items-center gap-10 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Box className={`grid justify-center items-center gap-4 text-center`}>
        <Typography variant="h3" className={`text-primary !font-[700]`}>
          تسجيل دخول الشركة
        </Typography>
        <Typography variant="subtitle1" className="text-gray-700">
          فضلاً أدخل بياناتك للوصول إلى لوحة التحكم الخاصة بالشركة
        </Typography>
      </Box>
      <Box
        className={`grid justify-stretch items-start gap-8 sm:flex sm:flex-wrap sm:justify-center`}
      >
        <Input
          formik={formik}
          type={"email"}
          name={"usr"}
          label={"البريد الالكترونى"}
        />
        <Input
          formik={formik}
          label={"كلمة المرور"}
          type={"password"}
          name={"pwd"}
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
          تسجيل الدخول
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
