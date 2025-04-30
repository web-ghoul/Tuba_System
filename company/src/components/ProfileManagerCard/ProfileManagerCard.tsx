import { Box, Paper, Typography } from "@mui/material";
import ImageBox from "../ImageBox/ImageBox";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { ProfileManagerCardTypes } from "../../types/components.types";

const ProfileManagerCard = ({
  image,
  name,
  title,
  email,
  phone,
}: ProfileManagerCardTypes) => {
  return (
    <Paper className={`paper`}>
      <ImageBox src={image} className={`w-[80px] h-[80px] rounded-full overflow-hidden`} />

      <Box className={`grid justify-start items-center gap-2`}>
        <Typography variant="h6" className={`!font-[700]`}>{name}</Typography>
        <Typography variant="subtitle1" className={`text-tuba_gray`}>
          {title}
        </Typography>
      </Box>

      <Box className={`grid justify-start items-center gap-3 bg-[#FAFAFA] p-2 rounded-md`}>
        <Box className={`flex justify-start items-center gap-2`}>
          <IoMailOutline className={`!text-primary`} />
          <Typography variant="h6">{email}</Typography>
        </Box>
        <Box className={`flex justify-start items-center gap-2`}>
          <FiPhone className={`!text-primary`} />
          <Typography variant="h6" className={`ltr`}>
            {phone}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProfileManagerCard;
