import { Box } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { PrimaryBox } from "./mui/boxes/PrimaryBox";
import { PrimaryContainer } from "./mui/containers/PrimaryContainer";
import WelcomeModal from "./modals/WelcomeModal";
import BreadCrumbSection from "./sections/BreadCrumbSection/BreadCrumbSection";
import EditEmployeePersonInfoModal from "./modals/EditEmployeePersonInfoModal";
import EditEmployeeJobInfoModal from "./modals/EditEmployeeJobInfoModal";
import EditEmployeeMedicalCoverageModal from "./modals/EditEmployeeMedicalCoverageModal";
import AddMemberModal from "./modals/AddMemberModal";
import EditMemberModal from "./modals/EditMemberModal";
import ViewMemberModal from "./modals/ViewMemberModal";
import ChangeProfileAvatarModal from "./modals/ChangeProfileAvatarModal";
import { useEffect } from "react";
import { setAuth } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { handleGetAuthData } from "./functions/handleGetAuthData";
import { getProfile } from "./store/profileSlice";
import axios from "axios";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const authRoutes = [
    `${import.meta.env.VITE_LOGIN_ROUTE}`,
    `${import.meta.env.VITE_UPDATE_PASSWORD_ROUTE}`,
  ];

  const handleTryServer = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/message`
    );
    console.log(res);
  };

  useEffect(() => {
    handleTryServer();
    if (!authRoutes.includes(pathname)) {
      const { token, userData, company } = handleGetAuthData();
      if (token && userData && company) {
        dispatch(setAuth({ token, userData, company }));
        dispatch(getProfile(company));
      } else {
        navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
      }
    } else {
      const { token, userData, company } = handleGetAuthData();
      if (token && userData && company) {
        navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
      }
    }
  }, [pathname]);

  return authRoutes.includes(pathname) ? (
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
      <ChangeProfileAvatarModal />
      <EditEmployeePersonInfoModal />
      <EditEmployeeJobInfoModal />
      <EditEmployeeMedicalCoverageModal />
      <AddMemberModal />
      <EditMemberModal />
      <ViewMemberModal />
    </Box>
  );
}

export default App;
