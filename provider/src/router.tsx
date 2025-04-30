import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Error from "./pages/Error.tsx";
import Login from "./pages/Login.tsx";
import Payment from "./pages/Payment.tsx";
import ProtectedRoute from "./components/Routers/ProtectedRoute.tsx";
import GuestRoute from "./components/Routers/GuestRoute.tsx";
import Approvals from "./pages/Approvals.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: 
          <Dashboard />
      
      },
      {
        path: `${import.meta.env.VITE_LOGIN_ROUTE}`,
        element: <GuestRoute>
        <Login />
      </GuestRoute>
      },
      {
        path: `${import.meta.env.VITE_PAYMENT_ROUTE}`,
        element: <Payment />,
      },
      {
        path: `${import.meta.env.VITE_APPROVALS_ROUTE}`,
        element: <Approvals />,
      },

    ],

  },
  {
    path: "*",
    element: <Error />,
  },
]);
