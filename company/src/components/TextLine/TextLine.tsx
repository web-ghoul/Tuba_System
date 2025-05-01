import { Box, Typography } from "@mui/material";
import { TextLineTypes } from "../../types/components.types";

const TextLine = ({ title, value, valueColor }: TextLineTypes) => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Typography variant="subtitle1" className={"!text-tuba_gray"}>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={`${valueColor} !font-[600]`}>
        {value}
      </Typography>
    </Box>
  );
};

export default TextLine;
