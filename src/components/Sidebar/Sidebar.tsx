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
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import Item from "./Item";

const Sidebar = () => {
  return (
    <PrimaryBox
      className={`!w-[260px] !h-screen bg-white !grid justify-stretch items-center content-start gap-4 overflow-x-hidden overflow-y-auto`}
    >
      <Item
        icon={<GridViewRounded />}
        title={"الرئيسية"}
        link={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
      />
      <Item
        icon={<AccountBoxRounded />}
        title={"الملف الشخصى"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Item
        icon={<GroupRounded />}
        title={"الموظفون"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Item
        icon={<BeenhereRounded />}
        title={"باقات التغطية الطبية"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Item
        icon={<ListAltRounded />}
        title={"المطالبات"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Item
        icon={<ReceiptRounded />}
        title={"الفواتير"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Item
        icon={<VerifiedUserRounded />}
        title={"شبكة التغطية"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Item
        icon={<AdminPanelSettingsRounded />}
        title={"إدارة الصلاحيات"}
        link={`${import.meta.env.VITE_PROFILE_ROUTE}`}
      />
      <Divider />
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
