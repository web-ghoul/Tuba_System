import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";

const MostClientsTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>Dessert (100g serving)</StyledTableCell>
          <StyledTableCell align="right">Calories</StyledTableCell>
          <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
          <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
          <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            {"Mahmoud"}
          </StyledTableCell>
          <StyledTableCell align="right">{"12"}</StyledTableCell>
          <StyledTableCell align="right">{"2"}</StyledTableCell>
          <StyledTableCell align="right">{"23"}</StyledTableCell>
          <StyledTableCell align="right">{"13"}</StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default MostClientsTable;
