import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import Input from '../../components/Input/Input';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { FormsContext } from '../../contexts/FormsContext';
import { ModalsContext } from '../../contexts/ModalsContext';
import { FormiksTypes } from '../../types/forms.types';

const LoginForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleOpenForgotPasswordModal } = useContext(ModalsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Box className={`grid justify-center items-center gap-2 text-center`}>
        <Typography variant="h4" className={`text-primary`}>
          تسجيل دخول الشركة
        </Typography>
        <Typography variant="h6">
          فضلاً أدخل بياناتك للوصول إلى لوحة التحكم الخاصة بالشركة
        </Typography>
      </Box>
      <Box
        className={`grid justify-stretch items-start gap-6 sm:flex sm:flex-wrap sm:justify-center`}
      >
        <Input
          register={register}
          errors={errors}
          type={'email'}
          name={'email'}
          label={'البريد الالكترونى'}
          placeholder={'البريد الالكترونى'}
        />
        <Input
          register={register}
          errors={errors}
          label={'كلمة السر'}
          placeholder={'كلمة السر'}
          type={'password'}
          name={'password'}
          ac={'current-pasword'}
        />
      </Box>
      <Box
        className={`grid justify-stretch items-center gap-2 sm:justify-center`}
      >
        <Button
          className={`!font-[600] hover:!cursor-pointer !p-0 !text-primary !lowercase !w-fit`}
          onClick={handleOpenForgotPasswordModal}
        >
          نسيت كلمة السر ?
        </Button>
        <Box className={`m-auto`}>
          <SubmitButton loading={formsLoading}>تسجيل الدخول</SubmitButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
