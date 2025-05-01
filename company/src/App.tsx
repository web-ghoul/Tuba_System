import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { PrimaryBox } from "./mui/boxes/PrimaryBox";
import { PrimaryContainer } from "./mui/containers/PrimaryContainer";
import WelcomeModal from "./modals/WelcomeModal";
import BreadCrumbSection from "./sections/BreadCrumbSection/BreadCrumbSection";

function App() {
  const { pathname } = useLocation();

  return pathname === `${import.meta.env.VITE_LOGIN_ROUTE}` ? (
    <Box component={"main"}>
      <Outlet />
    </Box>
  ) : (
    <Box component={"main"}>
      <Header />
      <Box className={`pt-[60px] grid justify-stretch items-center !h-full`}>
        <Sidebar />
        <Box
          className={`grid justify-stretch items-stretch self-stretch !content-between pr-[260px]`}
        >
          <PrimaryBox>
            <PrimaryContainer
              className={`!grid justify-stretch items-start gap-10`}
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
      <WelcomeModal />
    </Box>
  );
}

export default App;
