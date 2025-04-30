import { Box } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import OTPInput from '../../components/Input/OTPInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { FormsContext } from '../../contexts/FormsContext';
import { FormiksTypes } from '../../types/forms.types';

const OTPForm = ({ setValue }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const [otp, setOtp] = useState('');
  useEffect(() => {
    if (setValue) {
      setValue('otp', otp);
    }
  }, [setValue, otp]);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 sm:justify-center`}
    >
      <Box className={`flex justify-center items-center`}>
        <OTPInput
          separator={<span>-</span>}
          value={otp}
          onChange={setOtp}
          length={6}
        />
      </Box>

      <Box className={`m-auto`}>
        <SubmitButton loading={formsLoading}>Send</SubmitButton>
      </Box>
    </Box>
  );
};

export default OTPForm;
