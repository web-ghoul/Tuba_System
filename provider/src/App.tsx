import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import BreadCrumbSection from "./sections/BreadCrumbSection/BreadCrumbSection";
import ProtectedRoute from "./components/Routers/ProtectedRoute";

function App() {
  const { pathname } = useLocation();

  return pathname === `${import.meta.env.VITE_LOGIN_ROUTE}` ? (
    <Box component={"main"}>
      <Outlet />
    </Box>
  ) : (
   <ProtectedRoute>
    <Box component={"main"} className={` !pt-11`}>
      <Header />
      <Box className={`no-pad-box grid justify-stretch items-center !h-full`}>
        <Sidebar />
        <Box className={`grid justify-stretch items-center  pr-[260px]`}>
          {!(pathname === `${import.meta.env.VITE_DASHBOARD_ROUTE}` ||
            pathname === `${import.meta.env.VITE_LOGIN_ROUTE}`) && (
              <BreadCrumbSection />
            )}
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  </ProtectedRoute> 
  );
}

export default App;
