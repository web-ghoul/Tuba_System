import { createContext, ReactNode, useContext, useReducer } from "react";

type FormsState = {
  isLoading: boolean;
};

type FormsAction = { type: "loading"; payload: boolean };

type FormsContextType = {
  state: FormsState;
  dispatch: React.Dispatch<FormsAction>;
};

const FormsContext = createContext<FormsContextType | undefined>(undefined);

const initialState: FormsState = { isLoading: false };

function FormsReducer(state: FormsState, action: FormsAction): FormsState {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export const FormsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(FormsReducer, initialState);

  return (
    <FormsContext.Provider value={{ state, dispatch }}>
      {children}
    </FormsContext.Provider>
  );
};

export const useForms = (): FormsContextType => {
  const context = useContext(FormsContext);
  if (!context) {
    throw new Error("useTabs must be used within a FormsProvider");
  }
  return context;
};
