import { Box, Typography } from "@mui/material";
import { StatusBoxTypes } from "../../types/components.types";

const StatusBox = ({ status }: StatusBoxTypes) => {
  return (
    <Box
      className={`px-2 py-2 rounded-md text-center bg-green-100 text-green-600`}
    >
      <Typography variant="subtitle2" className={`!font-[600]`}>{status}</Typography>
    </Box>
  );
};

export default StatusBox;
