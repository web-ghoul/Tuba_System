import { Box, Typography } from "@mui/material";
import { StatusBoxTypes } from "../../types/components.types";

const StatusBox = ({ status }: StatusBoxTypes) => {
  return (
    <Box
      className={`px-3 py-3 rounded-md text-center bg-green-100 text-green-600`}
    >
      <Typography variant="subtitle1" className={`!font-[600]`}>{status}</Typography>
    </Box>
  );
};

export default StatusBox;
