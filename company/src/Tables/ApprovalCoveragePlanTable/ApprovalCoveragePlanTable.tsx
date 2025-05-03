import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableRow } from "../StyledTableRow";
import { PrimaryStyledTableCell } from "../PrimaryStyledTableCell";

const ApprovalCoveragePlanTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <PrimaryStyledTableCell>العنصر</PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">
            المغطى (أساسي)
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">
            المغطى (ضريبة القيمة المضافة)
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">
            المغطى (مع الضريبة)
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">الحالة</PrimaryStyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <PrimaryStyledTableCell component="th" scope="row">
            CLI-122
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">
            7000 ريال سعودي
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">
            1050 ريال سعودي
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center" className="ltr">
            8050 ريال سعودي
          </PrimaryStyledTableCell>
          <PrimaryStyledTableCell align="center">-</PrimaryStyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default ApprovalCoveragePlanTable;
