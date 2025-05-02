import { Box, Modal } from "@mui/material";
import { CustomModalTypes } from "../types/app.types";

const CustomModal = ({
  children,
  open,
  handleClose,
  className,
}: CustomModalTypes) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal ${className}`}>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
