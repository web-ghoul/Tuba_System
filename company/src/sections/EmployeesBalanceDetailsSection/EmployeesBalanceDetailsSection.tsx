import { Box, Typography } from "@mui/material";
import DoughnutChart from "../../charts/DoughnutChart";

const EmployeesBalanceDetailsSection = () => {
  return (
    <Box className={`paper`}>
      <Typography variant="h6" className={`!font-[700]`}>
        تفاصيل رصيد الموظفين
      </Typography>
      <DoughnutChart/>
    </Box>
  );
};

export default EmployeesBalanceDetailsSection;
