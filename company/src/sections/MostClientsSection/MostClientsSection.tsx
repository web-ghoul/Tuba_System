import { Paper } from "@mui/material";
import MostClientsTable from "../../Tables/MostClientsTable/MostClientsTable";

const MostClientsSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className={`!font-[700] paper_head`}>
        أكثر المزودين تعاملا مع الشركة
      </h6>
      <MostClientsTable />
    </Paper>
  );
};

export default MostClientsSection;
