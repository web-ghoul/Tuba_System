import { ReactNode, createContext, useContext, useState } from 'react';
import { ModalsContextTypes } from '../types/contexts.types';
import { FormsContext } from './FormsContext';

export const ModalsContext = createContext<ModalsContextTypes>({
  openDeleteModal: false,
  handleOpenDeleteModal: () => {},
  handleCloseDeleteModal: () => {},
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: () => {},
  handleCloseForgotPasswordModal: () => {},
});

const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const { setFormType } = useContext(FormsContext);

  //Delete
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = (type: string) => {
    setFormType(type);
    setOpenDeleteModal(true);
  };
  //Delete

  //Forgot Password
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

  const handleCloseForgotPasswordModal = () => {
    setOpenForgotPasswordModal(false);
  };

  const handleOpenForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
  };
  //Forgot Password

  const values = {
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openDeleteModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
  };
  return (
    <ModalsContext.Provider value={values}>{children}</ModalsContext.Provider>
  );
};

export default ModalsProvider;
