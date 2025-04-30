import { styled, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E6E6E6",
    color: "#838383",
    padding: "10px 12px",
    fontWeight: "700",
    fontSize: "14px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
  },
}));
