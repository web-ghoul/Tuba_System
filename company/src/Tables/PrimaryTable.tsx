import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { PrimaryTableTypes } from "../types/tables.types";

const PrimaryTable = ({ children }: PrimaryTableTypes) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        {children}
      </Table>
    </TableContainer>
  );
};

export default PrimaryTable;
