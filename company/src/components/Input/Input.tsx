import { Box, Typography } from "@mui/material";
import { InputTypes } from "../../types/components.types";
import { AllFormiksTypes, FormiksTypes } from "../../types/forms.types";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";

const Input = ({
  formik,
  name,
  label,
  type,
  change,
  ac,
  textarea,
}: InputTypes & FormiksTypes) => {
  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;

  return (
    <Box className={`grid justify-start items-center gap-2 md:gap-1`}>
      <label htmlFor={name} className={`hidden`}>
        {label}
      </label>
      <Typography variant="h6" className={`!font-[400]`}>
        {type === "search" ? "Search" : label}
      </Typography>
      {textarea ? (
        <Box
          component={"textarea"}
          sx={{
            padding: "8px !important",
            fontSize: "15px",
            minWidth: "300px !important",
            minHeight: "40px !important",
            transition: "ease-in-out all 0.3",
            backgroundColor: (theme) => theme.palette.common.white,
            boxShadow: (theme) => theme.shadows["2"],
            borderRadius: "4px",
            border: "1px solid #ddd",
            "&:placeholder": {
              fontSize: "16px",
              lineHeight: "1 !important",
              backgroundColor: "transparent !important",
            },
          }}
          placeholder={`Enter ${label}`}
          onBlur={formik.handleBlur}
        />
      ) : (
        <PrimaryTextField
          fullWidth
          id={name}
          type={type || "text"}
          name={name}
          placeholder={
            type !== "date"
              ? type === "search"
                ? label
                : `Enter ${label}`
              : ""
          }
          value={formik.values[name as keyof AllFormiksTypes]}
          onChange={(e) => {
            const val = e.target.value;
            if (change) {
              change(val);
            }
            if (type === "email") {
              e.target.value = val.toUpperCase();
            }
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          error={error}
          helperText={helperText}
          autoComplete={ac}
        />
      )}
    </Box>
  );
};

export default Input;
