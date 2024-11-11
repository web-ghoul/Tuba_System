import { Box, Typography } from "@mui/material";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      className="bg-white h-[60px] fixed bottom-0 z-[100] w-full"
    >
      <PrimaryBox>
        <PrimaryContainer className={`!flex justify-start items-center`}>
          <Typography variant="h6" className={`!font-[700]`}>
            © 2024 <span className="text-primary">طوبي</span> . جميع الحقوق
            محفوظة.
          </Typography>
        </PrimaryContainer>
      </PrimaryBox>
    </Box>
  );
};

export default Footer;
