import { createContext, ReactNode, useContext, useReducer } from "react";

type ModalsState = {
  isOpenWelcomeModal: boolean;
  isOpenEditEmployeePersonInfoModal: boolean;
  isOpenEditEmployeeJobInfoModal: boolean;
  isOpenEditEmployeeMedicalCoverageModal: boolean;
};

type ModalsAction =
  | { type: "welcomeModal"; payload: boolean }
  | { type: "editEmployeePersonInfoModal"; payload: boolean }
  | { type: "editEmployeeJobInfoModal"; payload: boolean }
  | { type: "editEmployeeMedicalCoverageModal"; payload: boolean };

type ModalsContextType = {
  state: ModalsState;
  dispatch: React.Dispatch<ModalsAction>;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const initialState: ModalsState = {
  isOpenWelcomeModal: false,
  isOpenEditEmployeePersonInfoModal: false,
  isOpenEditEmployeeJobInfoModal: false,
  isOpenEditEmployeeMedicalCoverageModal: false,
};

function ModalsReducer(state: ModalsState, action: ModalsAction): ModalsState {
  switch (action.type) {
    case "welcomeModal":
      return { ...state, isOpenWelcomeModal: action.payload };
    case "editEmployeePersonInfoModal":
      return { ...state, isOpenEditEmployeePersonInfoModal: action.payload };
    case "editEmployeeJobInfoModal":
      return { ...state, isOpenEditEmployeeJobInfoModal: action.payload };
    case "editEmployeeMedicalCoverageModal":
      return {
        ...state,
        isOpenEditEmployeeMedicalCoverageModal: action.payload,
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
