import { IconButton } from "@mui/material";
import { TableIconButtonTypes } from "../../types/components.types";

const TableIconButton = ({ children, className }: TableIconButtonTypes) => {
  return (
    <IconButton
      className={`${className} px-2 !font-[600] !rounded-lg flex justify-center items-centerz`}
      sx={{ "&>svg": { fontSize: "18px" } }}
    >
      {children}
    </IconButton>
  );
};

export default TableIconButton;
