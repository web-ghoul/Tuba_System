import { Box, Typography } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import Logo from "../../components/Logo/Logo";
import Forms from "../../forms/Forms";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";
import { Link } from "react-router-dom";

const AuthenticationSection = () => {
  return (
    <Box
      className={`grid justify-stretch items-center grid-cols-[30%,1fr] min-h-screen`}
    >
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
            <Typography
              variant="h6"
              className={`text-gray-300 w-[75%] !m-auto`}
            >
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
      <PrimaryBox className={`!grid justify-stretch items-center`}>
        <PrimaryContainer
          className={`!grid justify-stretch items-center !m-auto !w-[50%]`}
        >
          <Forms type={"login"} />
          <Box className={`grid justify-stretch items-center gap-2 text-center`}>
            <Typography
              variant="subtitle1"
              className={`!font-[700] text-primary text-center`}
            >
              مو المزود  ؟
            </Typography>
            <Typography variant="subtitle2">
              إذا حاب تغير نوع تسجيل الدخول <Link to={""} className={`text-primary !font-[600]`}>اضغط هنا.</Link>
            </Typography>
          </Box>
        </PrimaryContainer>
      </PrimaryBox>
    </Box>
  );
};

export default AuthenticationSection;
