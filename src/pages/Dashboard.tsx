import { Box, Paper, Typography } from "@mui/material";
import Dropdown from "../components/Dropdown/Dropdown";
import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import HeroBannerSection from "../sections/HeroBannerSection/HeroBannerSection";

const Dashboard = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-8`}>
        <HeroBannerSection />
        <Box
          className={`grid justify-stretch items-center gap-8 grid-cols-[30%,1fr]`}
        >
          <Paper className={`paper`}>
            <Box className={`flex justify-between items-center gap-4`}>
              <Typography variant="h6" className={`!font-[700]`}>
                معلومات الرصيد
              </Typography>
              <Dropdown />
            </Box>
          </Paper>
          <Paper className={`paper`}>
            <Box className={`flex justify-between items-center gap-4`}>
              <Typography variant="h6" className={`!font-[700]`}>
                عدد المطالبات 2024
              </Typography>
              <Dropdown />
            </Box>
          </Paper>
        </Box>
        <Box
          className={`grid justify-stretch items-center gap-8 grid-cols-[1fr,25%]`}
        >
          <Paper className={`paper`}>
            <Box className={`flex justify-between items-center gap-4`}>
              <Typography variant="h6" className={`!font-[700]`}>
                الموظفون والمطالبات
              </Typography>
              <Box className={`flex justify-end items-center gap-2`}>
                <Dropdown />
                <Dropdown />
              </Box>
            </Box>
          </Paper>
          <Paper className={`paper`}>
            <Typography variant="h6" className={`!font-[700]`}>
              استخدام الأعضاء
            </Typography>
          </Paper>
        </Box>
        <Box
          className={`grid justify-stretch items-center gap-8 grid-cols-[1fr,40%]`}
        >
          <Paper className={`paper`}>
            <Typography variant="h6" className={`!font-[700]`}>
              أكثر المزودين تعاملا مع الشركة
            </Typography>
          </Paper>
          <Paper className={`paper`}>
            <Typography variant="h6" className={`!font-[700]`}>
              الوصفات الأكثر طلبا
            </Typography>
          </Paper>
        </Box>
        <Paper className={`paper`}>
          <Typography variant="h6" className={`!font-[700]`}>
            اخر المطالبات
          </Typography>
        </Paper>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Dashboard;
