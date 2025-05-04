import { Box } from "@mui/material";
import {
  FormiksTypes,
  FilterProvidersFormTypes,
} from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";
import CustomMenu from "../../components/CustomMenu/CustomMenu";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { TbFilterSearch } from "react-icons/tb";

const FilterProvidersForm = ({
  formik,
}: FormiksTypes<FilterProvidersFormTypes>) => {
  return (
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
            label={"النوع"}
            select
            options={["dd", "dd"]}
            name={"type"}
          />
          <Input
            formik={formik}
            label={"مقدمو الخدمة"}
            select
            options={["Male", "Female"]}
            name={"provider"}
          />
          <Input
            formik={formik}
            label={"مستوي الشبكة"}
            select
            options={["Male", "Female"]}
            name={"networkLevel"}
          />
        </Box>

        <Box className={`grid justify-stretch items-center grid-cols-2 gap-3`}>
          <SubmitButton loading={false} variant="gradient">
            تطبيق الفلترة
          </SubmitButton>
          <SecondaryButton type={"button"}>إزالة الفلترة</SecondaryButton>
        </Box>
      </Box>
    </CustomMenu>
  );
};

export default FilterProvidersForm;
