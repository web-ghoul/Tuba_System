import { Box } from "@mui/material";
import { DotTypes } from "../../types/components.types";

const Dot = ({ color }: DotTypes) => {
  return (
    <Box
      className={`${color || "bg-primary"} w-[10px] h-[10px] rounded-full`}
    />
  );
};

export default Dot;
