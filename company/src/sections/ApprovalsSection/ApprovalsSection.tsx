import { Paper } from "@mui/material";
import BarChart from "../../charts/BarChart";

const ApprovalsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className="!font-[700] paper_head">
        عدد المطالبات {new Date().getFullYear()}
      </h6>
      <BarChart />
    </Paper>
  );
};

export default ApprovalsSection;
