import { handleToaster } from "../../functions/handleToaster";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { MemberFormTypes } from "../../types/forms.types";

const useMemberSubmit = () => {
  const { server } = useAxios();

  const addMember = async (values: MemberFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Login Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };

  const editMember = async (values: MemberFormTypes) => {
    await server
      .post(`/method/login_password`, values)
      .then((res) => {
        console.log(res);
        handleToaster({ msg: "Login Successfully", status: "success" });
      })
      .catch((err) => {
        handleCatchError(err);
      });
  };
  return { addMember, editMember };
};

export default useMemberSubmit;
