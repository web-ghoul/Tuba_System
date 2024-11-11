import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

interface FormsTypes {
  type: string;
  index?: number;
  tType?: string;
}

//Login
interface LoginFormTypes {
  usr: string;
  pwd: string;
}
//Login

//Reset Password
interface ResetPasswordFormTypes {
  otp: string;
  password: string;
  confirmPassword: string;
}
//Reset Password

//Forgot Password
interface ForgotPasswordFormTypes {
  email: string;
}
//Forgot Password

//OTP
interface OTPFormTypes {
  otp: string;
}
//OTP

//Delete
type DeleteFormTypes = object;
//Delete

type AllFormsTypes =
  | LoginFormTypes
  | ResetPasswordFormTypes
  | ForgotPasswordFormTypes
  | DeleteFormTypes
  | OTPFormTypes;

interface FormiksTypes {
  register: UseFormRegister<AllFormsTypes>;
  errors: FieldErrors<AllFormsTypes>;
  setValue: UseFormSetValue<AllFormsTypes>;
  getValues: UseFormGetValues<AllFormsTypes>;
  type?: string;
  tType?: string;
}

interface CatchErrorTypes {
  response: {
    data: {
      message: string;
    };
  };
}

export type {
  AllFormsTypes,
  CatchErrorTypes,
  ForgotPasswordFormTypes,
  FormiksTypes,
  FormsTypes,
  LoginFormTypes,
  OTPFormTypes,
  ResetPasswordFormTypes,
};
