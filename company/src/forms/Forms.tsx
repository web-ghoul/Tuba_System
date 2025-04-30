import { Box } from "@mui/material";
import DeleteForm from "./DeleteForm/DeleteForm";
import LoginForm from "./LoginForm/LoginForm";
import { FormsTypes } from "../types/forms.types";
import useSubmitForm from "../hooks/useSubmitForm";

const Forms = ({ type }: FormsTypes) => {
  const { formik } = useSubmitForm(type);

  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      {/* Delete */}
      {type === "delete" && <DeleteForm />}
      {/* Delete */}

      {/* Authentication */}
      {type === "login" && <LoginForm formik={formik} type={type} />}
      {/* Authentication */}
    </Box>
  );
};

export default Forms;
