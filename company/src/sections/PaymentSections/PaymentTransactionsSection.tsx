import { Paper } from "@mui/material";
import PaymentTransactionsTable from "../../Tables/PaymentTransactionsTable/PaymentTransactionsTable"

const PaymentTransactionsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className={`!font-[700] paper_head`}>سجل التحويلات المالية</h6>
      <PaymentTransactionsTable />
    </Paper>
  );
};

export default PaymentTransactionsSection;
