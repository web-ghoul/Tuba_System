import { Paper,Box } from "@mui/material";
import BalanceCard from "../../components/BalanceCard/BalanceCard";

const SubscriptionBalanceDetailsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className="!font-[700] paper_head">تفاصيل رصيد الإشتراك</h6>
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
          <BalanceCard
            title={"الرصيد المتاح للإشتراك"}
            bgColor={"bg-primary_light"}
            number={"1200"}
          />
          <BalanceCard
            title={"الرصيد المطلوب للإشتراك "}
            bgColor={"bg-required_balance_card"}
            number={"1000"}
          />
        </Box>
        <BalanceCard
          title={"الرصيد المتبقي للإشتراك"}
          bgColor={"bg-remain_balance_card"}
          number={"200"}
        />
      </Box>
    </Paper>
  );
};

export default SubscriptionBalanceDetailsSection;
