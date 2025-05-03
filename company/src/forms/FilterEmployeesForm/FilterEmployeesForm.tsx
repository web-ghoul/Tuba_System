import { Box } from "@mui/material";
import {
  FormiksTypes,
  FilterEmployeesFormTypes,
} from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { SecondaryButton } from "../../mui/buttons/SecondaryButton";

const FilterEmployeesForm = ({
  formik,
}: FormiksTypes<FilterEmployeesFormTypes>) => {
  return (
    <Box className={`grid justify-stretch items-center gap-4 p-4`}>
      <Box className={`grid justify-stretch items-center gap-3`}>
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

      <Box className={`grid justify-stretch items-center grid-cols-2 gap-3`}>
        <SubmitButton loading={false} variant="gradient">
          تطبيق الفلترة
        </SubmitButton>
        <SecondaryButton type={"button"}>إزالة الفلترة</SecondaryButton>
      </Box>
    </Box>
  );
};

export default FilterEmployeesForm;
