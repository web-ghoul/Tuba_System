import { Box, Typography } from "@mui/material";
import MostRequestedServices from "../../components/Tables/MostRequestedServices";
import InvoicesChart from "../../charts/InvoicesChart";
import ClaimsLineChart from "../../charts/ClaimsLineChart";

const LineChartSection = () => {
    return (
        <Box className="grid grid-cols-1 md:grid-cols-1 mt-4 ">

          <ClaimsLineChart/>
           
        </Box>
    );
};

export default LineChartSection;
