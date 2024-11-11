import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";

const Item = ({
  icon,
  title,
  link,
  logout,
}: {
  icon: ReactNode;
  title: string;
  link: string;
  logout?: boolean;
}) => {
  const { pathname } = useLocation();

  return (
    <Link to={link} className={`relative group`}>
      <Box
        className={`absolute right-0 top-0 h-full w-[6px] ${
          logout ? "bg-red-600" : "bg-primary"
        } hidden group-hover:flex ${pathname === link && "!flex"}`}
      />

      <PrimaryContainer
        className={`!flex justify-stretch items-center gap-3 py-2 transition-all ${
          logout
            ? "[&>svg]:hover:text-red-600  hover:bg-red-200"
            : "[&>svg]:hover:text-primary  hover:bg-primary_light"
        } ${
          pathname === link &&
          `${
            logout
              ? "[&>svg]:text-red-600  bg-red-200"
              : "[&>svg]:text-primary  bg-primary_light"
          }`
        }`}
      >
        {icon}
        <Typography
          variant="h6"
          className={`transition-all ${
            logout ? "hover:text-red-600" : "hover:text-primary"
          } hover:!font-[700] ${
            pathname === link &&
            `${
              logout ? "hover:text-red-600" : "hover:text-primary"
            } !font-[700]`
          }`}
        >
          {title}
        </Typography>
      </PrimaryContainer>
    </Link>
  );
};

export default Item;
