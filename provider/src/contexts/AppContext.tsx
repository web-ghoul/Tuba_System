import { createContext, useState } from 'react';
import { AppContextProps } from '../types/contexts.types';

export const AppContext = createContext<AppContextProps>({
  queries: {},
  setQueries: () => {},
  handleAddQuery: () => {},
  handleRemoveQuery: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const AuthRoutes = [
    `${import.meta.env.VITE_LOGIN_ROUTE}`,
    `${import.meta.env.VITE_RESET_PASSWORD_ROUTE}`,
    `${import.meta.env.VITE_OTP_ROUTE}`,
  ];

  //Queries
  const [queries, setQueries] = useState<{ [key: string]: string }>({});

  const handleAddQuery = (query: { [key: string]: string }) => {
    setQueries({ ...queries, ...query });
  };

  const handleRemoveQuery = (queryName: string) => {
    const q: { [key: string]: string } = { ...queries };
    delete q[queryName];
    setQueries(q);
  };

  const values = {
    AuthRoutes,
    queries,
    setQueries,
    handleAddQuery,
    handleRemoveQuery,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
