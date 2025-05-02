import {
  AllFormsTypes,
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeePersonInfoFormTypes,
  LoginFormTypes,
  MemberFormTypes,
} from "../types/forms.types";
import useLoginSubmit from "../forms/LoginForm/useLoginSubmit";
import useEmployeePersonInfoSubmit from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSubmit";
import useEmployeeJobInfoSubmit from "../forms/EmployeeJobInfoForm/useEmployeeJobInfoSubmit";
import useEmployeeMedicalCoverageSubmit from "../forms/EmployeeMedicalCoverageForm/useEmployeeMedicalCoverageSubmit";
import useMemberSubmit from "../forms/MemberForm/useMemberSubmit";

const useSubmitFunction = (type: string) => {
  const { login } = useLoginSubmit();
  const { editEmployeePersonInfo } = useEmployeePersonInfoSubmit();
  const { editEmployeeJobInfo } = useEmployeeJobInfoSubmit();
  const { editEmployeeMedicalCoverage } = useEmployeeMedicalCoverageSubmit();
  const { addMember, editMember } = useMemberSubmit();

  const handleSubmit = (values: AllFormsTypes) => {
    switch (type) {
      case "login":
        login(values as LoginFormTypes);
        break;
      case "editEmployeePersonInfo":
        editEmployeePersonInfo(values as EmployeePersonInfoFormTypes);
        break;
      case "editEmployeeJobInfo":
        editEmployeeJobInfo(values as EmployeeJobInfoFormTypes);
        break;
      case "editEmployeeMedicalCoverage":
        editEmployeeMedicalCoverage(values as EmployeeMedicalCoverageFormTypes);
        break;
      case "addMember":
        addMember(values as MemberFormTypes);
        break;
      case "editMember":
        editMember(values as MemberFormTypes);
        break;
      default:
        console.warn("Unknown form type submitted:", type);
        break;
    }
  };

  return { handleSubmit };
};

export default useSubmitFunction;
