import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";

const NetworksTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>اسم الشبكة</StyledTableCell>
          <StyledTableCell align="center">عدد مزودي الخدمة</StyledTableCell>
          <StyledTableCell align="center">الإجراءات</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row" className={`!text-primary`}>
            شبكة الرياض الطبية
          </StyledTableCell>
          <StyledTableCell align="center">12</StyledTableCell>
          <StyledTableCell align="center">
            <SecondaryButton>التفاصيل</SecondaryButton>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default NetworksTable;
