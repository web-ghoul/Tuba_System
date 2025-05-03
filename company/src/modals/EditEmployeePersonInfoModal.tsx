import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import Forms from "../forms/Forms";

const EditEmployeePersonInfoModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenEditEmployeePersonInfoModal}
      handleClose={() => dispatch({ type: "editEmployeePersonInfoModal", payload: false })}
      className={`min-w-[50vw]`}
    >
      <Forms type={"editEmployeePersonInfo"} />
    </CustomModal>
  );
};

export default EditEmployeePersonInfoModal;
