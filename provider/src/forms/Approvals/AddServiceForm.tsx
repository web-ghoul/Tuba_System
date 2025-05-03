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
  Dialog,
  DialogContent,
  DialogTitle,
  TextareaAutosize
} from '@mui/material';

interface Service {
  id: string;
  name: string;
}

type FormData = {
  serviceId: string;
  serviceName: string;
  isRepeat: boolean;
  allowedTimes: string;
  transaction: string;
  totalPaid: string;
  description: string;
  quantity: string;
  unitPrice: string;
  total: string;
  files: File[];
};

interface AddServiceFormProps {
  onClose: () => void;
  onAdd?: (formData: any) => void;
  onEdit?: (formData: any, index: number) => void;
  editData?: any;
  editIndex?: number;
  serviceType: string;
}

export const AddServiceForm: React.FC<AddServiceFormProps> = ({
  onClose,
  onAdd,
  onEdit,
  editData,
  editIndex,
  serviceType
}) => {
  // Sample services - replace with your actual service data
  const services: Service[] = [
    { id: 'service1', name: 'خدمة 1' },
    { id: 'service2', name: 'خدمة 2' },
    { id: 'service3', name: 'خدمة 3' },
  ];

  const [formData, setFormData] = useState<FormData>({
    serviceId: '',
    serviceName: '',
    isRepeat: false,
    allowedTimes: '',
    transaction: '',
    totalPaid: '',
    description: '',
    quantity: '1',
    unitPrice: '0',
    total: '0',
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
        files: []
      });
    }
  }, [editData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Recalculate total when quantity or unit price changes
    if (id === 'quantity' || id === 'unitPrice') {
      const quantity = id === 'quantity' ? parseFloat(value) || 0 : parseFloat(formData.quantity) || 0;
      const unitPrice = id === 'unitPrice' ? parseFloat(value) || 0 : parseFloat(formData.unitPrice) || 0;
      const total = (quantity * unitPrice).toFixed(2);
      setFormData(prev => ({ ...prev, total }));
    }
  };

  const handleSelectChange = (e: any) => {
    const { value } = e.target;
    const selectedService = services.find(service => service.id === value);
    setFormData(prev => ({
      ...prev,
      serviceId: value,
      serviceName: selectedService?.name || ''
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isRepeat: e.target.checked }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (uploadedFiles.length + newFiles.length <= 10) {
        setUploadedFiles(prev => [...prev, ...newFiles]);
        setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
      } else {
        alert('يمكنك تحميل 10 ملفات كحد أقصى');
      }
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.serviceId) {
      alert('الرجاء اختيار خدمة');
      return;
    }

    if (formData.isRepeat) {
      if (!formData.allowedTimes || !formData.transaction || !formData.totalPaid) {
        alert('الرجاء إكمال جميع بيانات الوصفة المتكررة');
        return;
      }
    }

    // Prepare data for submission
    const submissionData = {
      service_id: formData.serviceId,
      service_name: formData.serviceName,
      is_repeat: formData.isRepeat,
      allowed_times: formData.isRepeat ? formData.allowedTimes : null,
      transaction: formData.isRepeat ? formData.transaction : null,
      total_paid: formData.isRepeat ? formData.totalPaid : null,
      description: formData.description,
      quantity: formData.quantity,
      unit_price: formData.unitPrice,
      total: formData.total,
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
    <Box className="grid gap-6 p-4 w-full">
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
        <Select
          labelId="services-label"
          id="services"
          value={formData.serviceId}
          onChange={handleSelectChange}
          label="اختر الخدمة المطلوبة للمريض"
        >
          <MenuItem value="">اختر خدمة</MenuItem>
          {services.map((service) => (
            <MenuItem key={service.id} value={service.id}>
              {service.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <TextField
            label="السعر"
            type="number"
            fullWidth
            id="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="الإجمالي"
            type="text"
            fullWidth
            id="total"
            value={formData.total}
            disabled
          />
        </Grid>
      </Grid>

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
              id="totalPaid"
              value={formData.totalPaid}
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

      <Box className="border-2 border-dashed border-gray-300 p-4 rounded-md">
        <Typography variant="subtitle1" className="mb-2">
          تحميل الملفات (الحد الأقصى 10 ملفات)
        </Typography>
        
        <input
          type="file"
          id="file-upload"
          multiple
          onChange={handleFileUpload}
          className="hidden"
          disabled={uploadedFiles.length >= 10}
        />
        
        <label 
          htmlFor="file-upload" 
          className={`inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer ${
            uploadedFiles.length >= 10 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          اختر الملفات
        </label>
        
        {uploadedFiles.length > 0 && (
          <Box className="mt-4 grid gap-2">
            {uploadedFiles.map((file, index) => (
              <Box key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded">
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