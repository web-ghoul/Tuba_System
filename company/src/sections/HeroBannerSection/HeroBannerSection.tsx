import { Box, Typography } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";

const HeroBannerSection = () => {
  return (
    <Box
      className={`relative grid justify-stretch items-center gap-4 bg-gradient_primary rounded-[12px] h-[200px] p-8 overflow-hidden`}
    >
      <Box className={`text-white grid justify-stretch items-center gap-3`}>
        <Typography variant="h4" className={`!font-[700]`}>
          مرحبا بك ,
        </Typography>
        <Typography variant="h4" className={`!font-[700]`}>
          مدير الحساب
        </Typography>
      </Box>
      <Typography variant="h5" className={`text-gray-300`}>
        هنا تلقى كل التفاصيل اللي تهمك
      </Typography>
      <ImageBox
        src={"/images/dashboard_label_circles.svg"}
        lazy
        className="!absolute left-0 bottom-0"
      />
    </Box>
  );
};

export default HeroBannerSection;
