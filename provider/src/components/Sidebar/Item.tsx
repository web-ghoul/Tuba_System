import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout as logoutAction } from "../../store/authSlice";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";

interface ItemProps {
  icon: ReactNode;
  title: string;
  link: string;
  logout?: boolean;
  exact?: boolean; // New property to control exact matching
}

const Item: React.FC<ItemProps> = ({ icon, title, link, logout, exact = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if current path starts with this link (for parent routes)
  const isActive = exact 
    ? location.pathname === link 
    : location.pathname === link || location.pathname.startsWith(`${link}/`);

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
        className="relative group cursor-pointer transition-all duration-200"
      >
        {/* Active indicator bar */}
        <Box
          className="absolute right-0 top-0 h-full w-[6px] bg-red-600
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
        <PrimaryContainer
          className="!flex justify-start items-center gap-3 py-3 px-4
                   transition-all duration-200
                   group-hover:bg-red-100/70"
        >
          <Box className="text-gray-600 transition-all duration-200 group-hover:text-red-600">
            {icon}
          </Box>
          <Typography
            variant="subtitle1"
            className="text-gray-700 transition-all duration-200
                     group-hover:text-red-600 group-hover:font-semibold"
          >
            {title}
          </Typography>
        </PrimaryContainer>
      </Box>
    );
  }

  // --- NORMAL NAVIGATION CASE ---
  return (
    <NavLink
      to={link}
      end={exact}
      className={({ isActive }) => `block relative group cursor-pointer transition-all duration-200`}
    >
      {({ isActive: navLinkActive }) => {
        // Use our custom isActive logic or NavLink's isActive
        const activeState = exact ? navLinkActive : isActive;
        
        return (
          <>
            {/* Active indicator bar */}
            <Box
              className={`absolute right-0 top-0 h-full w-[6px] bg-primary
                      transition-opacity duration-200
                      ${activeState ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            />
            <PrimaryContainer
              className={`!flex justify-start items-center gap-3 py-3 px-4
                       transition-all duration-200
                       ${activeState ? 'bg-primary_light/80' : ''}
                       group-hover:bg-primary_light/60`}
            >
              <Box
                className={`transition-all duration-200
                        ${activeState ? 'text-primary' : 'text-gray-600'}
                         group-hover:text-primary`}
              >
                {icon}
              </Box>
              <Typography
                variant="subtitle1"
                className={`transition-all duration-200
                         ${activeState ? 'text-primary font-semibold' : 'text-gray-700'}
                          group-hover:text-primary group-hover:font-medium`}
              >
                {title}
              </Typography>
            </PrimaryContainer>
          </>
        );
      }}
    </NavLink>
  );
};

export default Item;