import { Box } from "@mui/material";
import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import CounterCardsSection from "../sections/CounterCardsSection/CounterCardsSection";
import BalanceDetailsSection from "../sections/BalanceDetailsSection/BalanceDetailsSection";
import SubscriptionBalanceDetailsSection from "../sections/SubscriptionBalanceDetailsSection/SubscriptionBalanceDetailsSection";
import EmployeesBalanceDetailsSection from "../sections/EmployeesBalanceDetailsSection/EmployeesBalanceDetailsSection";
import ApprovalsSection from "../sections/ApprovalsSection/ApprovalsSection";
import MostClientsSection from "../sections/MostClientsSection/MostClientsSection";
import MostSellerService from "../sections/MostSellerService/MostSellerService";
import UsedMembersSection from "../sections/UsedMembersSection/UsedMembersSection";

const Dashboard = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-8`}>
        <CounterCardsSection />
        <BalanceDetailsSection />
        <Box className={`grid justify-stretch items-start grid-cols-2 gap-4`}>
          <SubscriptionBalanceDetailsSection />
          <EmployeesBalanceDetailsSection />
        </Box>
        <Box className={`grid justify-stretch items-start grid-cols-2 gap-4`}>
          <UsedMembersSection />
          <MostSellerService />
        </Box>
        <MostClientsSection />
        <ApprovalsSection />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Dashboard;
