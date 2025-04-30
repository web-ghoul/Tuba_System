import { Paper } from "@mui/material";
import DoughnutChart from "../../charts/DoughnutChart";

const EmployeesBalanceDetailsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className={`!font-[700] paper_head`}>تفاصيل رصيد الموظفين</h6>
      <DoughnutChart />
    </Paper>
  );
};

export default EmployeesBalanceDetailsSection;
