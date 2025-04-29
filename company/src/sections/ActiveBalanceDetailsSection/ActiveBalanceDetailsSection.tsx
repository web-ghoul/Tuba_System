import { Box, Typography } from "@mui/material";
import BalanceCard from "../../components/BalanceCard/BalanceCard";

const ActiveBalanceDetailsSection = () => {
  return (
    <Box className={`paper`}>
      <Typography variant="h6" className="!font-[700]">
        تفاصيل رصيد التنشيط
      </Typography>
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
          <BalanceCard
            title={"الرصيد المتاح"}
            bgColor={"bg-available_balance_card"}
            number={"1200"}
          />
          <BalanceCard
            title={"الرصيد الكلي المطلوب "}
            bgColor={"bg-total_balance_card"}
            number={"1000"}
          />
        </Box>
        <BalanceCard
          title={"المتبقي للتنشيط"}
          bgColor={"bg-remain_balance_card"}
          number={"200"}
        />
      </Box>
    </Box>
  );
};

export default ActiveBalanceDetailsSection;
