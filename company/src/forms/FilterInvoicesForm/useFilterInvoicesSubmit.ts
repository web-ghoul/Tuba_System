import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { FilterInvoicesFormTypes } from "../../types/forms.types";

const useFilterInvoicesSubmit = () => {
  const { server } = useAxios();

  const filterInvoices = async (values: FilterInvoicesFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Login Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  const filterInvoicesLimits = async (limit: number) => {
    await server
      .post(`/method/login_password`, limit)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Login Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  return { filterInvoices, filterInvoicesLimits };
};

export default useFilterInvoicesSubmit;
