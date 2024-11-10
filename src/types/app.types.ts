import { Renderable, ToastPosition } from 'react-hot-toast';

interface ImportMetaEnv {
  VITE_SERVER_URL: string;
  VITE_BACKEND_URL: string;
  VITE_TOKEN_STORAGE: string;
  VITE_USER_ID_STORAGE: string;
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

type HeadsType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2';

export type { AlertFunTypes, HeadsType, ImportMetaEnv };
