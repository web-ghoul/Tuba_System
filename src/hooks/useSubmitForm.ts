import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';
import useDeleteSchema from '../forms/DeleteForm/useDeleteSchema';
import useForgotPasswordSchema from '../forms/ForgotPasswordForm/useForgotPasswordSchema';
import useLoginSchema from '../forms/LoginForm/useLoginSchema';
import useOTPSchema from '../forms/OTPForm/useOTPSchema';
import useResetPasswordSchema from '../forms/ResetPasswordForm/useResetPasswordSchema';
import { AllFormsTypes } from '../types/forms.types';
import useSubmitFunction from './useSubmitFunction';

const useSubmitForm = (type: string) => {
  const { submitFunction } = useSubmitFunction(type);
  const { LoginSchema, LoginInitialValues } = useLoginSchema();
  const { ForgotPasswordSchema, ForgotPasswordInitialValues } =
    useForgotPasswordSchema();
  const { OTPSchema, OTPInitialValues } = useOTPSchema();
  const { ResetPasswordSchema, ResetPasswordInitialValues } =
    useResetPasswordSchema();
  const { DeleteSchema, DeleteInitialValues } = useDeleteSchema();

  const schemas: { [key: string]: ObjectSchema<AllFormsTypes> } = {
    //Authentication
    login: LoginSchema,
    otp: OTPSchema,
    forgotPassword: ForgotPasswordSchema,
    resetPassword: ResetPasswordSchema,
    //Authentication

    //Delete
    delete: DeleteSchema,
    //Delete
  };

  const initialValues: { [key: string]: AllFormsTypes } = {
    //Authentication
    login: LoginInitialValues,
    otp: OTPInitialValues,
    forgotPassword: ForgotPasswordInitialValues,
    resetPassword: ResetPasswordInitialValues,
    //Authentication

    //Delete
    delete: DeleteInitialValues,
    //Delete
  };

  const chosenSchema = schemas[type];

  const chosenInitialValues = initialValues[type];

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(chosenSchema),
    defaultValues: chosenInitialValues,
  });

  return {
    register,
    errors,
    setValue,
    getValues,
    handleSubmitForm: handleSubmit(submitFunction),
  };
};

export default useSubmitForm;
