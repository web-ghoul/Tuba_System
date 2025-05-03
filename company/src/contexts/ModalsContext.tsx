import { createContext, ReactNode, useContext, useReducer } from "react";

type ModalsState = {
  isOpenWelcomeModal: boolean;
  isOpenChangeProfileAvatarModal: boolean;
  isOpenEditEmployeePersonInfoModal: boolean;
  isOpenEditEmployeeJobInfoModal: boolean;
  isOpenEditEmployeeMedicalCoverageModal: boolean;
  isOpenAddMemberModal: boolean;
  isOpenEditMemberModal: boolean;
  isOpenViewMemberModal: boolean;
};

type ModalsAction =
  | { type: "welcomeModal"; payload: boolean }
  | { type: "changeProfileAvatarModal"; payload: boolean }
  | { type: "editEmployeePersonInfoModal"; payload: boolean }
  | { type: "editEmployeeJobInfoModal"; payload: boolean }
  | { type: "editEmployeeMedicalCoverageModal"; payload: boolean }
  | { type: "addMemberModal"; payload: boolean }
  | { type: "editMemberModal"; payload: boolean }
  | { type: "viewMemberModal"; payload: boolean };

type ModalsContextType = {
  state: ModalsState;
  dispatch: React.Dispatch<ModalsAction>;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const initialState: ModalsState = {
  isOpenWelcomeModal: false,
  isOpenChangeProfileAvatarModal: false,
  isOpenEditEmployeePersonInfoModal: false,
  isOpenEditEmployeeJobInfoModal: false,
  isOpenEditEmployeeMedicalCoverageModal: false,
  isOpenAddMemberModal: false,
  isOpenEditMemberModal: false,
  isOpenViewMemberModal: false,
};

function ModalsReducer(state: ModalsState, action: ModalsAction): ModalsState {
  switch (action.type) {
    case "welcomeModal":
      return { ...state, isOpenWelcomeModal: action.payload };
    case "changeProfileAvatarModal":
      return {
        ...state,
        isOpenChangeProfileAvatarModal: action.payload,
      };
    case "editEmployeePersonInfoModal":
      return { ...state, isOpenEditEmployeePersonInfoModal: action.payload };
    case "editEmployeeJobInfoModal":
      return { ...state, isOpenEditEmployeeJobInfoModal: action.payload };
    case "editEmployeeMedicalCoverageModal":
      return {
        ...state,
        isOpenEditEmployeeMedicalCoverageModal: action.payload,
      };
    case "addMemberModal":
      return { ...state, isOpenAddMemberModal: action.payload };
    case "editMemberModal":
      return { ...state, isOpenEditMemberModal: action.payload };
    case "viewMemberModal":
      return {
        ...state,
        isOpenViewMemberModal: action.payload,
      };
    default:
      return state;
  }
}

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ModalsReducer, initialState);

  return (
    <ModalsContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = (): ModalsContextType => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useTabs must be used within a ModalsProvider");
  }
  return context;
};
