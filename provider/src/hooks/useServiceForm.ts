import { useState, useEffect } from 'react';
import { FormData, ServiceSubmissionData, Service } from '../types/services';
import { validatePrescriptionFields } from '../functions/validatePrescriptionFields';

interface UseServiceFormProps {
  initialData?: any;
  deductionPercent: number;
  vat: number;
  type: string;
}

export const useServiceForm = ({ initialData, deductionPercent, type  }: UseServiceFormProps) => {
  // Sample services - in a real app, this would come from an API or props

  const defaultFormData: FormData = {
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
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize form with edit data if available
  useEffect(() => {
    if (initialData) {
      // Convert values to strings consistently to avoid type mismatches
      setFormData({
        serviceId: initialData.service_id || '',
        serviceName: initialData.service_name || '',
        isRepeat: initialData.is_repeat || false,
        allowedTimes: initialData.allowed_times?.toString() || '',
        transaction: initialData.transaction?.toString() || '',
        totalPaid: initialData.total_paid?.toString() || '',
        description: initialData.description || '',
        quantity: initialData.quantity?.toString() || '1',
        unitPrice: initialData.unit_price?.toString() || '0',
        total: initialData.total?.toString() || '0',
        base_price: initialData.base_price?.toString() || '0',
        base_coverage_rate: initialData.base_coverage_rate?.toString() || '0',
        base_coverage: initialData.base_coverage?.toString() || '0',
        totalPresciption: initialData.total_prescription?.toString() || '',
        files: initialData.files || []
      });
      setUploadedFiles(initialData.files || []);
    }
  }, [initialData]);

  // Calculate derived values based on inputs
  const calculateDerivedValues = (
    basePrice: string, 
    baseRate: string,
    quantity: string,
    unitPrice: string
  ) => {
    const parsedQuantity = parseFloat(quantity) || 1;
    const parsedUnitPrice = parseFloat(unitPrice) || 0;
    const parsedBasePrice = parseFloat(basePrice) || parsedQuantity * parsedUnitPrice;
    const parsedBaseRate = parseFloat(baseRate) || deductionPercent;
    
    const total = (parsedQuantity * parsedUnitPrice).toFixed(2);
    const baseCoverage = (parsedBasePrice * (parsedBaseRate / 100)).toFixed(2);
    
    return {
      total,
      baseCoverage,
      basePrice: parsedBasePrice.toFixed(2),
      baseRate: parsedBaseRate.toFixed(0)
    };
  };

  // Handle text field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormData(prev => {
      const updatedFormData = { ...prev, [id]: value };
      
      // Recalculate values if necessary
      if (['quantity', 'unitPrice', 'base_coverage_rate'].includes(id)) {
        const { total, baseCoverage, baseRate } = calculateDerivedValues(
          id === 'unitPrice' || id === 'quantity' ? (parseFloat(updatedFormData.quantity || '1') * parseFloat(value || '0')).toFixed(2) : updatedFormData.base_price,
          id === 'base_coverage_rate' ? value : updatedFormData.base_coverage_rate,
          updatedFormData.quantity,
          updatedFormData.unitPrice
        );
        
        return {
          ...updatedFormData,
          total: id === 'quantity' || id === 'unitPrice' ? total : updatedFormData.total,
          base_price: id === 'quantity' || id === 'unitPrice' ? total : updatedFormData.base_price,
          base_coverage: baseCoverage,
          base_coverage_rate: id === 'base_coverage_rate' ? baseRate : updatedFormData.base_coverage_rate
        };
      }
      
      return updatedFormData;
    });
    
    // Clear error for this field if it exists
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  // Handle service selection
  const handleServiceSelect = (service: Service | null) => {
    const serviceId = service?.id;
    if (!serviceId) {
      setFormData(prev => ({
        ...prev,
        serviceId: '',
        serviceName: '',
        unitPrice: '0',
        total: '0',
        base_price: '0',
        base_coverage: '0'
      }));
      return;
    }
    
    const selectedService = service;
    const quantity = parseFloat(formData.quantity) || 1;
    const unitPrice = selectedService.price;
    
    const { total, baseCoverage, basePrice, baseRate } = calculateDerivedValues(
      (unitPrice * quantity).toFixed(2),
      deductionPercent.toFixed(0),
      quantity.toString(),
      unitPrice.toString()
    );
    
    setFormData(prev => ({
      ...prev,
      serviceId,
      serviceName: selectedService.name,
      unitPrice: unitPrice.toString(),
      total,
      base_price: basePrice,
      base_coverage_rate: baseRate,
      base_coverage: baseCoverage,
      totalPaid: total
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isRepeat: e.target.checked }));
  };

  // Handle file changes
  const handleFilesChange = (files: File[]) => {
    setFormData(prev => ({ ...prev, files }));
    setUploadedFiles(files);
  };

  // Validate the form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.serviceId) {
      newErrors.serviceId = 'الرجاء اختيار خدمة';
    }
    
    if (formData.isRepeat) {
        const prescriptionErrors = validatePrescriptionFields(
          formData.allowedTimes,
          formData.transaction,
          formData.totalPresciption
        );
    
        Object.assign(newErrors, prescriptionErrors);
      }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Prepare data for submission
  const prepareSubmissionData = (): ServiceSubmissionData => {
    return {
      service_id: formData.serviceId,
      service_name: formData.serviceName,
      is_repeat: formData.isRepeat,
      type: type,
      allowed_times:  formData.allowedTimes ,
      transaction: formData.transaction,
      total_paid:  formData.totalPaid ,
      total_prescription: formData.totalPresciption ,
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
  };

  return {
    formData,
    uploadedFiles,
    setUploadedFiles,
    errors,
    handleChange,
    handleServiceSelect,
    handleCheckboxChange,
    handleFilesChange,
    validateForm,
    prepareSubmissionData
  };
};