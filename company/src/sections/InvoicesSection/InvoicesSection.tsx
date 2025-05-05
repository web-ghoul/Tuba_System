import { Paper } from "@mui/material";
import InvoicesTable from "../../Tables/InvoicesTabel/InvoicesTabel";
import Forms from "../../forms/Forms";

const InvoicesSection = () => {
  return (
    <Paper className={`paper`}>
      <Forms type={"filterInvoices"} />
      <InvoicesTable />
    </Paper>
  );
};

export default InvoicesSection;
