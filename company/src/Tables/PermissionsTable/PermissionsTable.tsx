import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import ActionMenus from "./ActionMenus";
import { useNavigate } from "react-router-dom";
import { WhiteStyledTableRow } from "../WhiteStyledTableRow";

const PermissionsTable = () => {
  const navigate = useNavigate();

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
        <WhiteStyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/12`)
            }
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </WhiteStyledTableRow>
        <WhiteStyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/12`)
            }
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </WhiteStyledTableRow>
        <WhiteStyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/12`)
            }
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </WhiteStyledTableRow>
        <WhiteStyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/12`)
            }
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </WhiteStyledTableRow>
        <WhiteStyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/12`)
            }
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </WhiteStyledTableRow>
        <WhiteStyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/12`)
            }
          >
            HR
          </StyledTableCell>
          <StyledTableCell align="center">7</StyledTableCell>
          <StyledTableCell align="center">
            <ActionMenus />
          </StyledTableCell>
        </WhiteStyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default PermissionsTable;
