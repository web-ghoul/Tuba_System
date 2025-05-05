const useUploadEmployees = () => {
  const handleUploadEmployees = () => {
    const employeesFile = document.getElementById(
      "employees"
    ) as HTMLInputElement | null;
    if (employeesFile?.files && employeesFile.files.length > 0) {
      console.log(employeesFile.files[0]);
    } else {
      console.warn("No file selected.");
    }
  };
  return { handleUploadEmployees };
};

export default useUploadEmployees;
