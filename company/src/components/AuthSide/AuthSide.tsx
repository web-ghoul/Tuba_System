import { Box, Typography } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import Logo from "../../components/Logo/Logo";

const AuthSide = () => {
  return (
    <Box
      className={`grid justify-stretch items-center relative  content-between bg-primary text-white h-full`}
    >
      <ImageBox
        lazy
        src={"/images/auth_circle_1.svg"}
        className="absolute top-0 right-[50%] flex justify-end items-start w-[50%]"
      />
      <Box
        className={`grid justify-center items-center gap-10 text-center h-full px-8 lg:px-6 md:px-3 sm:!px-2`}
      >
        <Logo className="w-[200px] m-auto" />
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Typography variant="h3" className={`!font-[700]`}>
            مرحبا فى طوبى !
          </Typography>
          <Typography variant="h6" className={`text-gray-300 w-[75%] !m-auto`}>
            منصتك الطبية اللي تجمع كل خدمات التأمين الصحي في مكان واحد، من
            المطالبات للاستشارات والأدوية.
          </Typography>
        </Box>
      </Box>
      <ImageBox
        lazy
        src={"/images/auth_circle_2.svg"}
        className="absolute bottom-0 right-0 flex justify-start items-end w-[50%]"
      />
    </Box>
  );
};

export default AuthSide;
