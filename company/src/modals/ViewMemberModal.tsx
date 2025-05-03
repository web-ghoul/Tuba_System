import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";

const ViewMemberModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenViewMemberModal}
      handleClose={() => dispatch({ type: "viewMemberModal", payload: false })}
      className={`min-w-[50vw]`}
    >
        <></>
    </CustomModal>
  );
};

export default ViewMemberModal;
