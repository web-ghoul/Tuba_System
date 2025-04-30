import { AddPhotoAlternateRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { ProfileAvatarTypes } from "../../types/components.types";
import ImageBox from "../ImageBox/ImageBox";

const ProfileAvatar = ({ image }: ProfileAvatarTypes) => {
  return (
    <Box
      className={`relative w-[200px] h-[200px] m-auto rounded-full bg-gray-300`}
    >
      <ImageBox src={image} className="w-full h-full rounded-full"/>
      
      <IconButton
        className={`!rounded-full !bg-primary !text-white p-2 !border-[1px] !border-solid !border-primary transition-all hover:!bg-white hover:!text-primary absolute bottom-[40px] right-[20px] w-[40px] h-[40px]`}
      >
        <AddPhotoAlternateRounded />
      </IconButton>
    </Box>
  );
};

export default ProfileAvatar;
