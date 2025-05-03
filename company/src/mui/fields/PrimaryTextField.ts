import { TextField, styled } from "@mui/material";

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
  minWidth: "auto !important",
  width: "100% !important",
  "& input , & select": {
    padding: "12px 16px !important",
    fontSize: "14px",
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    border: "none !important",
    borderRadius: "12px !important",
    width: "100% !important",
  },
  "& input::focus , & select::focus": {
    outline: "none",
  },
  "& label": {
    fontSize: "14px",
    lineHeight: "1 !important",
  },
  "& label[data-shrink=true]": {
    lineHeight: "1.4375em !important",
    backgroundColor: "#fff",
  },
  "& svg": {
    fontSize: "16px",
  },
  "& input:not(:placeholder-shown)": {
    fontWeight: "600",
  },
  [theme.breakpoints.down("lg")]: {
    "& input , & select": {
      padding: "9px !important",
      fontSize: "13px",
      borderRadius: "10px",
    },
    "& label": {
      lineHeight: "0.7 !important",
      fontSize: "13px",
    },
    "& svg": {
      fontSize: "15px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& input , & select": {
      padding: "8px !important",
      fontSize: "12px",
      borderRadius: "8px",
    },
    "& label": {
      top: "-3px",
      lineHeight: "0.7 !important",
      fontSize: "12px",
    },
    "& svg": {
      fontSize: "14px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& input , & select": {
      padding: "7px !important",
      fontSize: "11px",
      borderRadius: "6px",
    },
    "& label": {
      top: "-3px",
      lineHeight: "0.7 !important",
      fontSize: "12px",
    },
    "& svg": {
      fontSize: "13px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& input , & select": {
      padding: "7px !important",
      fontSize: "11px",
      borderRadius: "4px",
    },
    "& label": {
      top: "-4px",
      lineHeight: "0.8 !important",
      fontSize: "11px",
    },
    "& svg": {
      fontSize: "12px",
    },
  },
  "& select": {
    title: "Select an option",
  },
}));
