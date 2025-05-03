import { Box, Typography } from "@mui/material";
import { TextLabelTypes } from "../../types/components.types";

const TextLabel = ({ title, value, variant, tel }: TextLabelTypes) => {
  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant="subtitle1" className={`!font-[600]`}>
        {title}
      </Typography>
      <Box
        className={`bg-white rounded-lg px-4 py-3 flex justify-start items-center ${
          variant === "employee"
            ? "border-[1px] border-solid border-text_label_border"
            : variant === "member"
            ? "!bg-[#F4F4F4] border-[1px] border-solid border-[#EEEEEE]"
            : ""
        }`}
      >
        <Typography
          variant="subtitle2"
          className={`${tel && "ltr"} ${
            variant === "employee" || variant === "member"
              ? `!text-tuba_gray !font-[600]`
              : "!text-neutral_700"
          }`}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextLabel;
