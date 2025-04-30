import { FmdGoodOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ProfileAddressSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-4`}>
      <Typography variant="h6" className={`!font-[700]`}>العنوان</Typography>
      <Box className={`paper !flex`}>
        <FmdGoodOutlined className={`!text-primary`} />
        <Typography variant="h6" className={`!font-[600]`}>
          ١٢٣٤ طريق الملك فهد، حي العليا، الرياض ١٢٢١١، المملكة العربية السعودية
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileAddressSection;
