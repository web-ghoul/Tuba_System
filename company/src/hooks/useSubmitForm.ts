import { useFormik } from "formik";
import { useMemo } from "react";
import useSubmitFunction from "./useSubmitFunction";
import useLoginSchema from "../forms/LoginForm/useLoginSchema";
import useEmployeePersonInfoSchema from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSchema";
import { FormikMap } from "../types/forms.types";
import useEmployeeJobInfoSchema from "../forms/EmployeeJobInfoForm/useEmployeeJobInfoSchema";
import useEmployeeMedicalCoverageSchema from "../forms/EmployeeMedicalCoverageForm/useEmployeeMedicalCoverageSchema";
import useMemberSchema from "../forms/MemberForm/useMemberSchema";

const useSubmitForm = <T extends keyof FormikMap>(
  type: T
): { formik: FormikMap[T] } => {
  const { handleSubmit } = useSubmitFunction(type);
  const { LoginInitialValues, LoginSchema } = useLoginSchema();
  const { EmployeePersonInfoInitialValues, EmployeePersonInfoSchema } =
    useEmployeePersonInfoSchema();
  const { EmployeeJobInfoInitialValues, EmployeeJobInfoSchema } =
    useEmployeeJobInfoSchema();
  const {
    EmployeeMedicalCoverageInitialValues,
    EmployeeMedicalCoverageSchema,
  } = useEmployeeMedicalCoverageSchema();
  const { MemberInitialValues, MemberSchema } = useMemberSchema();

  const formikConfig = useMemo(() => {
    switch (type) {
      case "login":
        return {
          initialValues: LoginInitialValues,
          validationSchema: LoginSchema,
        };
      case "editEmployeePersonInfo":
        return {
          initialValues: EmployeePersonInfoInitialValues,
          validationSchema: EmployeePersonInfoSchema,
        };
      case "editEmployeeJobInfo":
        return {
          initialValues: EmployeeJobInfoInitialValues,
          validationSchema: EmployeeJobInfoSchema,
        };
      case "editEmployeeMedicalCoverage":
        return {
          initialValues: EmployeeMedicalCoverageInitialValues,
          validationSchema: EmployeeMedicalCoverageSchema,
        };
      case "addMember":
      case "editMember":
        return {
          initialValues: MemberInitialValues,
          validationSchema: MemberSchema,
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
