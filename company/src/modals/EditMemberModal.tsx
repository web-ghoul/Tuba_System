import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import Forms from "../forms/Forms";

const EditMemberModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenEditMemberModal}
      handleClose={() => dispatch({ type: "editMemberModal", payload: false })}
      className={`min-w-[50vw]`}
    >
      <Forms type={"editMember"} />
    </CustomModal>
  );
};

export default EditMemberModal;
