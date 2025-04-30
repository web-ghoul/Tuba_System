import { createContext, ReactNode, useContext, useReducer } from "react";

type TabsState = {
  employeeTab: number;
};

type TabsAction = 
  | { type: "EMPLOYEE"; payload: number };

type TabsContextType = {
  state: TabsState;
  dispatch: React.Dispatch<TabsAction>;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const initialState: TabsState = { employeeTab: 0 };

function TabsReducer(state: TabsState, action: TabsAction): TabsState {
  switch (action.type) {
    case "EMPLOYEE":
      return { ...state, employeeTab: action.payload };
    default:
      return state;
  }
}

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(TabsReducer, initialState);

  return (
    <TabsContext.Provider value={{ state, dispatch }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
