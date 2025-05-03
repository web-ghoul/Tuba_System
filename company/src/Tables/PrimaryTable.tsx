import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { PrimaryTableTypes } from "../types/tables.types";

const PrimaryTable = ({ children }: PrimaryTableTypes) => {
  return (
    <TableContainer component={Paper} className="!shadow-none border-[1px] border-solid border-neutral_100 !rounded-lg">
      <Table aria-label="customized table">
        {children}
      </Table>
    </TableContainer>
  );
};

export default PrimaryTable;
