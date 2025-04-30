import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCatchError } from "../functions/handleCatchError";
import { login as loginAction } from "../store/authSlice";
import { AppDispatch } from "../store/store";
import { AllFormsTypes, LoginFormTypes } from "../types/forms.types";
import { handleToaster } from "../functions/handleToaster";
import useAxios from "./useAxios";

const useSubmitFunction = (type: string) => {
  const { server } = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const login = async (values: LoginFormTypes) => {
    await server
      .post(`/login`, values)
      .then((res) => {
        handleToaster("Login Successfully", "success");
        navigate(`${process.env.VITE_DASHBOARD_ROUTE}`);
        dispatch(
          loginAction({ token: res.data.token, userId: res.data.userId })
        );
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  const handleDelete = () => {};

  const handleSubmit = (values: AllFormsTypes | unknown) => {
    switch (type) {
      case "login":
        login(values as LoginFormTypes);
        break;
      case "delete":
        handleDelete();
        break;
      default:
        return () => {};
    }
  };

  return { handleSubmit };
};

export default useSubmitFunction;
