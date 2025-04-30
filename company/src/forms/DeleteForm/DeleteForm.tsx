import { Box } from '@mui/material';
import Button from '../../components/Button/Button';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

const DeleteForm = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-16`}>
      <Box className={`flex justify-center items-center gap-8`}>
        <SubmitButton loading={false}>Delete</SubmitButton>
        <Button
          title={'Cancel'}
          bg={'!bg-red-500'}
        />
      </Box>
    </Box>
  );
};

export default DeleteForm;
