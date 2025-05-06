import { Box } from "@mui/material";
import MostRequestedServices from "../../components/Tables/MostRequestedServices";
import InvoicesChart from "../../charts/InvoicesChart";

const BalanceAndClaimsSection = () => {
    return (
        <Box className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 ">
            {/* Most Requested Services Section (Right) */}
            <div className="bg-white rounded-2xl shadow p-4">
                <MostRequestedServices />
            </div>
            {/* Invoices Chart Section (Left) */}
            <div className="bg-white rounded-2xl shadow p-4">
                <InvoicesChart />
            </div>
        </Box>
    );
};

export default BalanceAndClaimsSection;
