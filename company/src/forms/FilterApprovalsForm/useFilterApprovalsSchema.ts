import * as yup from "yup";

const useFilterApprovalsSchema = () => {
  const FilterApprovalsSchema = yup.object({
    members: yup.string(),
    employees: yup.string(),
    coverageDoc: yup.string(),
    status: yup.string(),
    date: yup.string(),
  });

  const FilterApprovalsInitialValues = {
    members: "",
    employees: "",
    coverageDoc: "",
    status: "",
    date: "",
  };

  return { FilterApprovalsSchema, FilterApprovalsInitialValues };
};

export default useFilterApprovalsSchema;
