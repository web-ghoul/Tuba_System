import useDeleteSubmit from '../forms/DeleteForm/useDeleteSubmit';
import useForgotPasswordSubmit from '../forms/ForgotPasswordForm/useForgotPasswordSubmit';
import useLoginSubmit from '../forms/LoginForm/useLoginSubmit';
import useOTPSubmit from '../forms/OTPForm/useOTPSubmit';
import useResetPasswordSubmit from '../forms/ResetPasswordForm/useResetPasswordSubmit';
import {
  AllFormsTypes,
  ForgotPasswordFormTypes,
  LoginFormTypes,
  OTPFormTypes,
  ResetPasswordFormTypes,
} from '../types/forms.types';

const useSubmitFunction = (type: string) => {
  const { login } = useLoginSubmit();
  const { forgotPassword } = useForgotPasswordSubmit();
  const { resetPassword } = useResetPasswordSubmit();
  const { OTP } = useOTPSubmit();
  const { handleDelete } = useDeleteSubmit();

  const submitFunction = (values: AllFormsTypes | unknown) => {
    switch (type) {
      case 'forgotPassword':
        forgotPassword(values as ForgotPasswordFormTypes);
        break;
      case 'otp':
        OTP(values as OTPFormTypes);
        break;
      case 'resetPassword':
        resetPassword(values as ResetPasswordFormTypes);
        break;
      case 'login':
        login(values as LoginFormTypes);
        break;
      case 'delete':
        handleDelete();
        break;
      default:
        return () => {};
    }
  };

  return { submitFunction };
};

export default useSubmitFunction;
