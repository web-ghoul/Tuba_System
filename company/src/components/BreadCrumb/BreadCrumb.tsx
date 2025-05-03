import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  const crumbs = location.pathname
    .split("/")
    .filter((part) => part !== "");

  const buildPath = (index: number) =>
    "/" + crumbs.slice(0, index + 1).join("/");

  return (
    <Breadcrumbs
      separator={<NavigateNextRounded className={`rotate-[180deg]`} fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link
        key="home"
        to={`${import.meta.env.VITE_DASHBOARD_ROUTE}`}
        className="!font-[600] subtitle1 transition-all hover:text-primary hover:underline !p-0"
      >
        الرئيسية
      </Link>

      {crumbs.map((crumb, index) => {
        const to = buildPath(index);
        const isLast = index === crumbs.length - 1;

        return isLast ? (
          <span key={to} className="text-gray-500 !font-[500] subtitle2 !p-0">
            {decodeURIComponent(crumb)}
          </span>
        ) : (
          <Link
            key={to}
            to={to}
            className="!font-[600] subtitle1 transition-all hover:text-primary hover:underline !p-0"
          >
            {decodeURIComponent(crumb)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
