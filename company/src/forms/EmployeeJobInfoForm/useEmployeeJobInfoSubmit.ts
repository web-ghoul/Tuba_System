import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { EmployeeJobInfoFormTypes } from "../../types/forms.types";
import { useTabs } from "../../contexts/TabsContext";

const useEmployeeJobInfoSubmit = () => {
  const { server } = useAxios();
  const { dispatch } = useTabs();

  const addEmployeeJobInfo = async (values: EmployeeJobInfoFormTypes) => {
    localStorage.setItem(
      `${import.meta.env.VITE_EMPLOYEE_JOB_INFO_STORAGE}`,
      JSON.stringify(values)
    );
    dispatch({ type: "EMPLOYEE", payload: 2 });
  };

  const editEmployeeJobInfo = async (values: EmployeeJobInfoFormTypes) => {
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

  return { addEmployeeJobInfo, editEmployeeJobInfo };
};

export default useEmployeeJobInfoSubmit;
