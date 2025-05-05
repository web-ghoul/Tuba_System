import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { EmployeePersonInfoFormTypes } from "../../types/forms.types";
import { useTabs } from "../../contexts/TabsContext";

const useEmployeePersonInfoSubmit = () => {
  const { server } = useAxios();
  const { dispatch } = useTabs();

  const addEmployeePersonInfo = async (values: EmployeePersonInfoFormTypes) => {
    localStorage.setItem(
      `${import.meta.env.VITE_EMPLOYEE_PERSONAL_INFO_STORAGE}`,
      JSON.stringify(values)
    );
    dispatch({ type: "EMPLOYEE", payload: 1 });
  };

  const editEmployeePersonInfo = async (
    values: EmployeePersonInfoFormTypes
  ) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Edit Employee Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  return { addEmployeePersonInfo, editEmployeePersonInfo };
};

export default useEmployeePersonInfoSubmit;
