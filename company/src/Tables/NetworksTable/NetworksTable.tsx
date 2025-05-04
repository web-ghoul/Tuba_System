import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

const NetworksTable = () => {
  const navigate = useNavigate();

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
          <StyledTableCell
            component="th"
            scope="row"
            className={`!text-primary transition-all hover:cursor-pointer hover:underline !font-[600]`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_NETWORKS_ROUTE}/12`)
            }
          >
            شبكة الرياض الطبية
          </StyledTableCell>
          <StyledTableCell align="center">12</StyledTableCell>
          <StyledTableCell align="center">
            <SecondaryButton
              onClick={() =>
                navigate(`${import.meta.env.VITE_NETWORKS_ROUTE}/12`)
              }
            >
              التفاصيل
            </SecondaryButton>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default NetworksTable;
