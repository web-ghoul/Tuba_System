import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import Forms from "../forms/Forms";

const EditEmployeeJobInfoModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenEditEmployeeJobInfoModal}
      handleClose={() =>
        dispatch({ type: "editEmployeeJobInfoModal", payload: false })
      }
      className={`min-w-[60vw]`}
    >
      <Forms type={"editEmployeeJobInfo"} />
    </CustomModal>
  );
};

export default EditEmployeeJobInfoModal;
