import { CircularProgress } from '@mui/material';
import { PrimaryButton } from '../../mui/buttons/PrimaryButton';
import { SubmitButtonTypes } from '../../types/components.types';

const SubmitButton = ({
  loading,
  children,
  handling,
  className,
}: SubmitButtonTypes) => {
  const loadingIcon = (
    <CircularProgress sx={{ color: theme => theme.palette.common.white }} />
  );

  const chosenButton = (
    <PrimaryButton
      title={"Submit Form"}
      loadingPosition={"center"}
      loading={loading}
      loadingIndicator={loadingIcon}
      type={"submit"}
      onClick={handling}
      className={className}
    >
      {children}
    </PrimaryButton>
  );

  return chosenButton;
};

export default SubmitButton;
