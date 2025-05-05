import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import BreadCrumbSection from "./sections/BreadCrumbSection/BreadCrumbSection";
import ProtectedRoute from "./components/Routers/ProtectedRoute";
import { PrimaryBox } from "./mui/boxes/PrimaryBox";
import { PrimaryContainer } from "./mui/containers/PrimaryContainer";

function App() {
  const { pathname } = useLocation();

  return pathname === `${import.meta.env.VITE_LOGIN_ROUTE}` ? (
    <Box component={"main"}>
      <Outlet />
    </Box>
  ) : (
    <ProtectedRoute>
      <Box component={"main"}>
        <Header />
        <Box className={`!pb-0 !pt-[20px]  grid justify-stretch items-center !h-full`}>
          <Sidebar />
          <Box
            className={`grid justify-stretch items-stretch self-stretch !content-between pr-[260px]`}
          > 
            <PrimaryBox>
              <PrimaryContainer
                className={`!grid justify-stretch items-start gap-2`}
              >
                {!(
                  pathname === `${import.meta.env.VITE_DASHBOARD_ROUTE}` ||
                  pathname === `${import.meta.env.VITE_LOGIN_ROUTE}`
                ) && <BreadCrumbSection />}
                <Outlet />
              </PrimaryContainer>
            </PrimaryBox>
            <Footer />
          </Box>
        </Box>
      </Box>

    </ProtectedRoute>
  );
}

export default App;
