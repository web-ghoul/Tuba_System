import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormsContext } from '../../contexts/FormsContext';
import { handleAlert } from '../../functions/handleToaster';
import { handleCatchError } from '../../functions/handleCatchError';
import useAxios from '../../hooks/useAxios';
import { login as loginAction } from '../../store/authSlice';
import { AppDispatch } from '../../store/store';
import { LoginFormTypes } from '../../types/forms.types';

const useLoginSubmit = () => {
  const { server } = useAxios();
  const { handleOpenFormsLoading, handleCloseFormsLoading } =
    useContext(FormsContext);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const login = async (values: LoginFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        handleAlert({ msg: "Login Successfully", status: "success" });
        navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
        dispatch(
          loginAction({ token: res.data.token, userId: res.data.userId })
        );
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };
  return { login };
};

export default useLoginSubmit;
