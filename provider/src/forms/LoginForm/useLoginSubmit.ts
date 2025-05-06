import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormsContext } from '../../contexts/FormsContext';
import { handleAlert } from '../../functions/handleAlert';
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
    try {
      handleOpenFormsLoading();

      const response = await server.post(`/method/login_password`, values);

      // Check if the response indicates success
      console.log(response.data);
      // Check if the response data contains the expected success key
      if (response.data && response.data.message.success_key === 1) {
     
        // Dispatch login action with token and userId
         dispatch(
          loginAction({ token: response.data.message.api_key + ":" + response.data.message.api_secret, userId: response.data.message.sid })
        );

        // Show success alert
        handleAlert({ msg: "Login Successfully", status: "success" });

        // Navigate to dashboard after successful login
        
        setTimeout(() => {
          navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
        }, 100); // Small delay to allow Redux to update
      } else {
        // Handle unsuccessful login despite 200 response
        handleAlert({ msg: "Invalid credentials", status: "error" });
      }
    } catch (err) {
      // This handles network errors and non-200 responses
      // handleCatchError(err);
    } finally {
      // Always close loading regardless of success or failure
      handleCloseFormsLoading();
    }
  };

  return { login };
};

export default useLoginSubmit;