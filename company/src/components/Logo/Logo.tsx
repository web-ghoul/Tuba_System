import { LogoTypes } from "../../types/components.types";
import ImageBox from "../ImageBox/ImageBox";

const Logo = ({ theme = "light", className }: LogoTypes) => {
  return (
    <ImageBox
      src={
        theme === "light"
          ? "/images/logo_arabic_light.svg"
          : "/images/logo_arabic_dark.svg"
      }
      lazy
      className={className}
    />
  );
};

export default Logo;
