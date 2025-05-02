import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import Forms from "../forms/Forms";

const EditEmployeeMedicalCoverageModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenEditEmployeeMedicalCoverageModal}
      handleClose={() =>
        dispatch({ type: "editEmployeeMedicalCoverageModal", payload: false })
      }
      className={`min-w-[50vw]`}
    >
      <Forms type={"editEmployeeMedicalCoverage"} />
    </CustomModal>
  );
};

export default EditEmployeeMedicalCoverageModal;
