import { Box, Typography } from "@mui/material";
import ProfileManagerCard from "../../components/ProfileManagerCard/ProfileManagerCard";

const ProfileManagersSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Typography variant="h6" className={`!font-[700]`}>
        مديرو الشركة
      </Typography>
      <Box
        className={`grid justify-stretch items-start grid-rows-1 grid-cols-3 gap-2`}
      >
        <ProfileManagerCard
          image={"/images/avatar.png"}
          name={"علي طارق"}
          title={"مدير الشركة"}
          email={"alitarek@gmail.com"}
          phone={"+966 55 123 4567"}
        />
        <ProfileManagerCard
          image={"/images/avatar.png"}
          name={"علي طارق"}
          title={"مدير الشركة"}
          email={"alitarek@gmail.com"}
          phone={"+966 55 123 4567"}
        />
        <ProfileManagerCard
          image={"/images/avatar.png"}
          name={"علي طارق"}
          title={"مدير الشركة"}
          email={"alitarek@gmail.com"}
          phone={"+966 55 123 4567"}
        />
      </Box>
    </Box>
  );
};

export default ProfileManagersSection;
