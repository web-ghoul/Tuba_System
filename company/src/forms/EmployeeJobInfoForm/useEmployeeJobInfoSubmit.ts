import { handleToaster } from '../../functions/handleToaster';
import { handleCatchError } from '../../functions/handleCatchError';
import useAxios from '../../hooks/useAxios';
import { EmployeeJobInfoFormTypes } from '../../types/forms.types';

const useEmployeeJobInfoSubmit = () => {
  const { server } = useAxios();

  const addEmployeeJobInfo = async (values: EmployeeJobInfoFormTypes) => {
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

  const editEmployeeJobInfo = async (values: EmployeeJobInfoFormTypes) => {
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

  return { addEmployeeJobInfo , editEmployeeJobInfo };
};

export default useEmployeeJobInfoSubmit;
