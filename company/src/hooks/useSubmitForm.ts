import { useFormik } from "formik";
import { useMemo } from "react";
import useSubmitFunction from "./useSubmitFunction";
import useLoginSchema from "../forms/LoginForm/useLoginSchema";
import useEmployeePersonInfoSchema from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSchema";
import { FormikMap } from "../types/forms.types";
import useEmployeeJobInfoSchema from "../forms/EmployeeJobInfoForm/useEmployeeJobInfoSchema";
import useEmployeeMedicalCoverageSchema from "../forms/EmployeeMedicalCoverageForm/useEmployeeMedicalCoverageSchema";
import useMemberSchema from "../forms/MemberForm/useMemberSchema";
import useFilterEmployeesSchema from "../forms/FilterEmployeesForm/useFilterEmployeesSchema";
import useFilterApprovalsSchema from "../forms/FilterApprovalsForm/useFilterApprovalsSchema";
import useFilterProvidersSchema from "../forms/FilterProvidersForm/useFilterProvidersSchema";
import useSearchNetworksSchema from "../forms/SearchNetworksForm/useSearchNetworksSchema";
import useUpdatePasswordSchema from "../forms/UpdatePasswordForm/useUpdatePasswordSchema";
import useFilterInvoicesSchema from "../forms/FilterInvoicesForm/useFilterInvoicesSchema";

const useSubmitForm = <T extends keyof FormikMap>(
  type: T
): { formik: FormikMap[T] } => {
  const { handleSubmit } = useSubmitFunction(type);
  const { LoginInitialValues, LoginSchema } = useLoginSchema();
  const { UpdatePasswordInitialValues, UpdatePasswordSchema } =
    useUpdatePasswordSchema();
  const { EmployeePersonInfoInitialValues, EmployeePersonInfoSchema } =
    useEmployeePersonInfoSchema();
  const { EmployeeJobInfoInitialValues, EmployeeJobInfoSchema } =
    useEmployeeJobInfoSchema();
  const {
    EmployeeMedicalCoverageInitialValues,
    EmployeeMedicalCoverageSchema,
  } = useEmployeeMedicalCoverageSchema();
  const { FilterEmployeesInitialValues, FilterEmployeesSchema } =
    useFilterEmployeesSchema();
  const { MemberInitialValues, MemberSchema } = useMemberSchema();
  const { FilterApprovalsInitialValues, FilterApprovalsSchema } =
    useFilterApprovalsSchema();
  const { FilterProvidersInitialValues, FilterProvidersSchema } =
    useFilterProvidersSchema();
  const { FilterInvoicesInitialValues, FilterInvoicesSchema } =
    useFilterInvoicesSchema();
  const { SearchNetworksInitialValues, SearchNetworksSchema } =
    useSearchNetworksSchema();

  const formikConfig = useMemo(() => {
    switch (type) {
      case "login":
        return {
          initialValues: LoginInitialValues,
          validationSchema: LoginSchema,
        };
      case "updatePassword":
        return {
          initialValues: UpdatePasswordInitialValues,
          validationSchema: UpdatePasswordSchema,
        };
      case "addEmployeePersonInfo":
      case "editEmployeePersonInfo":
        return {
          initialValues: EmployeePersonInfoInitialValues,
          validationSchema: EmployeePersonInfoSchema,
        };
      case "addEmployeeJobInfo":
      case "editEmployeeJobInfo":
        return {
          initialValues: EmployeeJobInfoInitialValues,
          validationSchema: EmployeeJobInfoSchema,
        };
      case "addEmployeeMedicalCoverage":
      case "editEmployeeMedicalCoverage":
        return {
          initialValues: EmployeeMedicalCoverageInitialValues,
          validationSchema: EmployeeMedicalCoverageSchema,
        };
      case "filterEmployees":
        return {
          initialValues: FilterEmployeesInitialValues,
          validationSchema: FilterEmployeesSchema,
        };
      case "addMember":
      case "editMember":
        return {
          initialValues: MemberInitialValues,
          validationSchema: MemberSchema,
        };
      case "filterApprovals":
        return {
          initialValues: FilterApprovalsInitialValues,
          validationSchema: FilterApprovalsSchema,
        };
      case "filterProviders":
        return {
          initialValues: FilterProvidersInitialValues,
          validationSchema: FilterProvidersSchema,
        };
      case "filterInvoices":
        return {
          initialValues: FilterInvoicesInitialValues,
          validationSchema: FilterInvoicesSchema,
        };
      case "searchNetworks":
        return {
          initialValues: SearchNetworksInitialValues,
          validationSchema: SearchNetworksSchema,
        };
      default:
        throw new Error(`Unknown form type: ${type}`);
    }
  }, [type]);

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return { formik } as { formik: FormikMap[T] };
};

export default useSubmitForm;
