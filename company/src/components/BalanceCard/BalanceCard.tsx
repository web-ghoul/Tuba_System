import { Box, Button, Typography } from "@mui/material";
import { BalanceCardTypes } from "../../types/components.types";
import ImageBox from "../ImageBox/ImageBox";

const BalanceCard = ({ number, title, bgColor, btn }: BalanceCardTypes) => {
  return (
    <Box className={`balance_card !${bgColor}`}>
      <ImageBox src={"images/balance_icon.svg"} lazy className="w-[30px]" />
      <Box className={`flex justify-between items-center flex-wrap gap-4`}>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6" className={`!font-[700]`}>
            {number}
          </Typography>
          <Typography variant="subtitle1" className={`!font-[500]`}>
            {title}
          </Typography>
        </Box>
        {btn && <Button>دفع</Button>}
      </Box>
    </Box>
  );
};

export default BalanceCard;
