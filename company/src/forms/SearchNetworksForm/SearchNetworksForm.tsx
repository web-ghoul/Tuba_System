import { FormiksTypes, SearchNetworksFormTypes } from "../../types/forms.types";
import Input from "../../components/Input/Input";

const SearchNetworksForm = ({ formik }: FormiksTypes<SearchNetworksFormTypes>) => {
  return (
    <Input
      formik={formik}
      placeholder={"بحث..."}
      type={"search"}
      name={"searchNetworks"}
    />
  );
};

export default SearchNetworksForm;
