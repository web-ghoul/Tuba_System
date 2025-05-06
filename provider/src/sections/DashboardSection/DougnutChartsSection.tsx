import { Box } from "@mui/material";
import BranchClaimsChart from "../../charts/BranchClaimsChart";
import ClaimsStatusChart from "../../charts/ClaimRequestStatusChart";
const BranchesDougnutChartSection = () => {
    return (
        <Box className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 ">
            {/* Most Requested Services Section (Right) */}
            <div className="bg-white rounded-2xl shadow p-4">
                <BranchClaimsChart />
            </div>
            {/* Invoices Chart Section (Left) */}
            <div className="bg-white rounded-2xl shadow p-4">
              <ClaimsStatusChart />
            </div>
        </Box>
    );
};

export default BranchesDougnutChartSection;
