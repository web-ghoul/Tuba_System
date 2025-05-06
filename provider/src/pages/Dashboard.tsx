import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import HeroBannerSection from "../sections/HeroBannerSection/HeroBannerSection";
import BalanceAndClaimsSection from "../sections/DashboardSection/BalanceAndClaimsSection";
import LineChartSection from "../sections/DashboardSection/LineChartSection";
import BranchesDougnutChartSection from "../sections/DashboardSection/DougnutChartsSection";
import {  getClaim } from "../services/dashboardService";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [, setProviderDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchProviderDetails = async () => {
      try {

        const response = await getClaim('CLR-3');
        console.log(response.data.data);
        


        if (Array.isArray(response.data.data) && response.data.data.length > 0) {
          setProviderDetails(response.data.data[0]);
          let provider = response.data.data[0];
          // Store logo, name and name1 in localStorage
          localStorage.setItem('providerLogo', provider.logo || '');
          localStorage.setItem('providerName', provider.name || '');
          localStorage.setItem('providerName1', provider.name1 || '');
          localStorage.setItem('BranchName', provider.branch || '');
          console.log("Medical Provider First Entry:", response.data.data[0]);
        } else {
          console.warn("No provider data found.");
        }
      } catch (error) {
        console.error("Error fetching provider details:", error);
      }
    };

    fetchProviderDetails();
  }, []);
  return (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-4`}>
        <HeroBannerSection />
        <LineChartSection />
        <BalanceAndClaimsSection />
        <BranchesDougnutChartSection />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Dashboard;
