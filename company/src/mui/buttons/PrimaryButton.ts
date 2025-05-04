import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
  padding: "8px 16px",
  boxShadow: "none",
  borderWidth: "2px",
  borderStyle: "solid",
  height: "fit-content",
  fontWeight: "600",
  "& > span ": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  },
  "& > span > span": {
    height: "20px !important",
    width: "20px !important",
  },
  "& svg": {
    fontSize: "16px",
  },
  "&:hover": {
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    borderRadius: "3px",
    "& > span": {
      gap: "4px",
    },
    padding: "16px 8px",
    "& > span > span": {
      height: "18px !important",
      width: "18px !important",
    },
    "& svg": {
      fontSize: "13px",
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px 14px",
    "& > span > span": {
      height: "16px !important",
      width: "16px !important",
    },
    "& svg": {
      fontSize: "12px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "2px",
    "& > span": {
      gap: "3px",
    },
    padding: "5px 12px",
    "& > span > span": {
      height: "14px !important",
      width: "14px !important",
    },
    "& svg": {
      fontSize: "10px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& > span": {
      gap: "2px",
    },
    padding: "4px 10px",
    "& > span > span": {
      height: "12px !important",
      width: "12px !important",
    },
  },
}));
