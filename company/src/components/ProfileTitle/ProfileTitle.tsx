import { Box, Typography } from "@mui/material";
import { ProfileTitleTypes } from "../../types/components.types";

const ProfileTitle = ({ title }: ProfileTitleTypes) => {
  return (
    <Box className={`text-primary bg-primary_light rounded-md py-4 px-2`}>
      <Typography variant="subtitle1" className={`!font-[700]`}>
        {title}
      </Typography>
    </Box>
  );
};

export default ProfileTitle;
