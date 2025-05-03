import { Paper } from "@mui/material";
import MostSellerServicesTable from "../../Tables/MostSellerServicesTable/MostSellerServicesTable";

const MostSellerService = () => {
  return (
    <Paper className={`paper`}>
      <h6 className={`!font-[700] paper_head`}>الوصفات الأكثر طلبا</h6>
      <MostSellerServicesTable />
    </Paper>
  );
};

export default MostSellerService;
