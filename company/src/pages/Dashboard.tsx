import { Box } from "@mui/material";
import CounterCardsSection from "../sections/CounterCardsSection/CounterCardsSection";
import BalanceDetailsSection from "../sections/BalanceDetailsSection/BalanceDetailsSection";
import SubscriptionBalanceDetailsSection from "../sections/SubscriptionBalanceDetailsSection/SubscriptionBalanceDetailsSection";
import EmployeesBalanceDetailsSection from "../sections/EmployeesBalanceDetailsSection/EmployeesBalanceDetailsSection";
import ApprovalsCountSection from "../sections/ApprovalsCountSection/ApprovalsCountSection";
import MostClientsSection from "../sections/MostClientsSection/MostClientsSection";
import MostSellerService from "../sections/MostSellerService/MostSellerService";
import UsedMembersSection from "../sections/UsedMembersSection/UsedMembersSection";
import { useModals } from "../contexts/ModalsContext";
import { PrimaryButton } from "../mui/buttons/PrimaryButton";

const Dashboard = () => {
  const { state, dispatch } = useModals();
  console.log(state);

  return (
    <>
      <PrimaryButton
        onClick={() => dispatch({ type: "welcomeModal", payload: true })}
      >
        Try Modal
      </PrimaryButton>
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
      <ApprovalsCountSection />
    </>
  );
};

export default Dashboard;
