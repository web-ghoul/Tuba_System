import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import ActionMenus from "./ActionMenus";

const EmployeeMembersTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>رقم الهوية</StyledTableCell>
          <StyledTableCell align="center">الاسم</StyledTableCell>
          <StyledTableCell align="center">تاريخ الميلاد</StyledTableCell>
          <StyledTableCell align="center">الصلة</StyledTableCell>
          <StyledTableCell align="center">الجنس</StyledTableCell>
          <StyledTableCell align="center">الباقة</StyledTableCell>
          <StyledTableCell align="center">الإجراءات</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            2034567890
          </StyledTableCell>
          <StyledTableCell align="center">علي طارق محمود</StyledTableCell>
          <StyledTableCell align="center">2024-07-02</StyledTableCell>
          <StyledTableCell align="center">الابن</StyledTableCell>
          <StyledTableCell align="center">ذكر</StyledTableCell>
          <StyledTableCell align="center">VIP</StyledTableCell>
          <StyledTableCell align="right">
            <ActionMenus />
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default EmployeeMembersTable;
