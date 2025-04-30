import ImageBox from "../ImageBox/ImageBox";

const Logo = ({ className }: { className?: string }) => {
  return (
    <ImageBox
      src={"/images/logo_arabic_light.svg"}
      lazy
      className={className}
    />
  );
};

export default Logo;
