import { Box, Divider, Paper, Typography } from "@mui/material";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Forms from "../../forms/Forms";
import ProviderBox from "../../components/ProviderBox/ProviderBox";

const NetworkSection = () => {
  const navigate = useNavigate();

  return (
    <Paper className={`paper`}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Forms type={"filterProviders"} />
        <GradientButton
          onClick={() => navigate(`${import.meta.env.VITE_NETWORKS_ROUTE}/add`)}
        >
          <IoAddCircleOutline />
          إضافة شبكة خاصة بك
        </GradientButton>
      </Box>
      <Divider />
      <Box
        className={`grid justify-stretch items-start grid-cols-2 gap-8`}
      >
        <Box className={`grid justify-stretch items-center gap-6`}>
          <Typography variant="h5" className={`!font-[700]`}>
            مقدمو الخدمات الطبية
          </Typography>
          <Box className={`grid justify-stretch items-center gap-5 max-h-[500px] overflow-y-scroll`}>
            <ProviderBox
              image={""}
              name={"مستشفى الملك فيصل التخصصي - الرياض"}
              type={"مستشفى"}
              networkLevel={"1"}
            />
            <Divider />
            <ProviderBox
              image={""}
              name={"مستشفى الملك فيصل التخصصي - الرياض"}
              type={"مستشفى"}
              networkLevel={"1"}
            />
            <Divider />
            <ProviderBox
              image={""}
              name={"مستشفى الملك فيصل التخصصي - الرياض"}
              type={"مستشفى"}
              networkLevel={"1"}
            />
            <Divider />
            <ProviderBox
              image={""}
              name={"مستشفى الملك فيصل التخصصي - الرياض"}
              type={"مستشفى"}
              networkLevel={"1"}
            />
            <Divider />
            <ProviderBox
              image={""}
              name={"مستشفى الملك فيصل التخصصي - الرياض"}
              type={"مستشفى"}
              networkLevel={"1"}
            />
            <Divider />
            <ProviderBox
              image={""}
              name={"مستشفى الملك فيصل التخصصي - الرياض"}
              type={"مستشفى"}
              networkLevel={"1"}
            />
          </Box>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d884650.8184522742!2d31.608731!3d29.9889912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855e126df199d%3A0x24a6cf9d2fda5678!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1746349468957!5m2!1sen!2seg"
          width="100%"
          height="100%"
          className={`!border-none rounded-lg`}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Paper>
  );
};

export default NetworkSection;
