import {
  AllFormsTypes,
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeePersonInfoFormTypes,
  FilterApprovalsFormTypes,
  FilterEmployeesFormTypes,
  FilterInvoicesFormTypes,
  FilterProvidersFormTypes,
  LoginFormTypes,
  MemberFormTypes,
  SearchNetworksFormTypes,
  UpdatePasswordFormTypes,
} from "../types/forms.types";
import useLoginSubmit from "../forms/LoginForm/useLoginSubmit";
import useEmployeePersonInfoSubmit from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSubmit";
import useEmployeeJobInfoSubmit from "../forms/EmployeeJobInfoForm/useEmployeeJobInfoSubmit";
import useEmployeeMedicalCoverageSubmit from "../forms/EmployeeMedicalCoverageForm/useEmployeeMedicalCoverageSubmit";
import useMemberSubmit from "../forms/MemberForm/useMemberSubmit";
import useFilterEmployeesSubmit from "../forms/FilterEmployeesForm/useFilterEmployeesSubmit";
import useFilterApprovalsSubmit from "../forms/FilterApprovalsForm/useFilterApprovalsSubmit";
import useFilterProvidersSubmit from "../forms/FilterProvidersForm/useFilterProvidersSubmit";
import useSearchNetworksSubmit from "../forms/SearchNetworksForm/useSearchNetworksSubmit";
import useUpdatePasswordSubmit from "../forms/UpdatePasswordForm/useUpdatePasswordSubmit";
import useFilterInvoicesSubmit from "../forms/FilterInvoicesForm/useFilterInvoicesSubmit";

const useSubmitFunction = (type: string) => {
  const { login } = useLoginSubmit();
  const { updatePassword } = useUpdatePasswordSubmit();
  const { addEmployeePersonInfo, editEmployeePersonInfo } =
    useEmployeePersonInfoSubmit();
  const { addEmployeeJobInfo, editEmployeeJobInfo } =
    useEmployeeJobInfoSubmit();
  const { addEmployeeMedicalCoverage, editEmployeeMedicalCoverage } =
    useEmployeeMedicalCoverageSubmit();
  const { filterEmployees } = useFilterEmployeesSubmit();
  const { addMember, editMember } = useMemberSubmit();
  const { filterApprovals } = useFilterApprovalsSubmit();
  const { filterProviders } = useFilterProvidersSubmit();
  const { filterInvoices } = useFilterInvoicesSubmit();
  const { searchNetworks } = useSearchNetworksSubmit();

  const handleSubmit = (values: AllFormsTypes) => {
    switch (type) {
      case "login":
        login(values as LoginFormTypes);
        break;
      case "updatePassword":
        updatePassword(values as UpdatePasswordFormTypes);
        break;
      case "addEmployeePersonInfo":
        addEmployeePersonInfo(values as EmployeePersonInfoFormTypes);
        break;
      case "editEmployeePersonInfo":
        editEmployeePersonInfo(values as EmployeePersonInfoFormTypes);
        break;
      case "addEmployeeJobInfo":
        addEmployeeJobInfo(values as EmployeeJobInfoFormTypes);
        break;
      case "editEmployeeJobInfo":
        editEmployeeJobInfo(values as EmployeeJobInfoFormTypes);
        break;
      case "addEmployeeMedicalCoverage":
        addEmployeeMedicalCoverage(values as EmployeeMedicalCoverageFormTypes);
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
      case "filterProviders":
        filterProviders(values as FilterProvidersFormTypes);
        break;
      case "filterInvoices":
        filterInvoices(values as FilterInvoicesFormTypes);
        break;
      case "searchNetworks":
        searchNetworks(values as SearchNetworksFormTypes);
        break;
      default:
        console.warn("Unknown form type submitted:", type);
        break;
    }
  };

  return { handleSubmit };
};

export default useSubmitFunction;
