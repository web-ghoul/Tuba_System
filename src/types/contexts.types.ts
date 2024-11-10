interface AppContextProps {
  queries: { [key: string]: string };
  setQueries: (queries: { [key: string]: string }) => void;
  handleAddQuery: (query: { [key: string]: string }) => void;
  handleRemoveQuery: (queryName: string) => void;
}

interface FormsContextTypes {
  formsLoading: boolean;
  handleCloseFormsLoading: () => void;
  handleOpenFormsLoading: () => void;
  formType: string;
  setFormType: (type: string) => void;
}

interface ModalsContextTypes {
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openDeleteModal: boolean;
  handleOpenDeleteModal: (type: string) => void;
  handleCloseDeleteModal: () => void;
}

export type { AppContextProps, FormsContextTypes, ModalsContextTypes };
