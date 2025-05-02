import { handleToaster } from '../../functions/handleToaster';
import { handleCatchError } from '../../functions/handleCatchError';
import useAxios from '../../hooks/useAxios';
import { EmployeeMedicalCoverageFormTypes } from '../../types/forms.types';

const useEmployeeMedicalCoverageSubmit = () => {
  const { server } = useAxios();

  const addEmployeeMedicalCoverage = async (values: EmployeeMedicalCoverageFormTypes) => {
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

  const editEmployeeMedicalCoverage = async (values: EmployeeMedicalCoverageFormTypes) => {
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

  return { addEmployeeMedicalCoverage , editEmployeeMedicalCoverage };
};

export default useEmployeeMedicalCoverageSubmit;
