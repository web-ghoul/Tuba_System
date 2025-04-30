import { Paper } from "@mui/material";
import MostSellerTable from "../../Tables/MostSellerTable/MostSellerTable";

const MostSellerService = () => {
  return (
    <Paper className={`paper`}>
      <h6 className={`!font-[700] paper_head`}>الوصفات الأكثر طلبا</h6>
      <MostSellerTable />
    </Paper>
  );
};

export default MostSellerService;
