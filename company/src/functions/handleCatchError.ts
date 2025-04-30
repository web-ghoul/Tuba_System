import { AxiosError } from "axios";
import { handleToaster } from "./handleToaster";

export const handleCatchError = (error: unknown) => {
  if (error instanceof AxiosError) {
    handleToaster({ msg: "Axios Error" });
    console.log(error.response?.data || error.message);
  } else if (error instanceof Error) {
    handleToaster({ msg: "General Error" });
    console.log(error.message);
  } else {
    handleToaster({ msg: "Unknown Error" });
    console.log(error);
  }
};
