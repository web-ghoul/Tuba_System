import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import StatusBox from "../../components/StatusBox/StatusBox";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

const ApprovalsTable = () => {
  const navigate = useNavigate();

  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>#</StyledTableCell>
          <StyledTableCell align="center">اسم المريض</StyledTableCell>
          <StyledTableCell align="center">الجنسية</StyledTableCell>
          <StyledTableCell align="center">تاريخ الإصدار </StyledTableCell>
          <StyledTableCell align="center">الإجمالي</StyledTableCell>
          <StyledTableCell align="center">الضريبة</StyledTableCell>
          <StyledTableCell align="center">الإجمالي مع الضريبة</StyledTableCell>
          <StyledTableCell align="center">الحالة</StyledTableCell>
          <StyledTableCell align="center">الإجراءات</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            onClick={() =>
              navigate(`${import.meta.env.VITE_APPROVALS_ROUTE}/12`)
            }
            className={`transition-all hover:underline hover:cursor-pointer`}
          >
            CLR-211
          </StyledTableCell>
          <StyledTableCell align="center">عبد الله بن سعود</StyledTableCell>
          <StyledTableCell align="center">مصري</StyledTableCell>
          <StyledTableCell align="center" className="ltr">
            22 أكتوبر 2024 05:15 م
          </StyledTableCell>
          <StyledTableCell align="center">1,800.00</StyledTableCell>
          <StyledTableCell align="center">270.00</StyledTableCell>
          <StyledTableCell align="center">2,070.00</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"active"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <SecondaryButton
              onClick={() =>
                navigate(`${import.meta.env.VITE_APPROVALS_ROUTE}/12`)
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

export default ApprovalsTable;
