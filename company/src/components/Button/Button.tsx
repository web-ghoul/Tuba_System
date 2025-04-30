import { CircularProgress, Typography } from "@mui/material";
import { handleToaster } from "../../functions/handleToaster";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { PrimaryIconButton } from "../../mui/buttons/PrimaryIconButton";
import { ButtonTypes } from "../../types/components.types";

const Button = ({
  title,
  icon,
  bg,
  variant,
  handling,
  type,
  loading,
}: ButtonTypes) => {
  const classes = `${
    bg === "excel"
      ? `!bg-excel hover:!bg-green-950`
      : bg && `${bg} hover:${bg.replace("5", "6")}`
  }`;

  const handleClick = () => {
    const newVar = variant?.toLowerCase();
    if (newVar === "under development") {
      handleToaster({ msg: "Under Development..." });
    }
  };

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  return title ? (
    <PrimaryButton
      type={type || "button"}
      onClick={handling || handleClick}
      className={classes}
      loadingPosition={"center"}
      loading={loading}
      loadingIndicator={loadingIcon}
    >
      {icon}
      <Typography variant="button">{title}</Typography>
    </PrimaryButton>
  ) : (
    <PrimaryIconButton
      onClick={handling}
      loadingPosition={"center"}
      loading={loading}
      loadingIndicator={loadingIcon}
      className={classes}
    >
      {icon}
    </PrimaryIconButton>
  );
};

export default Button;
