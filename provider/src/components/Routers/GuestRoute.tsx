// components/Routers/GuestRoute.tsx
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const GuestRoute = ({ children }: { children: ReactNode }) => {
  const token = Cookies.get(import.meta.env.VITE_TOKEN_TITLE);

  if (token) {
    // Already authenticated, redirect to home/dashboard
    return <Navigate to={import.meta.env.VITE_DASHBOARD_ROUTE} replace />;
  }

  return <>{children}</>;
};

export default GuestRoute;
