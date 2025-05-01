import { Box } from "@mui/material";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useLocation } from "react-router-dom";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import { RiFileExcel2Line } from "react-icons/ri";

const BreadCrumbSection = () => {
  const pathname = useLocation();

  const route = pathname.pathname;

  return (
    <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
      <BreadCrumb />
      <Box className={`flex justify-end items-center gap-2`}>
        {route === `${import.meta.env.VITE_NETWORKS_ROUTE}` && (
          <>
            <GradientButton>
              <IoMdAddCircleOutline />
              إضافة شبكة خاصة بك
            </GradientButton>
          </>
        )}
        {route === `${import.meta.env.VITE_EMPLOYEES_ROUTE}` && (
          <>
            <GradientButton>
              <IoMdAddCircleOutline />
              إضافة موظف جديد
            </GradientButton>
            <SecondaryButton>
              <RiFileExcel2Line />
              إضافة موظفين جدد
            </SecondaryButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default BreadCrumbSection;
