import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useSearchEmployeeSubmit } from "./useSearchEmployeeSubmit";
import PatientDetailsDisplay from "../../components/approval/PatientDetailsDisplay";
import {PatientData , FormData } from "../../interfaces/approvals/AddApproval";



const PatientSearchForm = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    national_id: "",
    coverage_document_number: "",
  });

  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>("");
  const { searchEmployee, isLoading, error } = useSearchEmployeeSubmit();

  const validateNationalId = (value: string): boolean => {
    // Check if input contains only digits
    const onlyDigitsRegex = /^\d+$/;
    
    // Check if length is between 10 and 15 digits
    return onlyDigitsRegex.test(value) && value.length >= 10 && value.length <= 15;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    
    // Clear validation error when user is typing
    if (id === "national_id") {
      setValidationError("");
    }
    
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSearch = async (): Promise<void> => {
    if (!formData.national_id) {
      setValidationError("الرقم الوطني مطلوب");
      return;
    }
    
    if (!validateNationalId(formData.national_id)) {
      setValidationError("الرقم الوطني يجب أن يكون من 10 إلى 15 رقم فقط");
      return;
    }
    
    const result = await searchEmployee(formData);
    if (result) {
      setPatientData(result);
      setIsSearched(true);
    }
  };

  const handleReset = (): void => {
    setFormData({
      national_id: "",
      coverage_document_number: "",
    });
    setPatientData(null);
    setIsSearched(false);
    setValidationError("");
  };

  // Handle Enter key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !isSearched) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border p-6 mb-6">
      <h5 className="text-lg font-bold mb-6">معلومات المريض</h5>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="national_id" className="block text-sm font-medium text-gray-700 mb-1">
              الرقم الوطني <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="national_id"
              value={formData.national_id}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className={`w-full p-2 border ${validationError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              required
              maxLength={15}
            />
            {validationError && (
              <p className="mt-1 text-sm text-red-600">{validationError}</p>
            )}
          </div>
        </div>

        {isSearched && patientData && (
          <PatientDetailsDisplay patientData={patientData} />
        )}

        <div className="flex justify-end items-center space-x-4 rtl:space-x-reverse">
          {!isSearched ? (
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="px-6 py-2 w-36 bg-gradient-to-r from-[#5A46E6] to-[#2AD2C9] text-white font-medium rounded-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 "
            >
              {isLoading ? "جاري البحث..." : "بحث"}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
            >
              إعادة تعيين
            </button>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};
export default PatientSearchForm;