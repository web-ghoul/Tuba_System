import * as yup from "yup";

const useLoginSchema = () => {
  const LoginSchema = yup.object({
    usr: yup
      .string()
      .email("البريد الالكترونى غير صحيح")
      .required("البريد الالكترونى مطلوب"),
    pwd: yup
      .string()
      .min(8, "كلمة المرور لا تقل عن 8 احرف")
      .required("كلمة المرور مطلوبة"),
  });

  const LoginInitialValues = {
    usr: "",
    pwd: "",
  };

  return { LoginSchema, LoginInitialValues };
};

export default useLoginSchema;
