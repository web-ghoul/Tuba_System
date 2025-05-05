import * as yup from "yup";

const useFilterInvoicesSchema = () => {
  const FilterInvoicesSchema = yup.object({
    name: yup.string(),
    nationalId: yup.string(),
    status: yup.string(),
    date: yup.string(),
  });

  const FilterInvoicesInitialValues = {
    name: "",
    nationalId: "",
    status: "",
    date: "",
  };

  return { FilterInvoicesSchema, FilterInvoicesInitialValues };
};

export default useFilterInvoicesSchema;
