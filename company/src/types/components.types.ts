import { ReactNode } from "react";

interface LogoTypes {
  color?: string;
  noTitle?: boolean;
  handling?: () => void;
}

interface InputTypes {
  name: string;
  label?: string;
  type?: string;
  select?: boolean;
  options?: Array<string>;
  values?: string[];
  ac?: string;
  value?: string;
  textarea?: boolean;
  disabled?: boolean;
  labeled?: string;
  labeledColor?: string;
  change?: (value: string) => void;
}

interface ImageBoxTypes {
  className?: string;
  lazy?: boolean;
  src: string;
  alt?: string;
  children?: ReactNode;
  variant?: string;
}

interface ButtonTypes {
  icon?: ReactNode;
  title?: string;
  bg?: string;
  variant?: string;
  type?: "button" | "submit";
  handling?: () => void;
  loading?: boolean;
}

interface SubmitButtonTypes {
  loading: boolean;
  children: ReactNode;
  variant?: string;
  className?: string;
  handling?: () => void;
}

interface ProfileTitleTypes {
  title: string;
}

interface ProfileAvatarTypes {
  image: string;
}

interface CounterCardTypes {
  icon: ReactNode;
  number: string;
  unit: string;
  title: string;
  back: string;
  back_icon_color: string;
}

interface BalanceCardTypes {
  number: string;
  title: string;
  bgColor: string;
  btn?: string;
}

interface ProfileEmployeeCardTypes {
  title: string;
  number: string;
  rate: number;
}

interface ProfileManagerCardTypes {
  image: string;
  title: string;
  name: string;
  email: string;
  phone: string;
}

interface DotTypes {
  color?: string;
}

interface StatusBoxTypes {
  status: "active" | "inactive" | "not paid";
}

interface TableIconButtonTypes {
  children: ReactNode;
  className?: string;
}

interface CustomMenuTypes {
  children: ReactNode;
}

interface TextLabelTypes {
  title: string;
  value: string;
}

export type {
  ButtonTypes,
  ImageBoxTypes,
  InputTypes,
  LogoTypes,
  SubmitButtonTypes,
  ProfileTitleTypes,
  ProfileAvatarTypes,
  CounterCardTypes,
  BalanceCardTypes,
  ProfileEmployeeCardTypes,
  ProfileManagerCardTypes,
  DotTypes,
  StatusBoxTypes,
  TableIconButtonTypes,
  CustomMenuTypes,
  TextLabelTypes,
};
