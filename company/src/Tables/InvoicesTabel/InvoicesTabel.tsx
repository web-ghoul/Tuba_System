import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import StatusBox from "../../components/StatusBox/StatusBox";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import useDownloadInvoice from "../../hooks/useDownloadInvoice";

const InvoicesTable = () => {
  const { handleDownloadInvoice } = useDownloadInvoice();
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>#</StyledTableCell>
          <StyledTableCell align="center">اسم المريض</StyledTableCell>
          <StyledTableCell align="center">رقم الهوية</StyledTableCell>
          <StyledTableCell align="center">تاريخ الإصدار </StyledTableCell>
          <StyledTableCell align="center">الإجمالي</StyledTableCell>
          <StyledTableCell align="center">الضريبة</StyledTableCell>
          <StyledTableCell align="center">الإجمالي مع الضريبة</StyledTableCell>
          <StyledTableCell align="center">الحالة</StyledTableCell>
          <StyledTableCell align="center"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            ACC-PINV-2024
          </StyledTableCell>
          <StyledTableCell align="center">أحمد علي محمد</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center">
            22 أكتوبر 2024 05:15 م
          </StyledTableCell>
          <StyledTableCell align="center">1,800.00</StyledTableCell>
          <StyledTableCell align="center">270.00</StyledTableCell>
          <StyledTableCell align="center">2,070.00</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"not paid"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <SecondaryButton onClick={() => handleDownloadInvoice("12")}>
              تحميل
            </SecondaryButton>
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            ACC-PINV-2024
          </StyledTableCell>
          <StyledTableCell align="center">أحمد علي محمد</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center">
            22 أكتوبر 2024 05:15 م
          </StyledTableCell>
          <StyledTableCell align="center">1,800.00</StyledTableCell>
          <StyledTableCell align="center">270.00</StyledTableCell>
          <StyledTableCell align="center">2,070.00</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"not paid"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <SecondaryButton onClick={() => handleDownloadInvoice("12")}>
              تحميل
            </SecondaryButton>
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            ACC-PINV-2024
          </StyledTableCell>
          <StyledTableCell align="center">أحمد علي محمد</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center">
            22 أكتوبر 2024 05:15 م
          </StyledTableCell>
          <StyledTableCell align="center">1,800.00</StyledTableCell>
          <StyledTableCell align="center">270.00</StyledTableCell>
          <StyledTableCell align="center">2,070.00</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"not paid"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <SecondaryButton onClick={() => handleDownloadInvoice("12")}>
              تحميل
            </SecondaryButton>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default InvoicesTable;
