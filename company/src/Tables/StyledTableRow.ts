import { styled, TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F6F7F9",
    color: "rgba(46, 46, 46, 1)",
    padding: "10px 12px",
  },
  "& td,& th": {
    padding: "10px 12px",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
