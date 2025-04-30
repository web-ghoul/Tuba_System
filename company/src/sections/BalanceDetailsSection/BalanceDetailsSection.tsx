import { Paper } from "@mui/material";
import LineChart from "../../charts/LineChart";

const BalanceDetailsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className="!font-[700] paper_head">تفاصيل الرصيد باليوم</h6>
      <LineChart />
    </Paper>
  );
};

export default BalanceDetailsSection;
