import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import UploadAvatar from "../components/UploadAvatar/UploadAvatar";

const ChangeProfileAvatarModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenChangeProfileAvatarModal}
      handleClose={() =>
        dispatch({ type: "changeProfileAvatarModal", payload: false })
      }
    >
      <UploadAvatar />
    </CustomModal>
  );
};

export default ChangeProfileAvatarModal;
