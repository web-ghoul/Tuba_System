import { FormikProps } from "formik";

interface FormsTypes {
  type: string;
  index?: number;
}

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

interface DeleteFormTypes {
  type: string;
}

interface DeleteFormikTypes {
  touched: DeleteFormTypes;
  errors: DeleteFormTypes;
  initialValues: DeleteFormTypes;
  validationSchema: unknown;
  onSubmit: (values: unknown) => void;
  handleChange: (event: unknown) => void;
  handleBlur: (event: unknown) => void;
  values: DeleteFormTypes;
}

type AllFormsTypes = LoginFormTypes | DeleteFormTypes;

type AllFormiksTypes = LoginFormikTypes | DeleteFormikTypes;

interface FormiksTypes {
  formik: FormikProps<AllFormiksTypes>;
  type?: string;
}

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
  DeleteFormikTypes,
  DeleteFormTypes,
  FormiksTypes,
  FormsTypes,
  LoginFormikTypes,
  LoginFormTypes,
};
