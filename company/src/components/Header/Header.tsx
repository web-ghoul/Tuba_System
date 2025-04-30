import { LanguageRounded, NotificationsRounded } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton } from "@mui/material";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }
  }, []);

  return (
    <AppBar className={`h-[60px] ${!scrolled && "!shadow-none"}`}>
      <PrimaryContainer className="!flex justify-between items-center gap-8 py-3">
        <Logo className={"h-[40px]"} />
        <Box className={`flex justify-end items-center gap-6`}>
          <IconButton
            className={`!bg-[rgba(255,255,255,0.5)] group !rounded-md w-[37.5px] h-[37.5px] flex justify-center items-center`}
          >
            <LanguageRounded className={`text-white subtitle1 group-hover:text-primary group-hover:subtitle2`} />
          </IconButton>
          <Box className={`bg-gray-300 h-[20px] w-[1px]`} />
          <IconButton
            className={`!bg-[rgba(255,255,255,0.5)] group !rounded-md w-[37.5px] h-[37.5px] flex justify-center items-center`}
          >
            <NotificationsRounded className={`text-white subtitle1 group-hover:text-primary group-hover:subtitle2`} />
          </IconButton>
          <Box className={`bg-gray-300 h-[20px] w-[1px]`} />
          <IconButton className={`transition-all hover:scale-[0.9]`}>
            <Avatar
              src={
                "/images/avatar.png"
              }
            />
          </IconButton>
        </Box>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;
