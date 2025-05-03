import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { FilterApprovalsFormTypes } from "../../types/forms.types";

const useFilterApprovalsSubmit = () => {
  const { server } = useAxios();

  const filterApprovals = async (values: FilterApprovalsFormTypes) => {
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

  const filterApprovalsLimits = async (limit: number) => {
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

  return { filterApprovals, filterApprovalsLimits };
};

export default useFilterApprovalsSubmit;
