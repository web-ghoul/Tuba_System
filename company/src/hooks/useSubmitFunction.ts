import {
  AllFormsTypes,
  EmployeePersonInfoFormTypes,
  LoginFormTypes,
} from "../types/forms.types";
import useLoginSubmit from "../forms/LoginForm/useLoginSubmit";
import useEmployeePersonInfoSubmit from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSubmit";

const useSubmitFunction = (type: string) => {
  const { login } = useLoginSubmit();
  const { editEmployeePersonInfo } = useEmployeePersonInfoSubmit();

  const handleSubmit = (values: AllFormsTypes) => {
    switch (type) {
      case "login":
        login(values as LoginFormTypes);
        break;
      case "editEmployee":
        editEmployeePersonInfo(values as EmployeePersonInfoFormTypes);
        break;
      default:
        console.warn("Unknown form type submitted:", type);
        break;
    }
  };

  return { handleSubmit };
};

export default useSubmitFunction;
