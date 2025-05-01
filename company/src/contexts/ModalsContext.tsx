import { createContext, ReactNode, useContext, useReducer } from "react";

type ModalsState = {
  isOpenWelcomeModal: boolean;
};

type ModalsAction = { type: "welcomeModal"; payload: boolean };

type ModalsContextType = {
  state: ModalsState;
  dispatch: React.Dispatch<ModalsAction>;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const initialState: ModalsState = { isOpenWelcomeModal: false };

function ModalsReducer(state: ModalsState, action: ModalsAction): ModalsState {
  switch (action.type) {
    case "welcomeModal":
      return { ...state, isOpenWelcomeModal: action.payload };
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
