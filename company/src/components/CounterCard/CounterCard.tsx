import { Box, Icon, Typography } from "@mui/material";
import { CounterCardTypes } from "../../types/components.types";
import ImageBox from "../ImageBox/ImageBox";

const CounterCard = ({
  icon,
  number,
  title,
  unit,
  back,
  back_icon_color,
}: CounterCardTypes) => {
  return (
    <Box className={`counter_card`}>
      <Icon
        className={`${back_icon_color} !w-[40px] !h-[40px] rounded-full !flex justify-center items-center`}
      >
        {icon}
      </Icon>

      <Box className={`grid justify-stretch items-center gap-2`}>
        <Typography variant="h6" className="!font-[600]">
          {number} {unit}
        </Typography>
        <Typography variant="subtitle1" className="!font-[400]">
          {title}
        </Typography>
      </Box>

      <ImageBox lazy src={back} className="!absolute bottom-0 left-0" />
    </Box>
  );
};

export default CounterCard;
