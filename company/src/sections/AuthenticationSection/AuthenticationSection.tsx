import { Box, Typography } from "@mui/material";
import Forms from "../../forms/Forms";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";
import { Link } from "react-router-dom";
import AuthSide from "../../components/AuthSide/AuthSide";
import { AuthenticationSectionTypes } from "../../types/sections.types";

const AuthenticationSection = ({ type }: AuthenticationSectionTypes) => {
  return (
    <Box
      className={`grid justify-stretch items-center ${
        type === "updatePassword" ? "" : "grid-cols-[30%,1fr]"
      } min-h-screen`}
    >
      {type !== "updatePassword" && <AuthSide />}
      <PrimaryBox className={`!grid justify-stretch items-center`}>
        <PrimaryContainer
          className={`!grid justify-stretch items-center !m-auto !w-[50%]`}
        >
          <Forms type={type} />
          {type !== "updatePassword" && (
            <Box
              className={`grid justify-stretch items-center gap-2 text-center`}
            >
              <Typography
                variant="subtitle1"
                className={`!font-[700] text-primary text-center`}
              >
                مو الشركة ؟
              </Typography>
              <Typography variant="subtitle2">
                إذا حاب تغير نوع تسجيل الدخول{" "}
                <Link to={""} className={`text-primary !font-[600]`}>
                  اضغط هنا.
                </Link>
              </Typography>
            </Box>
          )}
        </PrimaryContainer>
      </PrimaryBox>
    </Box>
  );
};

export default AuthenticationSection;
