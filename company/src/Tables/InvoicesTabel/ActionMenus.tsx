import { Box } from "@mui/material";
import TableIconButton from "../../components/TableIconButton/TableIconButton";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const ActionMenus = () => {
  return (
    <Box className={`flex justify-center items-center gap-2`}>
      <TableIconButton className={`!bg-green-100 !text-green-600`}>
        <FiEdit />
      </TableIconButton>
      <TableIconButton className={`!bg-red-100 !text-red-600`}>
        <AiOutlineDelete />
      </TableIconButton>
    </Box>
  );
};

export default ActionMenus;
