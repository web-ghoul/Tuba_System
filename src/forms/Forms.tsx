import { Box } from '@mui/material';
import useSubmitForm from '../hooks/useSubmitForm';
import { FormsTypes } from '../types/forms.types';
import DeleteForm from './DeleteForm/DeleteForm';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import LoginForm from './LoginForm/LoginForm';
import OTPForm from './OTPForm/OTPForm';
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm';

const Forms = ({ type }: FormsTypes) => {
  const { register, handleSubmitForm, errors, setValue, getValues } =
    useSubmitForm(type);

  return (
    <Box component={'form'} onSubmit={handleSubmitForm}>
      {/* Delete */}
      {type === 'delete' && <DeleteForm />}
      {/* Delete */}

      {/* Authentication */}
      {type === 'login' && (
        <LoginForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === 'resetPassword' && (
        <ResetPasswordForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === 'forgotPassword' && (
        <ForgotPasswordForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {type === 'otp' && (
        <OTPForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Authentication */}
    </Box>
  );
};

export default Forms;
