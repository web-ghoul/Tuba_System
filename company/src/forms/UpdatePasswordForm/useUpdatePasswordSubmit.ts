import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { login as loginAction } from "../../store/authSlice";
import { AppDispatch } from "../../store/store";
import { UpdatePasswordFormTypes } from "../../types/forms.types";

const useUpdatePasswordSubmit = () => {
  const { server } = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const updatePassword = async (values: UpdatePasswordFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Login Successfully", status: "success" });
        dispatch(
          loginAction({
            token: res.data.message.api_key + ":" + res.data.message.api_secret,
            userId: res.data.message.sid,
          })
        );
        navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };
  return { updatePassword };
};

export default useUpdatePasswordSubmit;
