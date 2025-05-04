import { Box, Paper, Typography } from "@mui/material";
import NetworksTable from "../../Tables/NetworksTable/NetworksTable";
import Forms from "../../forms/Forms";

const NetworksSection = () => {
  return (
    <Paper className={`paper`}>
      <Box
        className={`grid justify-stretch items-center grid-cols-[65%,1fr] gap-4 flex-wrap`}
      >
        <Typography variant="subtitle1">
          هنا يمكنك استعراض الشبكات التي قمت بإنشائها
        </Typography>
        <Forms type={"searchNetworks"} />
      </Box>
      <NetworksTable />
    </Paper>
  );
};

export default NetworksSection;
