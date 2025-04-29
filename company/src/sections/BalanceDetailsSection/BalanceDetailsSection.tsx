import { Box, Typography } from "@mui/material";
import LineChart from "../../charts/LineChart";

const BalanceDetailsSection = () => {
  return (
    <Box className={`paper`}>
      <Typography variant="h6" className="!font-[700]">تفاصيل الرصيد باليوم</Typography>
      <LineChart/>
    </Box>
  );
};

export default BalanceDetailsSection;
