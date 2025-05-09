import { Box, Typography } from "@mui/material";
import ProfileEmployeeCard from "../../components/ProfileEmployeeCard/ProfileEmployeeCard";

const ProfileEmployeesSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-4`}>
      <Typography variant="h6" className={`!font-[700]`}>
        الموظفين
      </Typography>
      <Box
        className={`grid justify-stretch items-start grid-rows-1 grid-cols-3 gap-2`}
      >
        <ProfileEmployeeCard
          title={"إجمالي الموظفين"}
          rate={10}
          number={"15240"}
          bg={"!bg-[#D2F6F3]"}
          color={"!text-[#179C91FF]"}
        />
        <ProfileEmployeeCard
          title={"الموظفون النشطون"}
          rate={30}
          number={"15240"}
          bg={"!bg-[#FFEED3]"}
          color={"!text-[#D0A25AFF]"}
        />
        <ProfileEmployeeCard
          title={"الموظفون غير النشطين"}
          rate={40}
          number={"80"}
          bg={"!bg-[#E5E4FF]"}
          color={"!text-[#6966CAFF]"}
        />
      </Box>
    </Box>
  );
};

export default ProfileEmployeesSection;
