import { ReactNode } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { AllFormsTypes } from "./forms.types";

interface LogoTypes {
  color?: string;
  noTitle?: boolean;
  handling?: () => void;
}

interface InputTypes {
  register: UseFormRegister<AllFormsTypes>;
  name: Path<AllFormsTypes>;
  errors: FieldErrors<AllFormsTypes>;
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
};
