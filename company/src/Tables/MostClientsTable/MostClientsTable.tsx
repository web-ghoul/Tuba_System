import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";

const MostClientsTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>اسم المزود</StyledTableCell>
          <StyledTableCell align="center">عدد المطالبات</StyledTableCell>
          <StyledTableCell align="center">معتمدة جزئيا</StyledTableCell>
          <StyledTableCell align="right">معتمدة </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            مستشفى الملك فيصل التخصصي
          </StyledTableCell>
          <StyledTableCell align="center">36</StyledTableCell>
          <StyledTableCell align="center">12</StyledTableCell>
          <StyledTableCell align="right">36</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            مستشفى الملك فيصل التخصصي
          </StyledTableCell>
          <StyledTableCell align="center">36</StyledTableCell>
          <StyledTableCell align="center">12</StyledTableCell>
          <StyledTableCell align="center">36</StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default MostClientsTable;
