import { FormikProps } from "formik";

interface FormsTypes {
  type:
    | "login"
    | "editEmployeePersonInfo"
    | "editEmployeeJobInfo"
    | "editEmployeeMedicalCoverage"
    | "addMember"
    | "editMember"
    | "viewMember";
  index?: number;
}

//Authentication
interface LoginFormTypes {
  usr: string;
  pwd: string;
}

interface LoginFormikTypes {
  touched: LoginFormTypes;
  errors: LoginFormTypes;
  initialValues: LoginFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: LoginFormTypes;
}

//Authentication

//Employee
interface EmployeePersonInfoFormTypes {
  name: string;
  gender: string;
  phone: string;
  nationalId: string;
  nationality: string;
  email: string;
  status: string;
  dateOfBirth: string;
}

interface EmployeePersonInfoFormikTypes {
  touched: EmployeePersonInfoFormTypes;
  errors: EmployeePersonInfoFormTypes;
  initialValues: EmployeePersonInfoFormTypes;
  validationSchema: unknown;
  onSubmit: (values: EmployeePersonInfoFormTypes) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EmployeePersonInfoFormTypes;
}

interface EmployeeJobInfoFormTypes {
  employeeNo: string;
  email: string;
  jobTitle: string;
  salary: string;
}

interface EmployeeJobInfoFormikTypes {
  touched: EmployeeJobInfoFormTypes;
  errors: EmployeeJobInfoFormTypes;
  initialValues: EmployeeJobInfoFormTypes;
  validationSchema: unknown;
  onSubmit: (values: EmployeeJobInfoFormTypes) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EmployeeJobInfoFormTypes;
}

interface EmployeeMedicalCoverageFormTypes {
  medicalCoverageDoc: string;
  package: string;
}

interface EmployeeMedicalCoverageFormikTypes {
  touched: EmployeeMedicalCoverageFormTypes;
  errors: EmployeeMedicalCoverageFormTypes;
  initialValues: EmployeeMedicalCoverageFormTypes;
  validationSchema: unknown;
  onSubmit: (values: EmployeeMedicalCoverageFormTypes) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: EmployeeMedicalCoverageFormTypes;
}

//Employee

interface MemberFormTypes {
  name: string;
  nationality: string;
  nationalNo: string;
  relation: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  coveragePackage: string;
}

interface MemberFormikTypes {
  touched: MemberFormTypes;
  errors: MemberFormTypes;
  initialValues: MemberFormTypes;
  validationSchema: unknown;
  onSubmit: (values: MemberFormTypes) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: MemberFormTypes;
}

type AllFormsTypes =
  | LoginFormTypes
  | EmployeePersonInfoFormTypes
  | EmployeeJobInfoFormTypes
  | EmployeeMedicalCoverageFormTypes
  | MemberFormTypes;

type AllFormiksTypes =
  | LoginFormikTypes
  | EmployeePersonInfoFormikTypes
  | EmployeeJobInfoFormikTypes
  | EmployeeMedicalCoverageFormikTypes
  | MemberFormikTypes;

interface FormiksTypes<T> {
  formik: FormikProps<T>;
  type?: string;
}

type FormikMap = {
  login: FormikProps<LoginFormTypes>;
  editEmployeePersonInfo: FormikProps<EmployeePersonInfoFormTypes>;
  editEmployeeJobInfo: FormikProps<EmployeeJobInfoFormTypes>;
  editEmployeeMedicalCoverage: FormikProps<EmployeeMedicalCoverageFormTypes>;
  addMember: FormikProps<MemberFormTypes>;
  editMember: FormikProps<MemberFormTypes>;
};

interface CatchErrorTypes {
  response: {
    data: {
      message: string;
    };
  };
}

export type {
  AllFormiksTypes,
  AllFormsTypes,
  CatchErrorTypes,
  FormiksTypes,
  FormsTypes,
  LoginFormikTypes,
  LoginFormTypes,
  EmployeePersonInfoFormTypes,
  EmployeePersonInfoFormikTypes,
  FormikMap,
  EmployeeJobInfoFormikTypes,
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeeMedicalCoverageFormikTypes,
  MemberFormTypes,
  MemberFormikTypes,
};
