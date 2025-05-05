import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  FormHelperText
} from '@mui/material';
import { AddServiceFormProps, Service } from '../../types/services';
import AddFilesComponent from '../../components/AddFilesComponent';
import { useServiceForm } from '../../hooks/useServiceForm';

export const AddServiceForm: React.FC<AddServiceFormProps> = ({
  onClose,
  onAdd,
  vat,
  onEdit,
  deduct,
  type,
  editData,
  editIndex
}) => {
  const {
    formData,
    uploadedFiles,
    setUploadedFiles,
    errors,
    services,
    handleChange,
    handleServiceSelect,
    handleCheckboxChange,
    handleFilesChange,
    validateForm,
    prepareSubmissionData
  } = useServiceForm({
    initialData: editData,
    deductionPercent: deduct,
    type,
    vat,
  });

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const submissionData = prepareSubmissionData();

    if (editData && typeof editIndex === 'number' && onEdit) {
      onEdit(submissionData, editIndex);
    } else if (onAdd) {
      onAdd(submissionData);
    }

    onClose();
  };

  return (
    <Box className="grid gap-6 px-5 w-full">
      <Box className="grid gap-4">
        <Typography variant="h6" fontWeight={700}>
          {editData ? 'تعديل عنصر' : 'اضف عنصر جديد'}
        </Typography>
        <Typography variant="body2">
          أدخل تفاصيل العنصر المطلوب للمريض لإكمال المطالبة.
        </Typography>
      </Box>

      <FormControl fullWidth error={!!errors.serviceId}>
        <Autocomplete
          id="services"
          options={services}
          value={services.find(service => service.id === formData.serviceId) || null}
          onChange={(_, newValue) => {
            handleServiceSelect(newValue?.id || null);
          }}
          getOptionLabel={(option: Service) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="اختر الخدمة المطلوبة للمريض"
              variant="outlined"
              error={!!errors.serviceId}
              helperText={errors.serviceId}
              required
            />
          )}
          noOptionsText="لا توجد خدمات"
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            id="is_repeat"
            checked={formData.isRepeat}
            onChange={handleCheckboxChange}
          />
        }
        label="هل الوصفة متكررة ؟"
      />

      {formData.isRepeat && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="عدد مرات الصرف المسموح بها"
              type="number"
              fullWidth
              id="allowedTimes"
              value={formData.allowedTimes}
              onChange={handleChange}
              InputProps={{ inputProps: { min: 1 } }}
              error={!!errors.allowedTimes}
              helperText={errors.allowedTimes}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="المدة بين كل عملية صرف (بالاشهر)"
              type="number"
              fullWidth
              id="transaction"
              value={formData.transaction}
              onChange={handleChange}
              InputProps={{ inputProps: { min: 1 } }}
              error={!!errors.transaction}
              helperText={errors.transaction}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="اجمالى فترة صرف (بالاشهر)"
              type="number"
              fullWidth
              
              id="totalPresciption"
              value={formData.totalPresciption}
              onChange={handleChange}
              error={!!errors.totalPresciption}
              helperText={errors.totalPresciption}
              required
            />
          </Grid>
        </Grid>
      )}

      <TextField
        label="أدخل وصفًا تفصيليًا للعنصر"
        placeholder="اكتب وصفًا مختصرًا لحالة المريض ولماذا يحتاج الخدمة..."
        multiline
        rows={4}
        fullWidth
        id="description"
        value={formData.description}
        onChange={handleChange}
      />

      <AddFilesComponent
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
        onFilesChange={handleFilesChange}
        maxFiles={10}
      />

      <Box className="grid grid-cols-2 gap-4">
        <Button
          variant="outlined"
          fullWidth
          onClick={onClose}
        >
          إلغاء
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          {editData ? 'تعديل' : 'إضافة'}
        </Button>
      </Box>
    </Box>
  );
};