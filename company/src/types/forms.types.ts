import { FormikProps } from "formik";

interface FormsTypes {
  type:
    | "login"
    | "updatePassword"
    | "editEmployeePersonInfo"
    | "editEmployeeJobInfo"
    | "editEmployeeMedicalCoverage"
    | "filterEmployees"
    | "addMember"
    | "editMember"
    | "filterApprovals"
    | "searchNetworks"
    | "filterProviders";
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

interface UpdatePasswordFormTypes {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

interface UpdatePasswordFormikTypes {
  touched: UpdatePasswordFormTypes;
  errors: UpdatePasswordFormTypes;
  initialValues: UpdatePasswordFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: UpdatePasswordFormTypes;
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

interface FilterEmployeesFormTypes {
  name: string;
  nationality: string;
  gender: string;
}

interface FilterEmployeesFormikTypes {
  touched: FilterEmployeesFormTypes;
  errors: FilterEmployeesFormTypes;
  initialValues: FilterEmployeesFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: FilterEmployeesFormTypes;
}

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

//Employee

//Approvals
interface FilterApprovalsFormTypes {
  members: string;
  employees: string;
  coverageDoc: string;
  status: string;
  date: string;
}

interface FilterApprovalsFormikTypes {
  touched: FilterApprovalsFormTypes;
  errors: FilterApprovalsFormTypes;
  initialValues: FilterApprovalsFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: FilterApprovalsFormTypes;
}

//Approvals

//Networks
interface SearchNetworksFormTypes {
  searchNetworks: string;
}

interface SearchNetworksFormikTypes {
  touched: SearchNetworksFormTypes;
  errors: SearchNetworksFormTypes;
  initialValues: SearchNetworksFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: SearchNetworksFormTypes;
}

interface FilterProvidersFormTypes {
  name: string;
  type: string;
  provider: string;
  networkLevel: string;
}

interface FilterProvidersFormikTypes {
  touched: FilterProvidersFormTypes;
  errors: FilterProvidersFormTypes;
  initialValues: FilterProvidersFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: FilterProvidersFormTypes;
}

//Networks

type AllFormsTypes =
  | LoginFormTypes
  | UpdatePasswordFormTypes
  | EmployeePersonInfoFormTypes
  | EmployeeJobInfoFormTypes
  | EmployeeMedicalCoverageFormTypes
  | FilterEmployeesFormTypes
  | MemberFormTypes
  | FilterApprovalsFormTypes
  | SearchNetworksFormTypes
  | FilterProvidersFormTypes;

type AllFormiksTypes =
  | LoginFormikTypes
  | UpdatePasswordFormikTypes
  | EmployeePersonInfoFormikTypes
  | EmployeeJobInfoFormikTypes
  | EmployeeMedicalCoverageFormikTypes
  | MemberFormikTypes
  | FilterEmployeesFormikTypes
  | FilterApprovalsFormikTypes
  | SearchNetworksFormikTypes
  | FilterProvidersFormikTypes;

interface FormiksTypes<T> {
  formik: FormikProps<T>;
  type?: string;
}

type FormikMap = {
  login: FormikProps<LoginFormTypes>;
  updatePassword: FormikProps<UpdatePasswordFormTypes>;
  editEmployeePersonInfo: FormikProps<EmployeePersonInfoFormTypes>;
  editEmployeeJobInfo: FormikProps<EmployeeJobInfoFormTypes>;
  editEmployeeMedicalCoverage: FormikProps<EmployeeMedicalCoverageFormTypes>;
  filterEmployees: FormikProps<FilterEmployeesFormTypes>;
  addMember: FormikProps<MemberFormTypes>;
  editMember: FormikProps<MemberFormTypes>;
  filterApprovals: FormikProps<FilterApprovalsFormTypes>;
  filterProviders: FormikProps<FilterProvidersFormTypes>;
  searchNetworks: FormikProps<SearchNetworksFormTypes>;
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
  UpdatePasswordFormTypes,
  UpdatePasswordFormikTypes,
  EmployeePersonInfoFormTypes,
  EmployeePersonInfoFormikTypes,
  FormikMap,
  EmployeeJobInfoFormikTypes,
  EmployeeJobInfoFormTypes,
  EmployeeMedicalCoverageFormTypes,
  EmployeeMedicalCoverageFormikTypes,
  MemberFormTypes,
  MemberFormikTypes,
  FilterEmployeesFormTypes,
  FilterEmployeesFormikTypes,
  FilterApprovalsFormTypes,
  FilterApprovalsFormikTypes,
  SearchNetworksFormTypes,
  SearchNetworksFormikTypes,
  FilterProvidersFormTypes,
  FilterProvidersFormikTypes,
};
