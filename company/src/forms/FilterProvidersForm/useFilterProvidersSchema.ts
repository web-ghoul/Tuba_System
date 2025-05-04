import * as yup from "yup";

const useFilterProvidersSchema = () => {
  const FilterProvidersSchema = yup.object({
    name: yup.string(),
    type: yup.string(),
    provider: yup.string(),
    networkLevel: yup.string(),
  });

  const FilterProvidersInitialValues = {
    name: "",
    type: "",
    provider: "",
    networkLevel: "",
  };

  return { FilterProvidersSchema, FilterProvidersInitialValues };
};

export default useFilterProvidersSchema;
