import { Box, Typography } from '@mui/material';
import ImageBox from '../../components/ImageBox/ImageBox';
import Forms from '../../forms/Forms';
import { PrimaryBox } from '../../mui/boxes/PrimaryBox';
import { PrimaryContainer } from '../../mui/containers/PrimaryContainer';

const AuthenticationSection = () => {
  return (
    <Box
      className={`grid justify-stretch items-center grid-cols-[1fr,30%] min-h-screen`}
    >
      <PrimaryBox>
        <PrimaryContainer className={`flex justify-center items-center`}>
          <Forms type={'login'} />
        </PrimaryContainer>
      </PrimaryBox>
      <Box
        className={`grid justify-stretch items-center relative  content-between bg-primary text-white h-full`}
      >
        <ImageBox
          lazy
          src={'/images/auth_circle_1.svg'}
          className="absolute top-0 left-0 flex justify-start items-start"
        />
        <Box
          className={`grid justify-center items-center gap-4 text-center h-full px-4 lg:px-3 md:px-2 sm:!px-1`}
        >
          <ImageBox
            lazy
            src={'/images/logo_arabic_light.svg'}
            className="m-auto"
          />
          <Typography variant="h4" className={`!font-[700]`}>
            مرحبا فى طوبى
          </Typography>
          <Typography variant="h6" className={`text-gray-200`}>
            منصتك الطبية اللي تجمع كل خدمات التأمين الصحي في مكان واحد، من
            المطالبات للاستشارات والأدوية.
          </Typography>
        </Box>
        <ImageBox
          lazy
          src={'/images/auth_circle_2.svg'}
          className="absolute bottom-0 right-0 flex justify-end items-end"
        />
      </Box>
    </Box>
  );
};

export default AuthenticationSection;
