import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface AddFilesComponentProps {
  uploadedFiles: File[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
}

const AddFilesComponent: React.FC<AddFilesComponentProps> = ({
  uploadedFiles ,
  setUploadedFiles,
  onFilesChange,
  maxFiles = 10,
}) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (uploadedFiles.length + newFiles.length <= maxFiles) {
        const updatedFiles = [...uploadedFiles, ...newFiles];
        setUploadedFiles(updatedFiles);
        onFilesChange(updatedFiles);
    
      } else {
        alert(`يمكنك تحميل ${maxFiles} ملفات كحد أقصى`);
      }
    }
  };
console.log(uploadedFiles);

  const removeFile = (index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  return (
    <Box className="border-2 border-dashed border-gray-300 p-4 rounded-md">
      <Typography variant="subtitle1" className="mb-2">
        تحميل الملفات (الحد الأقصى {maxFiles} ملفات)
      </Typography>

      <input
        type="file"
        id="file-upload"
        multiple
        onChange={handleFileUpload}
        className="hidden"
        disabled={uploadedFiles.length >= maxFiles}
      />

      <label
        htmlFor="file-upload"
        className={`flex justify-center items-center inline-block px-4 py-2 text-primary rounded cursor-pointer ${
          uploadedFiles.length >= maxFiles ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <AttachFileIcon />
        اختر الملفات
      </label>

      {uploadedFiles.length > 0 && (
        <Box className="mt-4 grid gap-2">
          {uploadedFiles.map((file, index) => (
            <Box
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 rounded"
            >
              <Typography variant="body2">{file.name}</Typography>
              <Button
                size="small"
                color="error"
                onClick={() => removeFile(index)}
              >
                حذف
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AddFilesComponent;
