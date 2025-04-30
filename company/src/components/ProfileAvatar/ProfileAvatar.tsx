import { AddPhotoAlternateRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { ProfileAvatarTypes } from "../../types/components.types";

const ProfileAvatar = ({ image }: ProfileAvatarTypes) => {
  return (
    <Box className={`relative w-[200px] h-[200px] m-auto rounded-full bg-gray-300`}>
      <Box
        className={`bg-cover bg-center bg-no-repeat overflow-hidden`}
        sx={{ backgroundImage: `url(${image})` }}
      />

      <IconButton className={`!rounded-full bg-primary text-white p-2 transition-all hover:bg-white hover:text-primary absolute bottom-[20px] right-[20px]`}>
        <AddPhotoAlternateRounded />
      </IconButton>
    </Box>
  );
};

export default ProfileAvatar;
