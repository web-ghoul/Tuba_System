import { Box } from "@mui/material";
import ProfileAddressSection from "../sections/ProfileSections/ProfileAddressSection";
import ProfileEmployeesSection from "../sections/ProfileSections/ProfileEmployeesSection";
import ProfileManagersSection from "../sections/ProfileSections/ProfileManagersSection";
import ProfileSection from "../sections/ProfileSections/ProfileSection";

const Profile = () => {
  return (
    <Box
      className={`!grid justify-stretch items-start gap-4 grid-cols-[30%,1fr]`}
    >
      <ProfileSection />
      <Box className={`!grid justify-stretch items-center gap-6`}>
        <ProfileEmployeesSection />
        <ProfileManagersSection />
        <ProfileAddressSection />
      </Box>
    </Box>
  );
};

export default Profile;
