import { Box, MenuItem } from "@mui/material";
import TableIconButton from "../../components/TableIconButton/TableIconButton";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import CustomMenu from "../../components/CustomMenu/CustomMenu";

const ActionMenus = () => {
  return (
    <Box className={`flex justify-center items-center gap-2`}>
      <TableIconButton className={`!bg-warning_100 !text-warning_dark`}>
        <FiEdit />
      </TableIconButton>
      <TableIconButton className={`!bg-red-100 !text-red-600`}>
        <AiOutlineDelete />
      </TableIconButton>
      <CustomMenu>
        <MenuItem selected={true}>Hello</MenuItem>
      </CustomMenu>
    </Box>
  );
};

export default ActionMenus;
