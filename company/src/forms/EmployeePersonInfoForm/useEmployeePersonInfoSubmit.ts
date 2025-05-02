import { handleToaster } from '../../functions/handleToaster';
import { handleCatchError } from '../../functions/handleCatchError';
import useAxios from '../../hooks/useAxios';
import { EmployeePersonInfoFormTypes } from '../../types/forms.types';

const useEmployeePersonInfoSubmit = () => {
  const { server } = useAxios();

  const addEmployeePersonInfo = async (values: EmployeePersonInfoFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res)
        handleToaster({ msg: "Add Employee Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  const editEmployeePersonInfo = async (values: EmployeePersonInfoFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res)
        handleToaster({ msg: "Edit Employee Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  return { addEmployeePersonInfo , editEmployeePersonInfo };
};

export default useEmployeePersonInfoSubmit;
