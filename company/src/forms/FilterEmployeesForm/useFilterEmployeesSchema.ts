import * as yup from "yup";

const useFilterEmployeesSchema = () => {
  const FilterEmployeesSchema = yup.object({
    name: yup.string().required("البريد الالكترونى مطلوب"),
    nationality: yup.string().required("كلمة المرور مطلوبة"),
    gender: yup.string().required("كلمة المرور مطلوبة"),
  });

  const FilterEmployeesInitialValues = {
    name: "",
    nationality: "",
    gender: "",
  };

  return { FilterEmployeesSchema, FilterEmployeesInitialValues };
};

export default useFilterEmployeesSchema;
