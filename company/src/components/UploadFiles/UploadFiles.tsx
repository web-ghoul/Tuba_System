import { Box, Typography } from "@mui/material";
import { GradientButton } from "../../mui/buttons/GradientButton";
import { RiFolderUploadFill } from "react-icons/ri";
import { ChangeEvent, useRef, useState } from "react";
import { UploadFilesTypes } from "../../types/components.types";
import { ErrorButton } from "../../mui/buttons/ErrorButton";
import { IoImageOutline } from "react-icons/io5";
import TableIconButton from "../TableIconButton/TableIconButton";
import { AiFillDelete } from "react-icons/ai";

const UploadFiles = ({ count }: UploadFilesTypes) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(selectedFiles);
      console.log("Uploaded files:", selectedFiles);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFiles = () => {
    setFiles(null);
  };

  const handleSaveAndSend = () => {};

  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant="subtitle1" className={`!font-[700]`}>
        ملف او صورة التحويل
      </Typography>
      <Box
        className={`bg-white rounded-xl p-4 grid justify-stretch items-center text-center gap-4 ${
          files ? "" : "border-[1px] border-dashed border-primary"
        }`}
      >
        <label htmlFor="files" className={`!hidden`}>
          .
        </label>
        <input
          id={"files"}
          type={"file"}
          name={"files"}
          placeholder="files"
          ref={fileInputRef}
          onChange={handleUploadFiles}
          className={`absolute z-[10] opacity-0`}
          multiple={count && count > 1 ? true : false}
          accept="application/pdf"
        />
        {files && (
          <Box className={`flex justify-end items-center`}>
            <TableIconButton
              onClick={handleRemoveFiles}
              className={`!bg-error_100 !text-error_dark w-fit `}
            >
              <AiFillDelete />
            </TableIconButton>
          </Box>
        )}
        {files ? (
          <Box className={`flex justify-center items-center gap-2 py-4`}>
            <IoImageOutline className={`text-3xl`} />
            <Typography variant="subtitle1" className={`!text-neutral_300`}>
              صورة التحويل
            </Typography>
          </Box>
        ) : (
          <>
            <Box
              className={`w-[50px] h-[50px] rounded-full flex justify-center items-center bg-primary_200 m-auto relative border-[4px] border-solid border-primary_100`}
            >
              <RiFolderUploadFill className={`text-2xl`} />
            </Box>
            <Typography variant="subtitle1" className={`!text-neutral_300`}>
              أضف صورة او ملف التحويل هنا
            </Typography>
          </>
        )}
        <Box className={`flex justify-center items-center gap-4`}>
          {files ? (
            <>
              <GradientButton onClick={handleSaveAndSend}>
                حفظ وارسال
              </GradientButton>
              <ErrorButton onClick={handleRemoveFiles}>الغاء</ErrorButton>
            </>
          ) : (
            <GradientButton onClick={handleClickUpload}>
              أضف من هنا
            </GradientButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UploadFiles;
