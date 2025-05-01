import { Box, Typography } from "@mui/material";
import { TextLabelTypes } from "../../types/components.types";

const TextLabel = ({ title, value, variant }: TextLabelTypes) => {
  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant="subtitle1" className={`!font-[600]`}>
        {title}
      </Typography>
      <Box
        className={`bg-white rounded-lg px-4 py-3 flex justify-start items-center ${
          variant === "employee"
            ? "border-[1px] border-solid border-text_label_border"
            : ""
        }`}
      >
        <Typography
          variant="subtitle2"
          className={
            variant === "employee" ? `!text-tuba_gray` : "!text-neutral_700"
          }
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextLabel;
