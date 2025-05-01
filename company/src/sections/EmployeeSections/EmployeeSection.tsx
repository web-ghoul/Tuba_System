import { Box, Paper, Typography } from "@mui/material";
import ImageBox from "../../components/ImageBox/ImageBox";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiBag1 } from "react-icons/ci";
import { PiNotepadLight } from "react-icons/pi";

const EmployeeSection = () => {
  return (
    <Paper className={`paper`}>
      <h6 className="!font-[700] paper_head">معلومات الموظف</h6>
      <Box
        className={`flex justify-start items-center grid-rows-1 gap-6 flex-wrap`}
      >
        <Box
          className={`flex justify-stretch items-center gap-4 p-4 pl-12 border-[1px] border-[#E9E9E9] border-solid rounded-lg h-full`}
        >
          <ImageBox
            src={"/images/avatar.png"}
            className={`w-[120px] h-[120px] rounded-full`}
          />
          <Box className={`grid justify-stretch items-center gap-3`}>
            <Typography variant="h5" className={`!font-[700]`}>
              علي طارق محمود
            </Typography>
            <Box className={`flex justify-start items-center gap-2`}>
              <IoMailOutline className={`!text-primary`} />
              <Typography variant="h6">alitarek@gmail.com</Typography>
            </Box>
            <Box className={`flex justify-start items-center gap-2`}>
              <FiPhone className={`!text-primary`} />
              <Typography variant="h6" className={`ltr`}>
                +966 55 123 4567
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          className={` p-4 pl-12 border-[1px] border-[#E9E9E9] border-solid rounded-lg h-full  grid justify-stretch items-center gap-6`}
        >
          <Box
            className={`w-[50px] h-[50px] bg-primary_100 rounded-xl flex justify-center items-center !text-primary !text-3xl`}
          >
            <PiNotepadLight />
          </Box>
          <Box className={`grid justify-stretch items-center gap-2`}>
            <Typography
              variant="subtitle1"
              className={`!text-tuba_gray !font-[600]`}
            >
              عدد المطالبات
            </Typography>
            <Typography variant="h5" className={`!font-[700]`}>
              100
            </Typography>
          </Box>
        </Box>

        <Box
          className={` p-4 pl-12 border-[1px] border-[#E9E9E9] border-solid rounded-lg h-full grid justify-stretch items-center gap-6`}
        >
          <Box
            className={`w-[50px] h-[50px] bg-primary_100 rounded-xl flex justify-center items-center !text-primary !text-3xl`}
          >
            <CiBag1 />
          </Box>

          <Box className={`grid justify-stretch items-center gap-2`}>
            <Typography
              variant="subtitle1"
              className={`!text-tuba_gray !font-[600]`}
            >
              استهلاك الموظف
            </Typography>
            <Typography variant="h5" className={`!font-[700]`}>
              500 ر.س
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default EmployeeSection;
