import { Box, Button, Typography } from "@mui/material";
import {
  FormiksTypes,
  FilterEmployeesFormTypes,
} from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import CustomMenu from "../../components/CustomMenu/CustomMenu";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { IoIosArrowDown } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import useFilterEmployeesSubmit from "./useFilterEmployeesSubmit";

const FilterEmployeesForm = ({
  formik,
}: FormiksTypes<FilterEmployeesFormTypes>) => {
  const { filterEmployeesLimits } = useFilterEmployeesSubmit();
  const limits = [5, 10, 50, 100];
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Typography variant="subtitle1" className={`text-tuba_gray !font-[600]`}>
        عرض الصفوف
      </Typography>

      <CustomMenu
        button={
          <BasicButton>
            10
            <IoIosArrowDown />
          </BasicButton>
        }
      >
        <Box className={`grid justify-stretch items-center gap-4 p-4`}>
          {limits.map((limit, i) => (
            <Button key={i} onClick={() => filterEmployeesLimits(limit)}>
              {limit}
            </Button>
          ))}
        </Box>
      </CustomMenu>

      <CustomMenu
        button={
          <BasicButton>
            <TbFilterSearch />
            فلترة
          </BasicButton>
        }
      >
        <Box className={`grid justify-stretch items-center gap-6 p-4`}>
          <Box className={`grid justify-stretch items-center gap-4`}>
            <Input formik={formik} label={"الاسم"} name={"name"} />
            <Input
              formik={formik}
              label={"الجنسية"}
              select
              options={["dd", "dd"]}
              name={"nationality"}
            />
            <Input
              formik={formik}
              label={"الجنس"}
              select
              options={["Male", "Female"]}
              name={"gender"}
            />
          </Box>

          <Box
            className={`grid justify-stretch items-center grid-cols-2 gap-3`}
          >
            <SubmitButton loading={false} variant="gradient">
              تطبيق الفلترة
            </SubmitButton>
            <SecondaryButton type={"button"}>إزالة الفلترة</SecondaryButton>
          </Box>
        </Box>
      </CustomMenu>
    </Box>
  );
};

export default FilterEmployeesForm;
