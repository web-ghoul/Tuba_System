import * as yup from "yup";

const useLoginSchema = () => {
  const LoginSchema = yup.object({
    usr: yup
      .string()
      .email("البريد الالكترونى غير صحيح")
      .required("البريد الالكترونى مطلوب"),
    pwd: yup
      .string()
      .min(7, "كلمة المرور لا تقل عن 7 احرف")
      .required("كلمة المرور مطلوبة"),
  });

  const LoginInitialValues = {
    usr: "",
    pwd: "",
  };

  return { LoginSchema, LoginInitialValues };
};

export default useLoginSchema;
