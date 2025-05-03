import { Box, Button, Typography } from "@mui/material";
import {
  FormiksTypes,
  FilterApprovalsFormTypes,
} from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import CustomMenu from "../../components/CustomMenu/CustomMenu";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { IoIosArrowDown } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import useFilterApprovalsSubmit from "./useFilterApprovalsSubmit";

const FilterApprovalsForm = ({
  formik,
}: FormiksTypes<FilterApprovalsFormTypes>) => {
  const { filterApprovalsLimits } = useFilterApprovalsSubmit();
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
            <Button key={i} onClick={() => filterApprovalsLimits(limit)}>
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
            <Input formik={formik} label={"المزودين"} name={"members"} />
            <Input
              formik={formik}
              label={"الموظفين"}
              select
              options={["dd", "dd"]}
              name={"employees"}
            />
            <Input
              formik={formik}
              label={"وثيقة التغطية"}
              name={"coverageDoc"}
            />
            <Input
              formik={formik}
              label={"الحالة"}
              select
              options={["dd", "dd"]}
              name={"status"}
            />
            <Input
              formik={formik}
              label={"تاريخ الإصدار"}
              name={"date"}
              type={"date"}
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

export default FilterApprovalsForm;
