import { Box } from "@mui/material";
import TableIconButton from "../../components/TableIconButton/TableIconButton";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useModals } from "../../contexts/ModalsContext";

const ActionMenus = () => {
  const { dispatch } = useModals();

  return (
    <Box className={`flex justify-center items-center gap-2`}>
      <TableIconButton
        onClick={() => dispatch({ type: "editMemberModal", payload: true })}
        className={`!bg-warning_100 !text-warning_dark`}
      >
        <FiEdit />
      </TableIconButton>
      <TableIconButton className={`!bg-error_100 !text-error_dark`}>
        <AiOutlineDelete />
      </TableIconButton>
    </Box>
  );
};

export default ActionMenus;
