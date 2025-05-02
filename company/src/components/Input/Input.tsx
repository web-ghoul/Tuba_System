import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { MouseEvent, useMemo, useState } from "react";
import { InputTypes } from "../../types/components.types";
import { AllFormiksTypes, AllFormsTypes, FormiksTypes } from "../../types/forms.types";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";

const Input = <T extends AllFormsTypes>({
  formik,
  name,
  label,
  type,
  select,
  options,
  change,
  ac,
  textarea,
}: InputTypes & FormiksTypes<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;

  return useMemo(
    () => (
      <Box
        className={`grid justify-stretch w-full items-center gap-2 md:gap-1`}
      >
        <Typography id={`label-${name}`} variant="subtitle1" className={`!font-[400]`}>
          {type === "search" ? "Search" : label}
        </Typography>
        <label htmlFor={name} className={`!hidden`}>
          .
        </label>
        {select ? (
          <PrimaryTextField
            fullWidth
            id={name}
            name={name}
            select
            slotProps={{
              select: {
                native: true,
                inputProps: {
                  title: label,
                  id: name,
                  "aria-label": label,
                },
              },
            }}
            value={formik.values[name as keyof AllFormiksTypes]}
            onChange={(e) => {
              if (change) {
                change(e.target.value);
              }
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            error={error}
            helperText={helperText}
          >
            <option value={""}>{`Select ${label}`}</option>
            {options &&
              options.map((option: string, i: number) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
          </PrimaryTextField>
        ) : textarea ? (
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
            id={name}
            name={name}
            defaultValue={
              formik.values[name as keyof AllFormiksTypes] as string
            }
            onChange={(e) => {
              const val = (e.target as HTMLTextAreaElement).value;
              if (change) {
                change(val);
              }
              formik.handleChange(e);
            }}
            placeholder={`Enter ${label}`}
          />
        ) : (
          <PrimaryTextField
            fullWidth
            id={name}
            type={
              type
                ? type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
                : "text"
            }
            name={name}
            InputProps={
              type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffRounded />
                          ) : (
                            <VisibilityRounded />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : {}
            }
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
              if (
                !(
                  type === "email" ||
                  label?.toLowerCase() === "username" ||
                  label?.toLowerCase() === "website"
                )
              ) {
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
    ),
    [
      ac,
      change,
      error,
      formik,
      helperText,
      label,
      name,
      options,
      select,
      showPassword,
      textarea,
      type,
    ]
  );
};

export default Input;
