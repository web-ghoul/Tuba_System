import * as yup from "yup";

const useSearchNetworksSchema = () => {
  const SearchNetworksSchema = yup.object({
    searchNetworks: yup.string(),
  });

  const SearchNetworksInitialValues = {
    searchNetworks: "",
  };

  return { SearchNetworksSchema, SearchNetworksInitialValues };
};

export default useSearchNetworksSchema;
