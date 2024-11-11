import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { pathname } = useLocation();

  return pathname === `${import.meta.env.VITE_LOGIN_ROUTE}` ? (
    <Box component={"main"}>
      <Outlet />
    </Box>
  ) : (
    <Box component={"main"}>
      <Header />
      <Box
        className={`py-[60px] grid justify-stretch items-center grid-cols-[auto,1fr] !h-full`}
      >
        <Sidebar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
