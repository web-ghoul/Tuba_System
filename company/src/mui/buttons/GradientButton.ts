import { styled } from "@mui/material/styles";
import { PrimaryButton } from "./PrimaryButton";

export const GradientButton = styled(PrimaryButton)(() => ({
  color: "#fff",
  backgroundImage: "linear-gradient(90deg,#2ad2c5 20% ,#5a46e6 100%)",
  "&:hover": {
    backgroundImage: "linear-gradient(90deg,#5a46e6 20% ,#2ad2c5 100%)",
    color:"#fff !important",
  },
}));
