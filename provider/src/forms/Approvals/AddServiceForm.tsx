import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  TextField,
  Grid,
  Button,
  Autocomplete,
} from '@mui/material';
import { FormData, AddServiceFormProps, Service } from '../../types/services';
import AddFilesComponent from '../../components/AddFilesComponent';

export const AddServiceForm: React.FC<AddServiceFormProps> = ({
  onClose,
  onAdd,
  deduct,
  
  type,
  onEdit,
  editData,
  editIndex,
  serviceType
}) => {
  // Sample services - replace with your actual service data
  const services: Service[] = [
    { id: 'service1', name: 'خدمة 1', price: 100 },
    { id: 'service2', name: 'خدمة 2', price: 150 },
    { id: 'service3', name: 'خدمة 3', price: 200 },
  ];

  // Global deductible percentage constant
  const DEDUCTION_PERCENT = deduct; // 20% deductible

  const [formData, setFormData] = useState<FormData>({
    serviceId: '',
    serviceName: '',
    isRepeat: false,
    allowedTimes: '',

    transaction: '',
    totalPaid: '',
    totalPresciption: '',
    description: '',
    quantity: '1',
    unitPrice: '0',
    total: '0',
    base_price: '0',
    base_coverage_rate: '0',
    base_coverage: '0',
    files: []
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Initialize form with edit data if available
  useEffect(() => {
    if (editData) {
      setFormData({
        serviceId: editData.service_id || '',
        serviceName: editData.service_name || '',
        isRepeat: editData.is_repeat || false,
        allowedTimes: editData.allowed_times || '',
        transaction: editData.transaction || '',
        totalPaid: editData.total_paid || '',
        description: editData.description || '',
        quantity: editData.quantity || '1',
        unitPrice: editData.unit_price || '0',
        total: editData.total || '0',
        base_price: editData.base_price || '0',
        base_coverage_rate: editData.base_coverage_rate || '0',
        base_coverage: editData.base_coverage || '0',
        totalPresciption: editData.totalPresciption || 0,
        files: editData.files || []
      });
      setUploadedFiles(editData.files);
    }
  }, [editData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // If user manually changes base_coverage_rate, recalculate base_coverage
    if (id === 'base_coverage_rate') {
      const base_price = parseFloat(formData.base_price) || 0;
      const base_coverage_rate = parseFloat(value) || 0;
      const base_coverage = (base_price * (base_coverage_rate / 100)).toFixed(2);

      setFormData(prev => ({
        ...prev,
        base_coverage
      }));
    }
  };

  const handleSelectChange = (e: any) => {
    const { value } = e.target;
    const selectedService = services.find(service => service.id === value);
    const quantity = parseFloat(formData.quantity) || 1;
    const unitPrice = selectedService?.price || 0;
    const total = (unitPrice * quantity).toFixed(2);

    // Base price is the same as total
    const base_price = total;

    // Base coverage rate is (100% - deduction percentage)
    const base_coverage_rate = DEDUCTION_PERCENT.toFixed(0);

    // Base coverage is what's covered after deduction
    const base_coverage = (parseFloat(base_price) * ((1 - DEDUCTION_PERCENT / 100))).toFixed(2);

    // totalPaid remains the same as before
    const totalPaid = total;
    const totalPresciption = formData.totalPresciption;

    setFormData(prev => ({
      ...prev,
      serviceId: value,
      serviceName: selectedService?.name || '',
      unitPrice: unitPrice.toString(),
      quantity: quantity.toString(),
      total: total,
      base_price: total,
      base_coverage_rate,
      base_coverage,
      totalPaid: totalPaid,
      totalPresciption,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isRepeat: e.target.checked }));
  };

  const handleFilesChange = (files: File[]) => {
    setFormData(prev => ({ ...prev, files }));
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.serviceId) {
      alert('الرجاء اختيار خدمة');
      return;
    }

    if (formData.isRepeat) {
      if (!formData.allowedTimes || !formData.transaction || !formData.totalPresciption) {
        //todo:add validyion on the prescription
        alert('الرجاء إكمال جميع بيانات الوصفة المتكررة');
        return;
      }
    }

    // Prepare data for submission
    const submissionData = {
      service_id: formData.serviceId,
      service_name: formData.serviceName,
      is_repeat: formData.isRepeat,
      type: type,
      allowed_times: formData.isRepeat ? formData.allowedTimes : null,
      transaction: formData.isRepeat ? formData.transaction : null,
      total_paid: formData.isRepeat ? formData.totalPaid : null,
      total_prescription: formData.isRepeat ? formData.totalPresciption : null,
      description: formData.description,
      quantity: formData.quantity,
      unit_price: formData.unitPrice,
      total: formData.total,
      base_price: formData.base_price,
      base_coverage_rate: formData.base_coverage_rate,
      base_coverage: formData.base_coverage,
      files: formData.files,
      is_visit: false
    };

    // Either add new service or edit existing one
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

      <FormControl fullWidth required>
        <InputLabel id="services-label">اختر الخدمة المطلوبة للمريض</InputLabel>
        <Autocomplete
          id="services"
          options={services}
          value={services.find(service => service.id === formData.serviceId) || null}
          onChange={(event, newValue) => {
            // Update formData with the selected service's id
            const serviceId = newValue ? newValue.id : "";
            // You'll need to update your handleSelectChange to handle this
            handleSelectChange({
              target: { name: "serviceId", value: serviceId }
            });
          }}
          getOptionLabel={(option) => option.name || ""}
          renderInput={(params) => (
            <TextField
              {...params}
              label="اختر الخدمة المطلوبة للمريض"
              variant="outlined"
            />
          )}
          noOptionsText="لا توجد خدمات"
        />
      </FormControl>

      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="الكمية"
            type="number"
            fullWidth
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 1 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="سعر الوحدة"
            type="number"
            fullWidth
            id="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="المجموع"
            type="number"
            fullWidth
            id="total"
            value={formData.total}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="السعر الأساسي"
            type="number"
            fullWidth
            id="base_price"
            value={formData.base_price}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="نسبة التغطية (%)"
            type="number"
            fullWidth
            id="base_coverage_rate"
            value={formData.base_coverage_rate}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="قيمة التغطية"
            type="number"
            fullWidth
            id="base_coverage"
            value={formData.base_coverage}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid> */}

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
              InputProps={{ inputProps: { min: 1 } }}
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

      {/* Using the separated AddFilesComponent here */}
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