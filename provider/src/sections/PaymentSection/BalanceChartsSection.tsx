import { Box, Typography } from "@mui/material";
import MostRequestedServices from "../../components/Tables/MostRequestedServices";
import InvoicesChart from "../../charts/InvoicesChart";
import BalanceCardChart from "../../charts/BalanceCardChart";

const BalanceChartsSection = () => {
    return (
        <Box className="flex justify-center w-full ">
            <div className="w-full md:w-1/2">
                {/* <div className="bg-white rounded-2xl shadow p-4 w-full"> */}
                    {/* First Balance Chart */}
                    <div className="mb-4">
                        <BalanceCardChart />
                    </div>

                    {/* Second Balance Chart */}
                    <div>
                        <BalanceCardChart />
                    </div>
                {/* </div> */}
            </div>
        </Box>
    );
};

export default BalanceChartsSection;
