import * as yup from "yup";

const useUpdatePasswordSchema = () => {
  const UpdatePasswordSchema = yup.object({
    oldPassword: yup
      .string()
      .min(8, "كلمة المرور لا تقل عن 8 احرف")
      .required("البريد الالكترونى مطلوب"),
    password: yup
      .string()
      .min(8, "كلمة المرور لا تقل عن 8 احرف")
      .required("كلمة المرور مطلوبة"),
    confirmPassword: yup
      .string()
      .min(8, "كلمة المرور لا تقل عن 8 احرف")
      .required("كلمة المرور مطلوبة"),
  });

  const UpdatePasswordInitialValues = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
  };

  return { UpdatePasswordSchema, UpdatePasswordInitialValues };
};

export default useUpdatePasswordSchema;
