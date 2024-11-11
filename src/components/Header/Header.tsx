import { NotificationsOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton } from "@mui/material";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <AppBar className="h-[60px]">
      <PrimaryContainer className="!flex justify-between items-center gap-8 py-3">
        <Logo className={"h-[40px]"} />
        <Box className={`flex justify-end items-center gap-6`}>
          <IconButton
            className={`!bg-[rgba(255,255,255,0.5)] !rounded-md w-[35px] h-[35px] flex justify-center items-center`}
          >
            <NotificationsOutlined className={`text-white`} />
          </IconButton>
          <Box className={`bg-gray-300 h-[20px] w-[1px]`} />
          <IconButton
            className={`!bg-[rgba(255,255,255,0.5)] !rounded-md w-[35px] h-[35px] flex justify-center items-center`}
          >
            <NotificationsOutlined className={`text-white`} />
          </IconButton>
          <Box className={`bg-gray-300 h-[20px] w-[1px]`} />
          <IconButton>
            <Avatar
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
              }
            />
          </IconButton>
        </Box>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;
