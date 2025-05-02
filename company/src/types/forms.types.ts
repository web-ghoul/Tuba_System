import { FormikProps } from "formik";

interface FormsTypes {
  type: "login" | "editEmployeePersonInfo";
  index?: number;
}

interface LoginFormTypes  {
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
  values: EmployeePersonInfoFormTypes;
}

type AllFormsTypes = LoginFormTypes | EmployeePersonInfoFormTypes;

type AllFormiksTypes = LoginFormikTypes | EmployeePersonInfoFormikTypes;

interface FormiksTypes<T> {
  formik: FormikProps<T>;
  type?: string;
}

type FormikMap = {
  login: FormikProps<LoginFormTypes>;
  editEmployeePersonInfo: FormikProps<EmployeePersonInfoFormTypes>;
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
};
