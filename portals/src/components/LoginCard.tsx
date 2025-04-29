import { LoginCardTypes } from "../types/components";

const LoginCard = ({ title, description, link }: LoginCardTypes) => {
  return (
    <a href={link} className={`login_card`}>
      <div className={"login_image"} />
      <h6>{title}</h6>
      <h6>{description}</h6>
      <div className="login_shape" />
    </a>
  );
};

export default LoginCard;
