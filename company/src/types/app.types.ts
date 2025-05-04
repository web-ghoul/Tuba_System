import { ReactNode } from "react";
import { Renderable, ToastPosition } from "react-hot-toast";

interface UserTypes {
  idx: string;
  name: string;
  name1: string;
  logo: string;
  email: string;
  iban: string;
  phone: string;
  size: string;
  account_manager_email: string;
  account_manager_name: string;
  account_manager_phone: string;
  all_members_count: number;
  employees_count: number;
  covered_members_count: number;
  covered_employees_count: number;
  uncovered_employees_count: number;
  uncovered_members_count: number;
  holded_balance: number;
  tohold_balance: number;
  consumed_balance: number;
  available_balance: number;
  required_balance: number;
  tour_status: boolean;
  address: string;
  doctype: string;
}

interface CompanyTypes {
  idx: string;
  name: string;
  name1: string;
  logo: string;
  email: string;
  iban: string;
  phone: string;
  size: string;
  account_manager_email: string;
  account_manager_name: string;
  account_manager_phone: string;
  all_members_count: number;
  employees_count: number;
  covered_members_count: number;
  covered_employees_count: number;
  uncovered_employees_count: number;
  uncovered_members_count: number;
  holded_balance: number;
  tohold_balance: number;
  consumed_balance: number;
  available_balance: number;
  required_balance: number;
  tour_status: boolean;
  address: string;
  doctype: string;
}

interface ImportMetaEnv {
  VITE_SERVER_URL: string;
  VITE_BACKEND_URL: string;
  VITE_TOKEN_COOKIE: string;
  VITE_USER_ID_COOKIE: string;
  VITE_LOGIN_ROUTE: string;
  VITE_OTP_ROUTE: string;
  VITE_RESET_PASSWORD_ROUTE: string;
  VITE_DASHBOARD_ROUTE: string;
}

interface AlertFunTypes {
  msg: string;
  status?: string;
  pos?: ToastPosition;
  icon?: Renderable;
  dur?: number;
}

interface CustomModalTypes {
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
  className?: string;
}

type HeadsType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2";

export type {
  AlertFunTypes,
  HeadsType,
  ImportMetaEnv,
  CustomModalTypes,
  UserTypes,
  CompanyTypes,
};
