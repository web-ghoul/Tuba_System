import { Box, Typography } from "@mui/material";
import { TextLabelTypes } from "../../types/components.types";

const TextLabel = ({ title, value }: TextLabelTypes) => {

  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant="h6" className={`!font-[600]`}>{title}</Typography>
      <Box
        className={`bg-white rounded-lg px-4 py-4 flex justify-end items-center`}
      >
        <Typography variant="subtitle1" className={`!text-text_label`}>{value}</Typography>
      </Box>
    </Box>
  );
};

export default TextLabel;
