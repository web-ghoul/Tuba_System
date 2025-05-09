import { Box, Typography } from "@mui/material";
import { ProfileTitleTypes } from "../../types/components.types";

const ProfileTitle = ({ title }: ProfileTitleTypes) => {
  return (
    <Box className={`text-primary bg-primary_light py-4 px-2`}>
      <Typography variant="subtitle1">{title}</Typography>
    </Box>
  );
};

export default ProfileTitle;
