import * as yup from "yup";

const useEmployeePersonInfoSchema = () => {
  const EmployeePersonInfoSchema = yup.object({
    name: yup.string().required("البريد الالكترونى مطلوب"),
    nationalId: yup.string().required("البريد الالكترونى مطلوب"),
    phone: yup.string().required("البريد الالكترونى مطلوب"),
    gender: yup.string().required("البريد الالكترونى مطلوب"),
    email: yup
      .string()
      .email("البريد الالكترونى غير صحيح")
      .required("البريد الالكترونى مطلوب"),
    dateOfBirth: yup.string().required("البريد الالكترونى مطلوب"),
    nationality: yup.string().required("كلمة المرور مطلوبة"),
    status: yup.string().required("كلمة المرور مطلوبة"),
  });

  const EmployeePersonInfoInitialValues = {
    name: "",
    nationalId: "",
    phone: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    nationality: "",
    status: "",
  };

  return { EmployeePersonInfoSchema, EmployeePersonInfoInitialValues };
};

export default useEmployeePersonInfoSchema;
