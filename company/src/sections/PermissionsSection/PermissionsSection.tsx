import { Box, Typography } from "@mui/material";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoMdAddCircleOutline } from "react-icons/io";
import PermissionsTable from "../../Tables/PermissionsTable/PermissionsTable";
import { useNavigate } from "react-router-dom";

const PermissionsSection = () => {
  const navigate = useNavigate();

  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Typography variant="h5" className={`!font-[600]`}>
          الأدوار الوظيفية
        </Typography>
        <GradientButton
          onClick={() =>
            navigate(`${import.meta.env.VITE_PERMISSIONS_ROUTE}/add`)
          }
        >
          <IoMdAddCircleOutline />
          إضافة دور جديد
        </GradientButton>
      </Box>
      <PermissionsTable />
    </Box>
  );
};

export default PermissionsSection;
