import { Box, Paper, Typography } from "@mui/material";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RiFileExcel2Line } from "react-icons/ri";
import { BsFileEarmarkPdf } from "react-icons/bs";
import EmployeesTable from "../../Tables/EmployeesTable/EmployeesTable";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { IoIosArrowDown } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import CustomMenu from "../../components/CustomMenu/CustomMenu";
import Forms from "../../forms/Forms";

const EmployeesSection = () => {
  return (
    <Paper className={"paper"}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Box className={`flex justify-start items-center gap-2`}>
          <Typography
            variant="subtitle1"
            className={`text-tuba_gray !font-[600]`}
          >
            عرض الصفوف
          </Typography>

          <BasicButton>
            10
            <IoIosArrowDown />
          </BasicButton>

          <CustomMenu
            button={
              <BasicButton>
                <TbFilterSearch />
                فلترة
              </BasicButton>
            }
          >
            <Forms type={"filterEmployees"} />
          </CustomMenu>
        </Box>
        <Box className={`flex justify-center items-center gap-2 flex-wrap`}>
          <PrimaryButton>
            <BsFileEarmarkPdf />
            تصدير PDF
          </PrimaryButton>
          <GradientButton>
            <RiFileExcel2Line />
            تصدير XLS
          </GradientButton>
        </Box>
      </Box>
      <EmployeesTable />
    </Paper>
  );
};

export default EmployeesSection;
