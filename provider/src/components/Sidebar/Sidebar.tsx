import {




  Approval,



  AttachMoney,
 
  GridViewRounded,
  LogoutRounded,
  
} from "@mui/icons-material";

import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import Item from "./Item";


const Sidebar = () => {
  return (
    <PrimaryBox
      className={`!w-[260px] !h-screen bg-white !grid justify-stretch items-center content-start fixed top-[60px] gap-5 overflow-x-hidden overflow-y-auto`}
    >
      <Item
        icon={<GridViewRounded />}
        title={"الرئيسية"}
        link={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
      />
       <Item
        icon={<AttachMoney />}
        title={"ادارة الدفع"}
        link={`${import.meta.env.VITE_PAYMENT_ROUTE}`}
      />
       <Item
        icon={<Approval />}
        title={" اضافة ومتابعة"}
        link={`${import.meta.env.VITE_APPROVAL_CREATE_ROUTE}`}
      />
       <Item
        icon={<Approval />}
        title={" الموافقات"}
        link={`${import.meta.env.VITE_APPROVALS_ROUTE}`}
      />
       <Item
        icon={<LogoutRounded />}
        title={"تسجيل الخروج"}
        link={`${import.meta.env.VITE_LOGIN_ROUTE}`}
        logout
      />
    </PrimaryBox>
  );
};

export default Sidebar;
