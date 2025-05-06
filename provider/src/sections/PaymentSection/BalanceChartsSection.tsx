import { Box } from "@mui/material";

import BalanceCardChart from "../../charts/BalanceCardChart";
type BalanceChartsSectionProps = {
    balance: number;
    recieved: number;
    loading: boolean;
  };
  
const BalanceChartsSection = ({balance,recieved} :BalanceChartsSectionProps)  => {
    return (
        <Box className="flex justify-center w-full ">
            <div className="w-full md:w-1/2">
                {/* <div className="bg-white rounded-2xl shadow p-4 w-full"> */}
                    {/* First Balance Chart */}
                    <div className="mb-4">
                        <BalanceCardChart balance={balance}  />
                    </div>

                    {/* Second Balance Chart */}
                    <div>
                        <BalanceCardChart balance ={recieved} />
                    </div>
                {/* </div> */}
            </div>
        </Box>
    );
};

export default BalanceChartsSection;
