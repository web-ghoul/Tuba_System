import { Box, Paper, Typography } from "@mui/material";
import DoughnutChart from "../../charts/DoughnutChart";
import Dot from "../../components/Dot/Dot";

const EmployeesBalanceDetailsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className={`!font-[700] paper_head`}>تفاصيل رصيد الموظفين</h6>
      <Box className={`grid justify-stretch items-center gap-3`}>
        <DoughnutChart />
        <Box className={`flex justify-center items-center gap-4 flex-wrap`}>
          <Box className={`flex justify-center items-center gap-1`}>
            <Dot />
            <Typography
              variant="subtitle1"
              className={`text-balance_card_text`}
            >
              الرصيد المستهلك
            </Typography>
          </Box>
          <Box className={`flex justify-center items-center gap-1`}>
            <Dot color={"bg-primary_light"} />
            <Typography
              variant="subtitle1"
              className={`text-balance_card_text`}
            >
              الرصيد المتاح للإستخدام الطبي
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default EmployeesBalanceDetailsSection;
