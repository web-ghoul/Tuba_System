import { Box, Paper, Typography } from "@mui/material";
import NetworksTable from "../../Tables/NetworksTable/NetworksTable";

const NetworksSection = () => {
  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Typography variant="subtitle1">
          هنا يمكنك استعراض الشبكات التي قمت بإنشائها
        </Typography>
      </Box>
      <NetworksTable />
    </Paper>
  );
};

export default NetworksSection;
