import { Box, Icon, Typography } from "@mui/material";
import { ProfileEmployeeCardTypes } from "../../types/components.types";
import {
  MovingRounded,
  PeopleAltRounded,
  TrendingDownRounded,
} from "@mui/icons-material";

const ProfileEmployeeCard = ({
  title,
  number,
  rate,
}: ProfileEmployeeCardTypes) => {
  return (
    <Box className={`profile_employees_paper h-full`}>
      <Box className={`flex justify-start items-start gap-2 p-4`}>
        <Icon
          className={`rounded-3xl !w-[60px] !h-[60px] !flex justify-center items-center bg-profile_employees_counter_light`}
        >
          <PeopleAltRounded
            className={`!text-[32px] !text-profile_employees_counter`}
          />
        </Icon>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography
            variant="h6"
            className={`!text-profile_employees_counter_text_gray`}
          >
            {title}
          </Typography>
          <Typography variant="h4" className={`!font-[700]`}>
            {number}
          </Typography>
        </Box>
      </Box>
      <Box
        className={`flex justify-start items-center gap-2 p-4 bg-profile_employees_counter_gray`}
      >
        {rate !== 0 &&
          (rate > 0 ? (
            <TrendingDownRounded className={`!text-red-500 text-[18px]`} />
          ) : (
            <MovingRounded className={`!text-green-500 text-[18px]`} />
          ))}
        <Typography variant="subtitle2">
          {rate === 0
            ? "لا يوجد اختلاف"
            : rate > 0
            ? `زيادة ${rate}%`
            : `نقص ${rate}%`}{" "}
          عن الشهر الماضي
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileEmployeeCard;
