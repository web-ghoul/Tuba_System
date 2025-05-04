export const handleGetFileFromServer = (file: string) => {
  return `${import.meta.env.VITE_BACKEND_URL}${file}`;
};
