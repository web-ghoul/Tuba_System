import { Box } from "@mui/material";
import EmployeesLineChart from "../../charts/EmployeesLineChart";

const LineChartSection = () => {
    return (
        <Box className="grid grid-cols-1 md:grid-cols-1 mt-4 ">

          <EmployeesLineChart/>
           
        </Box>
    );
};

export default LineChartSection;
