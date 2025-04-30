import { createContext, useState } from 'react';
import { FormsContextTypes } from '../types/contexts.types';

export const FormsContext = createContext<FormsContextTypes>({
  formsLoading: false,
  handleCloseFormsLoading: () => {},
  handleOpenFormsLoading: () => {},
  formType: '',
  setFormType: () => {},
});

const FormsProvider = ({ children }: { children: React.ReactNode }) => {
  //Loading Form
  const [formsLoading, setFormsLoading] = useState(false);
  const handleCloseFormsLoading = () => {
    setFormsLoading(false);
  };

  const handleOpenFormsLoading = () => {
    setFormsLoading(true);
  };

  //Form Type
  const [formType, setFormType] = useState('');

  const values = {
    formsLoading,
    handleCloseFormsLoading,
    handleOpenFormsLoading,
    formType,
    setFormType,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;
