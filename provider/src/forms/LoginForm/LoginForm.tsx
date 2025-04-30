import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const LoginForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleOpenForgotPasswordModal } = useContext(ModalsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-10 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Box className={`grid justify-center items-center gap-4 text-center`}>
        <Typography variant="h3" className={`text-primary !font-[700]`}>
          تسجيل دخول مزود الخدمة
        </Typography>
        <Typography variant="subtitle1" className="text-gray-700">
          فضلاً أدخل بياناتك للوصول إلى لوحة التحكم الخاصة بك
        </Typography>
      </Box>
      <Box
        className={`grid justify-stretch items-start gap-8 sm:flex sm:flex-wrap sm:justify-center`}
      >
        <Input
          register={register}
          errors={errors}
          type={"email"}
          name={"usr"}
          label={"البريد الالكترونى"}
        />
        <Input
          register={register}
          errors={errors}
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
          loading={formsLoading}
          className={`transition-all bg-gradient_primary hover:bg-gradient_primary_reverse w-full`}
        >
          تسجيل الدخول
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
