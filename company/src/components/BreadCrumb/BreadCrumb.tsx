import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const pathname = useLocation();
  console.log(pathname);
  return (
    <Breadcrumbs
      separator={<NavigateNextRounded fontSize="small" />}
      aria-label="breadcrumb"
      className={`!p-0`}
    >
      <Link
        key="2"
        to={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
        className={`!font-[600] subtitle1 transition-all hover:text-primary hover:underline !p-0`}
      >
        الرئيسية
      </Link>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
