import { Box } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";
import { FormikMap, FormsTypes, LoginFormTypes } from "../types/forms.types";
import useSubmitForm from "../hooks/useSubmitForm";
import EmployeePersonInfoForm from "./EmployeePersonInfoForm/EmployeePersonInfoForm";
import { FormikProps } from "formik";

const Forms = ({ type }: FormsTypes) => {
  const { formik } = useSubmitForm(type as keyof FormikMap);

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      {/* Authentication */}
      {type === "login" && (
        <LoginForm formik={formik as FormikProps<LoginFormTypes>} type={type} />
      )}
      {/* Authentication */}

      {/* Employee */}
      {type === "editEmployeePersonInfo" && (
        <EmployeePersonInfoForm formik={formik} type={type} />
      )}
      {/* Employee */}
    </Box>
  );
};

export default Forms;
