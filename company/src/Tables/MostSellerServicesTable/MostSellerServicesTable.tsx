import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";

const MostSellerServicesTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>رقم المطالبة</StyledTableCell>
          <StyledTableCell align="center">اسم العنصر</StyledTableCell>
          <StyledTableCell align="right">معتمدة </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            36
          </StyledTableCell>
          <StyledTableCell align="center">زراعة الأسنان</StyledTableCell>
          <StyledTableCell align="center">36</StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default MostSellerServicesTable;
