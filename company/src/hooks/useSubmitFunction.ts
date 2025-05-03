import {
  AllFormsTypes,
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeePersonInfoFormTypes,
  FilterApprovalsFormTypes,
  FilterEmployeesFormTypes,
  LoginFormTypes,
  MemberFormTypes,
} from "../types/forms.types";
import useLoginSubmit from "../forms/LoginForm/useLoginSubmit";
import useEmployeePersonInfoSubmit from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSubmit";
import useEmployeeJobInfoSubmit from "../forms/EmployeeJobInfoForm/useEmployeeJobInfoSubmit";
import useEmployeeMedicalCoverageSubmit from "../forms/EmployeeMedicalCoverageForm/useEmployeeMedicalCoverageSubmit";
import useMemberSubmit from "../forms/MemberForm/useMemberSubmit";
import useFilterEmployeesSubmit from "../forms/FilterEmployeesForm/useFilterEmployeesSubmit";
import useFilterApprovalsSubmit from "../forms/FilterApprovalsForm/useFilterApprovalsSubmit";

const useSubmitFunction = (type: string) => {
  const { login } = useLoginSubmit();
  const { editEmployeePersonInfo } = useEmployeePersonInfoSubmit();
  const { editEmployeeJobInfo } = useEmployeeJobInfoSubmit();
  const { editEmployeeMedicalCoverage } = useEmployeeMedicalCoverageSubmit();
  const { filterEmployees } = useFilterEmployeesSubmit();
  const { addMember, editMember } = useMemberSubmit();
  const { filterApprovals } = useFilterApprovalsSubmit();

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
      case "filterEmployees":
        filterEmployees(values as FilterEmployeesFormTypes);
        break;
      case "addMember":
        addMember(values as MemberFormTypes);
        break;
      case "editMember":
        editMember(values as MemberFormTypes);
        break;
      case "filterApprovals":
        filterApprovals(values as FilterApprovalsFormTypes);
        break;
      default:
        console.warn("Unknown form type submitted:", type);
        break;
    }
  };

  return { handleSubmit };
};

export default useSubmitFunction;
