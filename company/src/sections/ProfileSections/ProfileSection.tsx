import { Box, Paper, Typography } from "@mui/material";
import ProfileTitle from "../../components/ProfileTitle/ProfileTitle";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { handleGetFileFromServer } from "../../functions/handleGetFileFromServer";

const ProfileSection = () => {
  const { profile } = useSelector((state: RootState) => state.profile);
  console.log(profile);

  return (
    <Paper className={`paper`}>
      <ProfileAvatar image={handleGetFileFromServer(profile?.logo || "")} />
      <Box className={`grid justify-stretch items-center gap-3`}>
        <Typography variant="h5" className={`!font-[700]`}>
          {profile?.name1}
        </Typography>
        <Box className={`grid justify-stretch items-center gap-4`}>
          <ProfileTitle title={"معلومات الشركة"} />
          <Box
            className={`grid justify-stretch items-center grid-cols-2 gap-4`}
          >
            <CompanyInfo title={"السجل التجاري :"} info={"1010234567"} />
            <CompanyInfo title={"رقم الضريبة :"} info={"1010234567"} />
            <CompanyInfo title={"البريد الإلكتروني :"} info={"info@tuba.com"} />
            <CompanyInfo title={"رقم الهاتف :"} info={"+966 55 123 4567"} />
          </Box>
        </Box>
        <Box className={`grid justify-stretch items-center gap-4`}>
          <ProfileTitle title={"معلومات الرصيد"} />
          <Box
            className={`grid justify-stretch items-center grid-cols-2 gap-4`}
          >
            <BalanceInfo title={"الرصيد المتاح :"} info={"20000"} />
            <BalanceInfo title={"الرصيد المستهلك :"} info={"1000"} />
            <BalanceInfo title={"الرصيد المطلوب :"} info={"500"} />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const CompanyInfo = ({ title, info }: { title: string; info: string }) => {
  return (
    <Box className={`grid justify-stretch items-center gap-1`}>
      <Typography variant="subtitle2" className={`!font-[500] text-tuba_gray`}>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={`!font-[600]`}>
        {info}
      </Typography>
    </Box>
  );
};

const BalanceInfo = ({ title, info }: { title: string; info: string }) => {
  return (
    <Box className={`grid justify-stretch items-center gap-1`}>
      <Typography variant="subtitle2" className={`!font-[500] text-tuba_gray`}>
        {title}
      </Typography>
      <Typography variant="h6" className={`!font-[700]`}>
        {info}
      </Typography>
    </Box>
  );
};

export default ProfileSection;
