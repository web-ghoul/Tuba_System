import { Box } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";
import {
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeePersonInfoFormTypes,
  FilterApprovalsFormTypes,
  FilterEmployeesFormTypes,
  FilterInvoicesFormTypes,
  FilterProvidersFormTypes,
  FormikMap,
  FormsTypes,
  LoginFormTypes,
  MemberFormTypes,
  SearchNetworksFormTypes,
  UpdatePasswordFormTypes,
} from "../types/forms.types";
import useSubmitForm from "../hooks/useSubmitForm";
import EmployeePersonInfoForm from "./EmployeePersonInfoForm/EmployeePersonInfoForm";
import { FormikProps } from "formik";
import EmployeeJobInfoForm from "./EmployeeJobInfoForm/EmployeeJobInfoForm";
import EmployeeMedicalCoverageForm from "./EmployeeMedicalCoverageForm/EmployeeMedicalCoverageForm";
import MemberForm from "./MemberForm/MemberForm";
import FilterEmployeesForm from "./FilterEmployeesForm/FilterEmployeesForm";
import FilterApprovalsForm from "./FilterApprovalsForm/FilterApprovalsForm";
import FilterProvidersForm from "./FilterProvidersForm/FilterProvidersForm";
import SearchNetworksForm from "./SearchNetworksForm/SearchNetworksForm";
import UpdatePasswordForm from "./UpdatePasswordForm/UpdatePasswordForm";
import FilterInvoicesForm from "./FilterInvoicesForm/FilterInvoicesForm";

const Forms = ({ type }: FormsTypes) => {
  const { formik } = useSubmitForm(type as keyof FormikMap);
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      {/* Authentication */}
      {type === "login" && (
        <LoginForm formik={formik as FormikProps<LoginFormTypes>} type={type} />
      )}
      {type === "updatePassword" && (
        <UpdatePasswordForm
          formik={formik as FormikProps<UpdatePasswordFormTypes>}
          type={type}
        />
      )}
      {/* Authentication */}

      {/* Employee */}
      {(type === "addEmployeePersonInfo" ||
        type === "editEmployeePersonInfo") && (
        <EmployeePersonInfoForm
          formik={formik as FormikProps<EmployeePersonInfoFormTypes>}
          type={type}
        />
      )}
      {(type === "addEmployeeJobInfo" || type === "editEmployeeJobInfo") && (
        <EmployeeJobInfoForm
          formik={formik as FormikProps<EmployeeJobInfoFormTypes>}
          type={type}
        />
      )}
      {(type === "addEmployeeMedicalCoverage" ||
        type === "editEmployeeMedicalCoverage") && (
        <EmployeeMedicalCoverageForm
          formik={formik as FormikProps<EmployeeMedicalCoverageFormTypes>}
          type={type}
        />
      )}
      {type === "filterEmployees" && (
        <FilterEmployeesForm
          formik={formik as FormikProps<FilterEmployeesFormTypes>}
          type={type}
        />
      )}

      {(type === "addMember" || type === "editMember") && (
        <MemberForm
          formik={formik as FormikProps<MemberFormTypes>}
          type={type}
        />
      )}
      {/* Employee */}

      {/* Approvals */}
      {type === "filterApprovals" && (
        <FilterApprovalsForm
          formik={formik as FormikProps<FilterApprovalsFormTypes>}
          type={type}
        />
      )}
      {/* Approvals */}

      {/* Invoices */}
      {type === "filterInvoices" && (
        <FilterInvoicesForm
          formik={formik as FormikProps<FilterInvoicesFormTypes>}
          type={type}
        />
      )}
      {/* Invoices */}

      {/* Networks */}
      {type === "searchNetworks" && (
        <SearchNetworksForm
          formik={formik as FormikProps<SearchNetworksFormTypes>}
          type={type}
        />
      )}
      {type === "filterProviders" && (
        <FilterProvidersForm
          formik={formik as FormikProps<FilterProvidersFormTypes>}
          type={type}
        />
      )}
      {/* Networks */}
    </Box>
  );
};

export default Forms;
