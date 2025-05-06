import { Box } from '@mui/material';
import useSubmitForm from '../hooks/useSubmitForm';
import { FormsTypes } from '../types/forms.types';
import DeleteForm from './DeleteForm/DeleteForm';

import LoginForm from './LoginForm/LoginForm';


const Forms = ({ type }: FormsTypes) => {
  const { register, handleSubmitForm, errors, setValue, getValues } =
    useSubmitForm(type);

  return (
    <Box component={'form'} onSubmit={handleSubmitForm}>
      {/* Delete */}
      {type === 'delete' && <DeleteForm />}
      {/* Delete */}

      {/* Authentication */}
      {type === 'login' && (
        <LoginForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          type={type}
        />
      )}
      {/* Authentication */}
    </Box>
  );
};

export default Forms;
