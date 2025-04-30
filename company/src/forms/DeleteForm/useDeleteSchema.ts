import * as yup from 'yup';

const useDeleteSchema = () => {
  const DeleteSchema = yup.object({
    type: yup.string(),
  });

  const DeleteInitialValues = {
    type: "",
  };

  return { DeleteSchema, DeleteInitialValues };
};

export default useDeleteSchema;
