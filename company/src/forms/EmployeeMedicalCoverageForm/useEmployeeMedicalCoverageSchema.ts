import * as yup from "yup";

const useEmployeeMedicalCoverageSchema = () => {
  const EmployeeMedicalCoverageSchema = yup.object({
    package: yup.string().required("البريد الالكترونى مطلوب"),
    medicalCoverageDoc: yup.string().required("البريد الالكترونى مطلوب"),
  });

  const EmployeeMedicalCoverageInitialValues = {
    package: "",
    medicalCoverageDoc: "",
  };

  return { EmployeeMedicalCoverageSchema, EmployeeMedicalCoverageInitialValues };
};

export default useEmployeeMedicalCoverageSchema;
