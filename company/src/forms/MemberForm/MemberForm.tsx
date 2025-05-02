import { Box, Typography } from "@mui/material";
import { FormiksTypes, MemberFormTypes } from "../../types/forms.types";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useModals } from "../../contexts/ModalsContext";

const MemberForm = ({ formik, type }: FormiksTypes<MemberFormTypes>) => {
  const { dispatch } = useModals();

  return (
    <Box className={`grid justify-stretch items-center gap-10`}>
      <Typography variant="h6" className={`!font-[700]`}>
        {type === "addMember" ? "إضافة عضو جديد" : "تعديل البيانات"}
      </Typography>
      <Box className={`grid justify-stretch items-start grid-cols-2 gap-8`}>
        <Input formik={formik} label={"الاسم"} name={"name"} />
        <Input formik={formik} label={"الجنسية"} name={"nationality"} />
        <Input formik={formik} label={"رقم الهوية"} name={"nationalNo"} />
        <Input formik={formik} label={"الصلة"} name={"relation"} />
        <Input formik={formik} label={"الهاتف"} name={"phone"} />
        <Input formik={formik} label={"الجنس"} name={"gender"} />
        <Input formik={formik} label={"تاريخ الميلاد"} name={"dateOfBirth"} />
        <Input
          formik={formik}
          label={"باقة التغطية"}
          name={"coveragePackage"}
        />
      </Box>
      <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
        <SubmitButton variant="gradient" loading={false}>
          حفظ
        </SubmitButton>
        <BasicButton
          onClick={() =>
            dispatch({
              type: type ? `addMemberModal` : "editMemberModal",
              payload: false,
            })
          }
        >
          إلغاء
        </BasicButton>
      </Box>
    </Box>
  );
};

export default MemberForm;
