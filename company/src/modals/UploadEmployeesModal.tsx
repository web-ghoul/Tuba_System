import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import Forms from "../forms/Forms";
import UploadEmployeesSection from "../sections/UploadEmployeesSection/UploadEmployeesSection";

const UploadEmployeesModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenUploadEmployeesModal}
      handleClose={() =>
        dispatch({ type: "uploadEmployeesModal", payload: false })
      }
      className={`min-w-[50vw] !p-0`}
    >
      <UploadEmployeesSection />
    </CustomModal>
  );
};

export default UploadEmployeesModal;
