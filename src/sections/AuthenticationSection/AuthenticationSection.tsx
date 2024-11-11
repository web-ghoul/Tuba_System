import { Box, Typography } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import Forms from "../../forms/Forms";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";

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
          className="absolute top-0 left-0 flex justify-end items-start"
        />
        <Box
          className={`grid justify-center items-center gap-10 text-center h-full px-8 lg:px-6 md:px-3 sm:!px-2`}
        >
          <ImageBox
            lazy
            src={"/images/logo_arabic_light.svg"}
            className="m-auto"
          />
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
          className="absolute bottom-0 right-0 flex justify-start items-end"
        />
      </Box>
      <PrimaryBox className={`!grid justify-stretch items-center`}>
        <PrimaryContainer
          className={`!grid justify-stretch items-center !m-auto !w-[50%]`}
        >
          <Forms type={"login"} />
        </PrimaryContainer>
      </PrimaryBox>
    </Box>
  );
};

export default AuthenticationSection;
