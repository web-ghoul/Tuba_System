import { styled } from "@mui/material/styles";
import { PrimaryButton } from "./PrimaryButton";

export const ErrorButton = styled(PrimaryButton)(() => ({
  color: "#FF2828",
  backgroundColor: "#fff",
  borderColor: "#FF2828",
  borderWidth: "2px",
  borderStyle: "solid",
  "&:hover": {
    backgroundColor: "#FF2828",
    borderColor: "#fff",
    color: "#fff",
  },
}));
