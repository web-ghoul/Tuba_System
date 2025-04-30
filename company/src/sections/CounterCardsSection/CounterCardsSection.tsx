import { Box } from "@mui/material";
import CounterCard from "../../components/CounterCard/CounterCard";
import { BalanceRounded, Diversity1Outlined, ReceiptLongOutlined } from "@mui/icons-material";
import { PiUsersThreeLight } from "react-icons/pi";

const CounterCardsSection = () => {
  return (
    <Box className={`grid justify-stretch items-center gap-4 grid-cols-4`}>
      <CounterCard
        icon={<BalanceRounded className={`!text-counter_card_purple text-[20px]`} />}
        number={"1200"}
        unit={"ر . س"}
        title={"الرصيد المستهلك اليوم"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_purple_light"}
      />
      <CounterCard
        icon={<BalanceRounded className={`text-counter_card_red text-[20px]`} />}
        number={"1200"}
        unit={"ر . س"}
        title={"الرصيد المطلوب"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_red_light"}
      />
      <CounterCard
        icon={<ReceiptLongOutlined className={`text-counter_card_green text-[20px]`} />}
        number={"1800"}
        unit={"مطالبة"}
        title={"عدد المطالبات اليوم"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_green_light"}
      />
      <CounterCard
        icon={<PiUsersThreeLight className={`text-counter_card_purple text-[20px]`} />}
        number={"100"}
        unit={"موظف"}
        title={"عدد الموظفين لديك"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_purple_light"}
      />
      <CounterCard
        icon={<PiUsersThreeLight className={`!text-counter_card_green text-[20px]`} />}
        number={"100"}
        unit={"موظف"}
        title={"عدد الموظفين النشطين"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_green_light"}
      />
      <CounterCard
        icon={<PiUsersThreeLight className={`text-counter_card_red text-[20px]`} />}
        number={"100"}
        unit={"موظف"}
        title={"عدد الموظفين الغير نشطين"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_red_light"}
      />
      <CounterCard
        icon={<Diversity1Outlined className={`text-counter_card_red text-[20px]`} />}
        number={"100"}
        unit={"تابع"}
        title={"عدد التابعين النشطين"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_red_light"}
      />
      <CounterCard
        icon={<Diversity1Outlined className={`text-counter_card_red text-[20px]`} />}
        number={"100"}
        unit={"تابع"}
        title={"عدد التابعين الغير نشطين"}
        back={"/images/balance_bg.svg"}
        back_icon_color={"bg-counter_card_red_light"}
      />
    </Box>
  );
};

export default CounterCardsSection;
