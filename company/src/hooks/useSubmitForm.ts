import { FormikProps, useFormik } from "formik";
import { useMemo } from "react";
import useDeleteSchema from "../forms/DeleteForm/useDeleteSchema";
import LoginSchema from "../forms/LoginForm/useLoginSchema";
import LoginInitailValues from "../forms/LoginForm/useLoginSchema";
import useSubmitFunction from "./useSubmitFunction";
import {
  AllFormiksTypes,
  AllFormsTypes,
  DeleteFormikTypes,
  DeleteFormTypes,
  LoginFormikTypes,
  LoginFormTypes,
} from "../types/forms.types";

const useSubmitForm = (type: string) => {
  const { handleSubmit } = useSubmitFunction(type);
  const { DeleteInitialValues, DeleteSchema } = useDeleteSchema();

  const chosenFormik = useMemo(
    () => (): AllFormiksTypes => {
      switch (type) {
        case "login":
          return {
            initialValues: LoginInitailValues,
            validationSchema: LoginSchema,
            onSubmit: (values: LoginFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as LoginFormikTypes;
        default:
          return {
            initialValues: DeleteInitialValues,
            validationSchema: DeleteSchema,
            onSubmit: (values: DeleteFormTypes) => {
              handleSubmit(values);
            },
          } as unknown as DeleteFormikTypes;
      }
    },
    [DeleteInitialValues, DeleteSchema, handleSubmit, type]
  );

  return {
    formik: useFormik<AllFormsTypes>(
      chosenFormik()
    ) as FormikProps<AllFormsTypes>,
  };
};

export default useSubmitForm;
