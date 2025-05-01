import {
  AccountBoxRounded,
  AdminPanelSettingsRounded,
  BeenhereRounded,
  GridViewRounded,
  GroupRounded,
  ListAltRounded,
  LogoutRounded,
  ReceiptRounded,
  VerifiedUserRounded,
  WalletRounded,
} from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import Item from "./Item";

const Sidebar = () => {
  return (
    <PrimaryBox
      className={`!w-[260px] sidebar_height bg-white fixed top-[60px] overflow-x-hidden overflow-y-auto`}
    >
      <Box className={`!h-fit !grid justify-stretch items-center content-start gap-5`}>
        <Item
          icon={<GridViewRounded />}
          title={"الرئيسية"}
          link={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
        />
        <Item
          icon={<AccountBoxRounded />}
          title={"ملف الشركة"}
          link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
        />
        <Item
          icon={<GroupRounded />}
          title={"الموظفون"}
          link={`${import.meta.env.VITE_EMPLOYEES_ROUTE}`}
        />
        <Item
          icon={<BeenhereRounded />}
          title={"باقات التغطية الطبية"}
          link={`${import.meta.env.VITE_PACKAGES_ROUTE}`}
        />
        <Item
          icon={<WalletRounded />}
          title={"الدفع"}
          link={`${import.meta.env.VITE_PAYMENT_ROUTE}`}
        />
        <Item
          icon={<ListAltRounded />}
          title={"المطالبات"}
          link={`${import.meta.env.VITE_APPROVALS_ROUTE}`}
        />
        <Item
          icon={<ReceiptRounded />}
          title={"الفواتير"}
          link={`${import.meta.env.VITE_INVOICES_ROUTE}`}
        />
        <Item
          icon={<VerifiedUserRounded />}
          title={"شبكة التغطية"}
          link={`${import.meta.env.VITE_NETWORKS_ROUTE}`}
        />
        <Item
          icon={<AdminPanelSettingsRounded />}
          title={"إدارة المشرفين"}
          link={`${import.meta.env.VITE_PERMISSIONS_ROUTE}`}
        />
        <Divider />
        <Item
          icon={<LogoutRounded />}
          title={"تسجيل الخروج"}
          link={`${import.meta.env.VITE_LOGIN_ROUTE}`}
          logout
        />
      </Box>
    </PrimaryBox>
  );
};

export default Sidebar;
