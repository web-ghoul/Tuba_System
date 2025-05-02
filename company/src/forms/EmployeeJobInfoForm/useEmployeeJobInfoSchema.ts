import * as yup from "yup";

const useEmployeeJobInfoSchema = () => {
  const EmployeeJobInfoSchema = yup.object({
    employeeNo: yup.string().required("البريد الالكترونى مطلوب"),
    email: yup
      .string()
      .email("البريد الالكترونى غير صحيح")
      .required("البريد الالكترونى مطلوب"),
    jobTitle: yup.string().required("البريد الالكترونى مطلوب"),
    salary: yup.string().required("كلمة المرور مطلوبة"),
  });

  const EmployeeJobInfoInitialValues = {
    employeeNo: "",
    email: "",
    jobTitle: "",
    salary: "",
  };

  return { EmployeeJobInfoSchema, EmployeeJobInfoInitialValues };
};

export default useEmployeeJobInfoSchema;
