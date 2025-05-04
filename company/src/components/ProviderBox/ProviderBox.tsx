import { Box, Typography } from "@mui/material";
import { ProviderBoxTypes } from "../../types/components.types";
import ImageBox from "../ImageBox/ImageBox";
import TextLine from "../TextLine/TextLine";

const ProviderBox = ({ type, name, networkLevel, image }: ProviderBoxTypes) => {
  console.log(image);
  return (
    <Box
      className={`flex justify-between items-center gap-4`}
    >
      <Box className={`grid justify-start items-center gap-2`}>
        <Typography className={`!font-[700] text-primary`} variant="subtitle1">
          {type}
        </Typography>
        <Typography className={`!font-[700]`} variant="h6">
          {name}
        </Typography>
        <TextLine title={"مستوى الشبكة:"} value={networkLevel} />
      </Box>
      <ImageBox
        className={`rounded-md shadow-md w-[80px] h-[80px]`}
        src={"/images/avatar.png"}
      />
    </Box>
  );
};

export default ProviderBox;
