import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout as logoutAction } from "../../store/authSlice";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";

interface ItemProps {
  icon: ReactNode;
  title: string;
  link: string;
  logout?: boolean;
}

const Item: React.FC<ItemProps> = ({ icon, title, link, logout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    Cookies.remove(import.meta.env.VITE_TOKEN_TITLE!);
    Cookies.remove(import.meta.env.VITE_USER_ID_TITLE!);
    navigate(import.meta.env.VITE_LOGIN_ROUTE!, { replace: true });
  };

  // --- LOGOUT CASE ---
  if (logout) {
    return (
      <Box
        onClick={handleLogout}
        className="relative group cursor-pointer"
      >
        {/* Active bar when hovered or active */}
        <Box
          className="absolute right-0 top-0 h-full w-[6px] bg-red-600 hidden group-hover:flex"
        />
        <PrimaryContainer
          className="!flex items-center gap-3 py-2 
                     transition-all [&>svg]:text-[20px] [&>svg]:hover:text-[22px]
                     [&>svg]:hover:text-red-600 hover:bg-red-200"
        >
          {icon}
          <Typography
            variant="subtitle1"
            className="group-hover:text-red-600 group-hover:font-semibold"
          >
            {title}
          </Typography>
        </PrimaryContainer>
      </Box>
    );
  }

  // --- NORMAL NAVIGATION CASE ---
  return (
    <Box
      component={NavLink}
      to={link}
      end
      className={({ isActive }) =>
        `relative group cursor-pointer 
         ${isActive ? "bg-primary_light !font-bold [&>svg]:text-primary" : ""}
         hover:bg-primary_light`
      }
    >
      <Box
        className={`absolute right-0 top-0 h-full w-[6px] bg-primary 
                    hidden group-hover:flex ${window.location.pathname === link ? "!flex" : ""}`}
      />
      <PrimaryContainer
        className="!flex items-center gap-3 py-2 
                   transition-all [&>svg]:text-[20px] [&>svg]:hover:text-[22px] 
                   hover:[&>svg]:text-primary"
      >
        {icon}
        <Typography
          variant="subtitle1"
          className={`transition-all 
                     ${window.location.pathname === link ? "text-primary font-semibold" : ""}
                     group-hover:font-semibold`}
        >
          {title}
        </Typography>
      </PrimaryContainer>
    </Box>
  );
};

export default Item;
