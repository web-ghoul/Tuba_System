import { Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { logout as logoutAction } from "../../store/authSlice";
import { SidebarItemTypes } from "../../types/components.types";

const Item = ({ icon, title, link, logout }: SidebarItemTypes) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const content = (
    <>
      <Box
        className={`absolute right-0 top-0 h-full w-[6px] ${
          logout ? "bg-red-600" : "bg-primary"
        } hidden group-hover:flex ${pathname === link && "!flex"}`}
      />
      <PrimaryContainer
        className={`!flex justify-stretch items-center gap-3 py-2 transition-all [&>svg]:text-[20px] ${
          logout
            ? "[&>svg]:hover:text-red-600  hover:bg-red-200"
            : "[&>svg]:hover:text-primary  hover:bg-primary_100"
        } ${
          pathname === link &&
          `${
            logout
              ? "[&>svg]:text-red-600  bg-red-200"
              : "[&>svg]:text-primary  bg-primary_100"
          }`
        }`}
      >
        {icon}
        <Typography
          variant="subtitle2"
          className={`transition-all ${
            logout ? "group-hover:text-red-600" : "group-hover:text-primary"
          } ${
            pathname === link &&
            `${logout ? "text-red-600" : "text-primary"} !font-[700]`
          }`}
        >
          {title}
        </Typography>
      </PrimaryContainer>
    </>
  );

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
  };

  return logout ? (
    <button onClick={handleLogout} className={`relative group`}>
      {content}
    </button>
  ) : (
    <Link to={link || ""} className={`relative group`}>
      {content}
    </Link>
  );
};

export default Item;
