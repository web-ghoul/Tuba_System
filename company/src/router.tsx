import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Error from "./pages/Error.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";
import Employees from "./pages/Employees.tsx";
import Employee from "./pages/Employee.tsx";
import Network from "./pages/Network.tsx";
import Networks from "./pages/Networks.tsx";
import Approvals from "./pages/Approvals.tsx";
import Package from "./pages/Package.tsx";
import Packages from "./pages/Packages.tsx";
import Invoices from "./pages/Invoices.tsx";
import Payment from "./pages/Payment.tsx";
import Permissions from "./pages/Permissions.tsx";
import Approval from "./pages/Approval.tsx";
import UpdatePassword from "./pages/UpdatePassword.tsx";
import AddPermission from "./pages/AddPermission.tsx";
import AddEmployee from "./pages/AddEmployee.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: `${import.meta.env.VITE_LOGIN_ROUTE}`,
        element: <Login />,
      },
      {
        path: `${import.meta.env.VITE_UPDATE_PASSWORD_ROUTE}`,
        element: <UpdatePassword />,
      },
      {
        path: `${import.meta.env.VITE_PROFILE_ROUTE}`,
        element: <Profile />,
      },
      {
        path: `${import.meta.env.VITE_EMPLOYEES_ROUTE}`,
        element: <Employees />,
      },
      {
        path: `${import.meta.env.VITE_EMPLOYEES_ROUTE}/add`,
        element: <AddEmployee />,
      },
      {
        path: `${import.meta.env.VITE_EMPLOYEES_ROUTE}/:id`,
        element: <Employee />,
      },
      {
        path: `${import.meta.env.VITE_PAYMENT_ROUTE}`,
        element: <Payment />,
      },
      {
        path: `${import.meta.env.VITE_PACKAGES_ROUTE}`,
        element: <Packages />,
      },
      {
        path: `${import.meta.env.VITE_PACKAGES_ROUTE}/:id`,
        element: <Package />,
      },
      {
        path: `${import.meta.env.VITE_APPROVALS_ROUTE}`,
        element: <Approvals />,
      },
      {
        path: `${import.meta.env.VITE_APPROVALS_ROUTE}/:id`,
        element: <Approval />,
      },
      {
        path: `${import.meta.env.VITE_INVOICES_ROUTE}`,
        element: <Invoices />,
      },
      {
        path: `${import.meta.env.VITE_NETWORKS_ROUTE}`,
        element: <Networks />,
      },
      {
        path: `${import.meta.env.VITE_NETWORKS_ROUTE}/:id`,
        element: <Network />,
      },
      {
        path: `${import.meta.env.VITE_PERMISSIONS_ROUTE}`,
        element: <Permissions />,
      },
      {
        path: `${import.meta.env.VITE_PERMISSIONS_ROUTE}/add`,
        element: <AddPermission />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
