import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Error from './pages/Error.tsx';
import Login from './pages/Login.tsx';
import OTP from './pages/OTP.tsx';
import Profile from './pages/Profile.tsx';
import ResetPassword from './pages/ResetPassword.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/resetPassword',
        element: <ResetPassword />,
      },
      {
        path: '/otp',
        element: <OTP />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
