import { Box } from "@mui/material";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import ProfileAddressSection from "../sections/ProfileSections/ProfileAddressSection";
import ProfileEmployeesSection from "../sections/ProfileSections/ProfileEmployeesSection";
import ProfileManagersSection from "../sections/ProfileSections/ProfileManagersSection";
import ProfileSection from "../sections/ProfileSections/ProfileSection";

const Profile = () => {
  return (
    <PrimaryContainer
      className={`!grid justify-stretch items-start gap-4 grid-cols-[30%,1fr]`}
    >
      <ProfileSection />
      <Box className={`!grid justify-stretch items-center gap-6`}>
        <ProfileEmployeesSection />
        <ProfileManagersSection />
        <ProfileAddressSection />
      </Box>
    </PrimaryContainer>
  );
};

export default Profile;
