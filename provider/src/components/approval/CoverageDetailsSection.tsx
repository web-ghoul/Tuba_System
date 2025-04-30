// CoverageDetailsSection.tsx
import { Paper } from '@mui/material';
import React from 'react';

interface CoverageDetails {
    coverage_document_number: string;
    coverage_document: string;
}

interface Props {
    coverageDetails: CoverageDetails;
}

// Mock data for development and testing
const mockCoverageDetails: CoverageDetails = {
    coverage_document_number: "COV-2023-785634",
    coverage_document: "وثيقة التأمين الصحي الشاملة"
};

const CoverageDetailsSection: React.FC<Props> = ({ coverageDetails = mockCoverageDetails }) => {
    return (
        <Paper className="p-4 border rounded-lg shadow-md bg-white">
            <h4 className="text-info mb-5 font-bold">تفاصيل التغطية</h4>
            <div className="shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-10 w-3/4">
                <div className="bg-white p-4">
                    <div className="flex w-full">
                        {/* Coverage Document Number */}
                        <div className="w-1/2 px-2">
                            <div className="h-full p-3 flex flex-row gap-2 text-center border-r border-gray-300 rtl:border-r-0 rtl:border-l">
                                <span className="block text-gray-500 text-sm mb-1">رقم وثيقة التغطية:</span>
                                <span className="font-medium text-info">{coverageDetails.coverage_document_number}</span>
                            </div>
                        </div>

                        {/* Coverage Document */}
                        <div className="w-1/2 px-2">
                            <div className="h-full p-3 flex flex-row gap-2 text-center">
                                <span className="block text-gray-500 text-sm mb-1">وثيقة التغطية:</span>
                                <span className="font-medium text-info">{coverageDetails.coverage_document}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Paper>
    );
};


export default CoverageDetailsSection;