import { CircularProgress } from "@mui/material";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { SubmitButtonTypes } from "../../types/components.types";
import { GradientButton } from "../../mui/buttons/GradientButton";

const SubmitButton = ({
  loading,
  children,
  handling,
  className,
  variant,
}: SubmitButtonTypes) => {
  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const props = {
    title: "Submit Form",
    loadingPosition: "center" as const,
    loading: loading,
    loadingIndicator: loadingIcon,
    type: "submit" as const,
    onClick: handling,
    className: className,
  };

  const chosenButton =
    variant === "gradient" ? (
      <GradientButton {...props}>{children}</GradientButton>
    ) : (
      <PrimaryButton {...props}>{children}</PrimaryButton>
    );

  return chosenButton;
};

export default SubmitButton;
