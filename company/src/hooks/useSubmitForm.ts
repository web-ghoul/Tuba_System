import { useFormik } from "formik";
import { useMemo } from "react";
import useSubmitFunction from "./useSubmitFunction";
import useLoginSchema from "../forms/LoginForm/useLoginSchema";
import useEmployeePersonInfoSchema from "../forms/EmployeePersonInfoForm/useEmployeePersonInfoSchema";
import { FormikMap } from "../types/forms.types";

const useSubmitForm = <T extends keyof FormikMap>(
  type: T
): { formik: FormikMap[T] } => {
  const { handleSubmit } = useSubmitFunction(type);
  const { LoginInitialValues, LoginSchema } = useLoginSchema();
  const { EmployeePersonInfoInitialValues, EmployeePersonInfoSchema } =
    useEmployeePersonInfoSchema();

  const formikConfig = useMemo(() => {
    switch (type) {
      case "editEmployeePersonInfo":
        return {
          initialValues: EmployeePersonInfoInitialValues,
          validationSchema: EmployeePersonInfoSchema,
        };
      case "login":
        return {
          initialValues: LoginInitialValues,
          validationSchema: LoginSchema,
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
