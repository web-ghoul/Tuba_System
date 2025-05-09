import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { login as loginAction } from "../../store/authSlice";
import { AppDispatch } from "../../store/store";
import { LoginFormTypes } from "../../types/forms.types";

const useLoginSubmit = () => {
  const { server } = useAxios(true);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const login = async (values: LoginFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        handleToaster({ msg: "Login Successfully", status: "success" });
        dispatch(
          loginAction({
            token: res.data.message.api_key + ":" + res.data.message.api_secret,
            userData: res.data.message.user,
            company: res.data.message.doctype_defaults["TB Company"],
          })
        );
        navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };
  return { login };
};

export default useLoginSubmit;
