// ServiceDetailsSection.tsx
import { Paper } from '@mui/material';
import React from 'react';

interface ServiceDetails {
    service_type: string;
    covered_person_doc: {
        name1: string;
    };
    company_doc: {
        name1: string;
    };
    branch_id?: string;
}

interface Props {
    serviceDetails: ServiceDetails;
}

// Mock data for development and testing
const mockServiceDetails: ServiceDetails = {
    service_type: "خدمات طبية متخصصة",
    covered_person_doc: {
        name1: "أحمد محمود عبدالله"
    },
    company_doc: {
        name1: "شركة التأمين الوطنية"
    },
    branch_id: "الفرع الرئيسي - الرياض"
};

const ServiceDetailsSection: React.FC<Props> = ({ serviceDetails = mockServiceDetails }) => {
    // For demo purposes, we'll use a fixed branch_id if not provided in the serviceDetails
    const currentBranch = serviceDetails.branch_id || "الفرع الرئيسي";

    return (
        <Paper className="p-4 border rounded-lg shadow-md bg-white ">
            <h4 className="text-info mb-5 font-bold">تفاصيل الخدمة</h4>
            <div className="shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-10 w-full">
                <div className="bg-white p-4">
                    <div className="flex w-full">
                        {/* Service Type */}
                        <div className="w-1/4 px-2">
                            <div className="h-full flex flex-row gap-2 p-3 text-center border-r border-gray-300 rtl:border-r-0 rtl:border-l">
                                <span className="block text-gray-500 text-sm mb-1">نوع الخدمة:</span>
                                <span className="font-medium">{serviceDetails.service_type}</span>
                            </div>
                        </div>

                        {/* Insured Person */}
                        <div className="w-1/4 px-2">
                            <div className="h-full p-3 flex flex-row gap-3 text-center border-r border-gray-300 rtl:border-r-0 rtl:border-l">
                                <span className="block text-gray-500 text-sm mb-1">الشخص المؤمن:</span>
                                <span className="font-medium">{serviceDetails.covered_person_doc.name1}</span>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="w-1/4 px-2">
                            <div className="h-full p-3 flex flex-row gap-3 text-center border-r border-gray-300 rtl:border-r-0 rtl:border-l">
                                <span className="block text-gray-500 text-sm mb-1">الشركة:</span>
                                <span className="font-medium">{serviceDetails.company_doc.name1}</span>
                            </div>
                        </div>

                        {/* Branch */}
                        <div className="w-1/4 px-2">
                            <div className="h-full flex p-3 flex-row gap-2 text-center">
                                <span className="block text-gray-500 text-sm mb-1">الفرع:</span>
                                <span className="font-medium">{currentBranch}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Paper>
    );
};

// Example usage:
const App = () => {
    // In a real application, you would fetch this data from an API
    return <ServiceDetailsSection serviceDetails={mockServiceDetails} />;
};

export default ServiceDetailsSection;