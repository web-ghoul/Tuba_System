import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import HeroBannerSection from "../sections/HeroBannerSection/HeroBannerSection";
import BalanceAndClaimsSection from "../sections/DashboardSection/BalanceAndClaimsSection";
import LineChartSection from "../sections/DashboardSection/LineChartSection";
import BranchesDougnutChartSection from "../sections/DashboardSection/DougnutChartsSection";

const Dashboard = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-4`}>
        <HeroBannerSection />
        <LineChartSection />
        <BalanceAndClaimsSection/>
        <BranchesDougnutChartSection />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Dashboard;
