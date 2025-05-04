import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { SearchNetworksFormTypes } from "../../types/forms.types";

const useSearchNetworksSubmit = () => {
  const { server } = useAxios();

  const searchNetworks = async (values: SearchNetworksFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Search Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };
  return { searchNetworks };
};

export default useSearchNetworksSubmit;
