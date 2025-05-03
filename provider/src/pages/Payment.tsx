import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BalanceCardChart from "../charts/BalanceCardChart";
import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import BalanceChartsSection from "../sections/PaymentSection/BalanceChartsSection";
import TransactionsTable from "../components/Tables/TransactionsTable";
import { getMedicalProviderBranchDetails, getTransactions } from "../services/dashboardService"; // Update path accordingly

const Payment = () => {
  const [balance, setBalance] = useState(0);
  const [recieved, setRecieved] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getMedicalProviderBranchDetails();
        const data = res?.data?.data[0];
        console.log("branch",data);
        

        setBalance(data?.balance || 0);
        setRecieved(data?.recieved || 0);

        const transactionsRes = await getTransactions();
        console.log("trsn",transactionsRes?.data?.data[0]);
        setTransactions(transactionsRes?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PrimaryContainer className="!grid justify-stretch items-start gap-4">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* Left side - Balance Charts Section */}
          <BalanceChartsSection balance={balance} recieved={recieved} loading={loading} />

          {/* Right side - Empty Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-4">Balance Daily Chart</h3>
            <div className="h-64 flex flex-col items-center justify-center rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5A46E6]/20 to-[#2AD2C5]/20 backdrop-blur-md"></div>
              <div className="filter blur-md bg-gradient-to-r from-[#5A46E6]/40 to-[#2AD2C5]/40 w-3/4 h-32 rounded mb-4 relative z-10"></div>
              <p className="text-[#5A46E6] font-medium text-lg relative z-10">Coming Soon</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <PrimaryContainer className="bg-white rounded-lg shadow p-4">
            <TransactionsTable transactions={transactions} />
          </PrimaryContainer>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Payment;
