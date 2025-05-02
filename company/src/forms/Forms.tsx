import { Box } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";
import {
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeePersonInfoFormTypes,
  FormikMap,
  FormsTypes,
  LoginFormTypes,
  MemberFormTypes,
} from "../types/forms.types";
import useSubmitForm from "../hooks/useSubmitForm";
import EmployeePersonInfoForm from "./EmployeePersonInfoForm/EmployeePersonInfoForm";
import { FormikProps } from "formik";
import EmployeeJobInfoForm from "./EmployeeJobInfoForm/EmployeeJobInfoForm";
import EmployeeMedicalCoverageForm from "./EmployeeMedicalCoverageForm/EmployeeMedicalCoverageForm";
import MemberForm from "./MemberForm/MemberForm";

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
        <EmployeePersonInfoForm
          formik={formik as FormikProps<EmployeePersonInfoFormTypes>}
          type={type}
        />
      )}
      {type === "editEmployeeJobInfo" && (
        <EmployeeJobInfoForm
          formik={formik as FormikProps<EmployeeJobInfoFormTypes>}
          type={type}
        />
      )}
      {type === "editEmployeeMedicalCoverage" && (
        <EmployeeMedicalCoverageForm
          formik={formik as FormikProps<EmployeeMedicalCoverageFormTypes>}
          type={type}
        />
      )}
      {/* Employee */}

      {/* Member */}
      {(type === "addMember" || type === "editMember") && (
        <MemberForm
          formik={formik as FormikProps<MemberFormTypes>}
          type={type}
        />
      )}
      {/* Member */}
    </Box>
  );
};

export default Forms;
