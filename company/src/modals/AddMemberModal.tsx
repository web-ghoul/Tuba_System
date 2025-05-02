import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import Forms from "../forms/Forms";

const AddMemberModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenAddMemberModal}
      handleClose={() => dispatch({ type: "addMemberModal", payload: false })}
      className={`min-w-[50vw]`}
    >
      <Forms type={"addMember"} />
    </CustomModal>
  );
};

export default AddMemberModal;
