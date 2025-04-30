import { Box } from '@mui/material';
import { useContext } from 'react';
import Button from '../../components/Button/Button';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { FormsContext } from '../../contexts/FormsContext';
import { ModalsContext } from '../../contexts/ModalsContext';

const DeleteForm = () => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseDeleteModal } = useContext(ModalsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-16`}>
      <Box className={`flex justify-center items-center gap-8`}>
        <SubmitButton loading={formsLoading}>Delete</SubmitButton>
        <Button
          title={'Cancel'}
          handling={handleCloseDeleteModal}
          bg={'!bg-red-500'}
        />
      </Box>
    </Box>
  );
};

export default DeleteForm;
