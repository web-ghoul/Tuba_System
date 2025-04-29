import { Box, Typography } from "@mui/material";
import BarChart from "../../charts/BarChart";

const ApprovalsSection = () => {
  return (
    <Box className={`paper`}>
      <Typography variant="h6" className="!font-[700]">
        عدد المطالبات {new Date().getFullYear()}
      </Typography>
      <BarChart />
    </Box>
  );
};

export default ApprovalsSection;
