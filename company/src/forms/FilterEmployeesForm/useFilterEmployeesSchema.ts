import * as yup from "yup";

const useFilterEmployeesSchema = () => {
  const FilterEmployeesSchema = yup.object({
    name: yup.string(),
    nationality: yup.string(),
    gender: yup.string(),
  });

  const FilterEmployeesInitialValues = {
    name: "",
    nationality: "",
    gender: "",
  };

  return { FilterEmployeesSchema, FilterEmployeesInitialValues };
};

export default useFilterEmployeesSchema;
