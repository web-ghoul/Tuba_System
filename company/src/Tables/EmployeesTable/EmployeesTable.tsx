import PrimaryTable from "../PrimaryTable";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../StyledTableCell";
import { StyledTableRow } from "../StyledTableRow";
import ActionMenus from "./ActionMenus";
import StatusBox from "../../components/StatusBox/StatusBox";
import { useNavigate } from "react-router-dom";

const EmployeesTable = () => {
  const navigate = useNavigate();

  return (
    <PrimaryTable>
      <TableHead>
        <TableRow>
          <StyledTableCell>اسم الموظف</StyledTableCell>
          <StyledTableCell align="center">القسم</StyledTableCell>
          <StyledTableCell align="center">الرقم الوطني</StyledTableCell>
          <StyledTableCell align="center">الهاتف المحمول</StyledTableCell>
          <StyledTableCell align="center">الجنس</StyledTableCell>
          <StyledTableCell align="center">الجنسية</StyledTableCell>
          <StyledTableCell align="center">المبلغ المطلوب</StyledTableCell>
          <StyledTableCell align="center">الحالة</StyledTableCell>
          <StyledTableCell align="center">الإجراءات</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}/23`)
            }
          >
            علي طارق محمود
          </StyledTableCell>
          <StyledTableCell align="center">خدمة العملاء</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center" className="ltr">
            +966-599123456
          </StyledTableCell>
          <StyledTableCell align="center">ذكر</StyledTableCell>
          <StyledTableCell align="center">سعودي</StyledTableCell>
          <StyledTableCell align="center">3000 ر.س</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"active"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <ActionMenus />
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}/23`)
            }
          >
            علي طارق محمود
          </StyledTableCell>
          <StyledTableCell align="center">خدمة العملاء</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center" className="ltr">
            +966-599123456
          </StyledTableCell>
          <StyledTableCell align="center">ذكر</StyledTableCell>
          <StyledTableCell align="center">سعودي</StyledTableCell>
          <StyledTableCell align="center">3000 ر.س</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"active"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <ActionMenus />
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}/23`)
            }
          >
            علي طارق محمود
          </StyledTableCell>
          <StyledTableCell align="center">خدمة العملاء</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center" className="ltr">
            +966-599123456
          </StyledTableCell>
          <StyledTableCell align="center">ذكر</StyledTableCell>
          <StyledTableCell align="center">سعودي</StyledTableCell>
          <StyledTableCell align="center">3000 ر.س</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"active"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <ActionMenus />
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell
            component="th"
            scope="row"
            className={`transition-all hover:underline hover:cursor-pointer`}
            onClick={() =>
              navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}/23`)
            }
          >
            علي طارق محمود
          </StyledTableCell>
          <StyledTableCell align="center">خدمة العملاء</StyledTableCell>
          <StyledTableCell align="center">2222222221</StyledTableCell>
          <StyledTableCell align="center" className="ltr">
            +966-599123456
          </StyledTableCell>
          <StyledTableCell align="center">ذكر</StyledTableCell>
          <StyledTableCell align="center">سعودي</StyledTableCell>
          <StyledTableCell align="center">3000 ر.س</StyledTableCell>
          <StyledTableCell align="center">
            <StatusBox status={"inactive"} />
          </StyledTableCell>
          <StyledTableCell align="right">
            <ActionMenus />
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </PrimaryTable>
  );
};

export default EmployeesTable;
