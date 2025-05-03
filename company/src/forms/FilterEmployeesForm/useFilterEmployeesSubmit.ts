import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { FilterEmployeesFormTypes } from "../../types/forms.types";

const useFilterEmployeesSubmit = () => {
  const { server } = useAxios();

  const filterEmployees = async (values: FilterEmployeesFormTypes) => {
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

  return { filterEmployees };
};

export default useFilterEmployeesSubmit;
