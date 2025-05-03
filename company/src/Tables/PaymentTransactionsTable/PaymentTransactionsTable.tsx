import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import StatusBox from "../../components/StatusBox/StatusBox";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { SimCardDownloadOutlined } from "@mui/icons-material";

const PaymentTransactionsTable = () => {
  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>رقم التحويل (ID)</StyledTableCell>
          <StyledTableCell align="center">IBAN</StyledTableCell>
          <StyledTableCell align="center">مبلغ التحويل </StyledTableCell>
          <StyledTableCell align="center">تاريخ التحويل</StyledTableCell>
          <StyledTableCell align="center">طريقة التحويل</StyledTableCell>
          <StyledTableCell align="center">حالة التحويل</StyledTableCell>
          <StyledTableCell align="center">صورة التحويل</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            123456789
          </StyledTableCell>
          <StyledTableCell align="center">123456789</StyledTableCell>
          <StyledTableCell align="center">2200 ريال</StyledTableCell>
          <StyledTableCell align="center">1 فبراير 2024</StyledTableCell>
          <StyledTableCell align="center">تحويل بنكي</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"active"} />
          </StyledTableCell>
          <StyledTableCell align="center">
            <PrimaryButton>
              تحميل
              <SimCardDownloadOutlined />
            </PrimaryButton>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default PaymentTransactionsTable;
