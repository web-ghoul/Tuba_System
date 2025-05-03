import React from "react";

interface PatientData {
  coverage_document?: string;
  company?: string;
  coverage_member_number?: string;
  covered_person?: string;
  patient_nationality?: string;
  medical_provider_branch?: string;
  deductible_percent?: number;
  max_network_level?: string;
  branch_readonly?: boolean;
}

interface PatientDetailsDisplayProps {
  patientData: PatientData;
}

const PatientDetailsDisplay: React.FC<PatientDetailsDisplayProps> = ({ patientData }) => {
  return (
    <div className="pt-4 border-t border-gray-200">
      <div className="flex flex-row gap-3 mb-4">
        {patientData.deductible_percent && (
          <span className="px-4 py-2 bg-green-100 text-green-600 font-bold border border-green-600 rounded-md">
            نسبة التحمل: {patientData.deductible_percent}%
          </span>
        )}
        {patientData.max_network_level && (
          <span className="px-4 py-2 bg-orange-100 text-orange-600 font-bold border border-orange-600 rounded-md">
            الحد الأقصى لمستوى الشبكة: {patientData.max_network_level}
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mb-4">
          <label htmlFor="coverage_document" className="block text-sm font-medium text-gray-700 mb-1">
            وثيقة التغطية
          </label>
          <input
            type="text"
            id="coverage_document"
            value={patientData.coverage_document || ""}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            الشركة
          </label>
          <input
            type="text"
            id="company"
            value={patientData.company || ""}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coverage_member_number" className="block text-sm font-medium text-gray-700 mb-1">
            رقم المريض
          </label>
          <input
            type="text"
            id="coverage_member_number"
            value={patientData.coverage_member_number || ""}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="covered_person" className="block text-sm font-medium text-gray-700 mb-1">
            اسم المريض
          </label>
          <input
            type="text"
            id="covered_person"
            value={patientData.covered_person || ""}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="patient_nationality" className="block text-sm font-medium text-gray-700 mb-1">
            جنسية المريض
          </label>
          <input
            type="text"
            id="patient_nationality"
            value={patientData.patient_nationality || ""}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="medical_provider_branch" className="block text-sm font-medium text-gray-700 mb-1">
            الفرع
          </label>
          <input
            type="text"
            id="medical_provider_branch"
            value={patientData.medical_provider_branch || ""}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly={patientData.branch_readonly || false}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsDisplay;