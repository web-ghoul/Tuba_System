import { styled, TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    color:"rgba(46, 46, 46, 1)"
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
