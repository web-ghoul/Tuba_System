import { Box, Typography } from "@mui/material";
import { useModals } from "../contexts/ModalsContext";
import CustomModal from "./CustomModal";
import { HandshakeOutlined } from "@mui/icons-material";
import { GradientButton } from "../mui/buttons/GradientButton";

const WelcomeModal = () => {
  const { state, dispatch } = useModals();

  return (
    <CustomModal
      open={state.isOpenWelcomeModal}
      handleClose={() => dispatch({ type: "welcomeModal", payload: false })}
    >
      <Box
        className={`bg-primary_light w-[100px] h-[100px] rounded-full flex justify-center items-center !text-primary m-auto`}
      >
        <HandshakeOutlined className={`!text-6xl`} />
      </Box>

      <Box className={`grid justify-center items-center gap-4 text-center`}>
        <Typography variant="h4" className={`!font-[700]`}>
          حياك الله! 👋
        </Typography>
        <Typography variant="h6" className={`!font-[500] text-tuba_gray`}>
          مرحبًا بك في 'طوبي'، شريكك الموثوق لتبسيط كل إجراءاتك. استمتع بتجربتك
          واستفد من خدماتنا المصممة خصيصًا لتلبية احتياجاتك. إذا احتجت لأي
          مساعدة، نحن هنا دائمًا لخدمتك!
        </Typography>
      </Box>

      <GradientButton
        onClick={() => dispatch({ type: "welcomeModal", payload: false })}
      >
        ابدأ الآن
      </GradientButton>
    </CustomModal>
  );
};

export default WelcomeModal;
