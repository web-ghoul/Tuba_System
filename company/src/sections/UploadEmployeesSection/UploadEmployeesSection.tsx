import { Box, Divider, Typography } from "@mui/material";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { IoMdDownload } from "react-icons/io";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useModals } from "../../contexts/ModalsContext";
import useUploadEmployees from "../../hooks/useUploadEmployees";

const UploadEmployeesSection = () => {
  const { dispatch } = useModals();
  const { handleUploadEmployees } = useUploadEmployees();

  return (
    <Box className={`grid justify-stretch items-center gap-4 overflow-hidden`}>
      <Box
        className={`bg-gradient_primary p-3 py-4 flex justify-start items-center`}
      >
        <Typography variant="h6" className={`!text-white !font-[700]`}>
          تحميل بيانات الموظفين عبر Excel
        </Typography>
      </Box>

      <Box className={`grid justify-stretch items-center gap-4 p-3`}>
        <Box className={`grid justify-stretch items-center gap-3`}>
          <Step
            title={"الخطوة 1: تجهيز بيانات الموظف"}
            content={
              "يرجى التأكد من أن ملف XLS يتبع تنسيق القالب المقدم. مثلا ال رقم يجب ان يحتوي علي كود المملكة يتبعه -"
            }
          />
          <Divider />
          <Step
            title={"الخطوة 2: مراجعة وتأكيد البيانات"}
            content={"بعد التحميل، يرجى مراجعة البيانات بعناية قبل الإرسال."}
          />
          <Divider />
          <Step
            title={"الخطوة 3: إصلاح أي أخطاء مكتشفة"}
            content={
              "عند اكتشاف أي أخطاء، يرجى إصلاحها جميعًا قبل المحاولة مرة أخرى"
            }
          />
          <Divider />
          <Step
            title={"قالب الموظفين الواجب اتباعه"}
            content={"يرجى تحميل ملف Excel الخاص بك بالتنسيق مثل هذا القالب:"}
            sample
          />
        </Box>

        <label htmlFor="employees" className={`!hidden`}>
          .
        </label>
        <input
          name={"employees"}
          id={"employees"}
          accept=".xlsx"
          title={"employees"}
          type={"file"}
        />

        <Box className={`grid justify-stretch items-center grid-cols-2 gap-4`}>
          <GradientButton onClick={handleUploadEmployees}>تاكيد</GradientButton>
          <BasicButton
            onClick={() =>
              dispatch({ type: "uploadEmployeesModal", payload: false })
            }
          >
            الغاء
          </BasicButton>
        </Box>
      </Box>
    </Box>
  );
};

const Step = ({
  title,
  content,
  sample,
}: {
  title: string;
  content: string;
  sample?: boolean;
}) => {
  return (
    <Box
      className={`bg-[#f1f1f4] p-3 rounded-lg grid justify-stretch items-center gap-1 transition-all hover:shadow-md`}
    >
      <Typography variant="subtitle1" className={`!font-[600]`}>
        {title}
      </Typography>
      <Typography variant="subtitle2" className={`!font-[500]`}>
        {content}
      </Typography>
      {sample && (
        <a href={"samples/employees.xlsx"} download="employees">
          <GradientButton className={`w-fit`}>
            <IoMdDownload />
            قم بتنزيل القالب من هنا
          </GradientButton>
        </a>
      )}
    </Box>
  );
};

export default UploadEmployeesSection;
