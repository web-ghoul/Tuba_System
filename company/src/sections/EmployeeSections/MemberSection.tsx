import { Box, Typography } from "@mui/material";
import TableIconButton from "../../components/TableIconButton/TableIconButton";
import { IoMdClose } from "react-icons/io";
import { useModals } from "../../contexts/ModalsContext";
import TextLabel from "../../components/TextLabel/TextLabel";

const MemberSection = () => {
  const { dispatch } = useModals();

  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`flex justify-between items-center gap-4 flex-wrap`}>
        <Typography variant="h5" className={`!font-[700]`}>
          تفاصيل التابع
        </Typography>

        <TableIconButton
          onClick={() => dispatch({ type: "viewMemberModal", payload: false })}
          className={`!text-error_dark !bg-error_100`}
        >
          <IoMdClose />
        </TableIconButton>
      </Box>
      <Box className={`grid justify-stretch items-center gap-8 grid-cols-2`}>
        <TextLabel title={"الاسم"} value={"علي طارق محمود"} variant="member" />
        <TextLabel title={"الجنسية"} value={"مصري"} variant="member" />
        <TextLabel title={"رقم الهوية"} value={"2034567890"} variant="member" />
        <TextLabel title={"الصلة"} value={"الابن"} variant="member" />
        <TextLabel title={"الهاتف"} tel value={"+966-599123466"} variant="member" />
        <TextLabel title={"الجنس"} value={"الذكر"} variant="member" />
        <TextLabel
          title={"تاريخ الميلاد"}
          value={"2024-08-11"}
          variant="member"
        />
        <TextLabel title={"باقة التغطية"} value={"Eghf"} variant="member" />
      </Box>
    </Box>
  );
};

export default MemberSection;
