import { Box, Typography } from "@mui/material";
import TextLabel from "../../components/TextLabel/TextLabel";

const PaymentBalanceDetailsSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Typography variant="h5" className={`!font-[700]`}>
        تفاصيل الحساب
      </Typography>
      <Box className={`grid justify-stretch items-center grid-cols-3 gap-4`}>
        <TextLabel title={"رقم الحساب"} value={"100788867767"} />
        <TextLabel title={"ال IBAN "} value={"100788867767"} />
        <TextLabel title={"رمز سويفت"} value={"100788867767"} />
        <TextLabel title={"الفرع"} value={"100788867767"} />
        <TextLabel title={"اسم الحساب"} value={"100788867767"} />
        <TextLabel title={"نوع الحساب"} value={"100788867767"} />
      </Box>
    </Box>
  );
};

export default PaymentBalanceDetailsSection;
