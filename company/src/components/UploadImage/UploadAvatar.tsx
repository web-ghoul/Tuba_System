import { Box, Typography } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import ImageBox from "../ImageBox/ImageBox";
import { GradientButton } from "../../mui/buttons/GradientButton";
import useChangeProfileAvatar from "../../hooks/useChangeProfileAvatar";
import { BasicButton } from "../../mui/buttons/BasicButton";
import { useModals } from "../../contexts/ModalsContext";
import { handleToaster } from "../../functions/handleToaster";

const UploadAvatar = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const avatarInputRef = useRef<HTMLInputElement | null>(null);
  const { dispatch } = useModals();
  const { handleChangeProfileAvatar } = useChangeProfileAvatar();

  const handleUploadAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const selectedAvatar = e.target.files[0];
      if (selectedAvatar) {
        setAvatar(selectedAvatar);
      }
    }
  };

  const handleClickUpload = () => {
    avatarInputRef.current?.click();
  };

  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Typography variant="h6" className={`text-center font-[700]`}>
        تغيير صورة البروفايل
      </Typography>
      <Box
        onClick={handleClickUpload}
        className={`w-[300px] h-[300px] overflow-hidden rounded-full m-auto flex justify-center items-center border-[2px] border-solid border-primary relative group cursor-pointer`}
      >
        {avatar ? (
          <ImageBox
            src={URL.createObjectURL(avatar)}
            className={`w-full h-full`}
          />
        ) : (
          <ImageBox src={"/images/avatar.png"} className={`w-full h-full`} />
        )}
        <Box
          className={`absolute w-full h-full z-[9] bg-[rgba(0,0,0,0.4)] left-0 top-0 opacity-0 group-hover:opacity-100`}
        />
        <label htmlFor="files" className={`!hidden`}>
          .
        </label>
        <input
          id={"avatar"}
          type={"file"}
          name={"avatar"}
          placeholder="avatar"
          ref={avatarInputRef}
          onChange={handleUploadAvatar}
          className={`absolute z-[10] opacity-0`}
        />
      </Box>
      <Box className={`grid justify-stretch items-center gap-4 grid-cols-2`}>
        <GradientButton
          onClick={() => {
            console.log(avatar)
            if (avatar) {
              handleChangeProfileAvatar(avatar);
            } else {
              handleToaster({ msg: "اختر صورة", status: "warning" });
            }
          }}
        >
          حفظ و تغيير
        </GradientButton>
        <BasicButton
          onClick={() =>
            dispatch({ type: "changeProfileAvatarModal", payload: false })
          }
        >
          الغاء
        </BasicButton>
      </Box>
    </Box>
  );
};

export default UploadAvatar;
