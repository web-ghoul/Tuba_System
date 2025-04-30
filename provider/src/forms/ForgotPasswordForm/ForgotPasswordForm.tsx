import { Box } from '@mui/material';
import { useContext } from 'react';
import Input from '../../components/Input/Input';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { FormsContext } from '../../contexts/FormsContext';
import { FormiksTypes } from '../../types/forms.types';

const ForgotPasswordForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4`}
    >
      <Box className={`grid justify-stretch items-center gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={'Email'}
          name={'email'}
        />
      </Box>

      <Box className={`m-auto`}>
        <SubmitButton loading={formsLoading}>Send</SubmitButton>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;
