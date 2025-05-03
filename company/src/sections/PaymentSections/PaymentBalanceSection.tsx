import { Box, Typography } from "@mui/material";

const PaymentBalanceSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-2 text-center`}>
      <Typography variant="subtitle1" className={`!font-[600]`}>
        الرصيد المطلوب
      </Typography>
      <Typography variant="h1" className={`text-red-400 !font-[700]`}>
        20.000
      </Typography>
    </Box>
  );
};

export default PaymentBalanceSection;
