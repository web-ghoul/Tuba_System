import { Paper } from "@mui/material";
import InvoicesTable from "../../Tables/InvoicesTabel/InvoicesTabel";

const InvoicesSection = () => {
  return (
    <Paper className={`paper`}>
      <InvoicesTable />
    </Paper>
  );
};

export default InvoicesSection;
