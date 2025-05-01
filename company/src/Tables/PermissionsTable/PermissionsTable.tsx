import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import ActionMenus from "./ActionMenus";

const PermissionsTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>اسم الدور</StyledTableCell>
          <StyledTableCell align="center">عدد الأشخاص</StyledTableCell>
          <StyledTableCell align="center">إجراءات</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary`}
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default PermissionsTable;
