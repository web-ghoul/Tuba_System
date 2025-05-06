// FilesSection.tsx
import { Paper } from '@mui/material';
import React from 'react';
import { FileComponent } from '../FileComponent';


// Define interface for an individual file
interface FileItem {
    title: string;
    file: string;
}

// Define interface for a claim item that might contain attachments
interface ClaimItem {
    justification_attachments?: string;
    // Other properties that claim items might have would go here
}

interface FilesProps {
    items?: any;
}

// File component that replaces the Blade @include('components.file')


// Mock data for development and testing
const mockClaimItems: ClaimItem[] = [
    {
        justification_attachments: '/uploads/files/medical_report.pdf, /uploads/files/prescription.jpg'
    },
    {
        justification_attachments: '/uploads/files/lab_results.pdf, /uploads/files/insurance_claim.docx'
    }
];

const FilesSection: React.FC<FilesProps> = ({ items = mockClaimItems }) => {
    // Function to extract all files from claim items
    const getAllFiles = (): FileItem[] => {
        const files: FileItem[] = [];

        items?.forEach((item: { justification_attachments: string; }) => {
            if (item.justification_attachments) {
                const filePaths = item.justification_attachments.split(',');

                filePaths.forEach(filePath => {
                    const trimmedPath = filePath.trim();
                    const fileName = trimmedPath.split('/').pop() || 'unknown-file';

                    files.push({
                        title: fileName,
                        file: trimmedPath
                    });
                });
            }
        });

        return files;
    };

    const files = getAllFiles();

    return (
        <Paper className="p-4 border rounded-lg shadow-md bg-white">
        

            <h4 className="text-info mb-5 font-bold">الملفات</h4>

            {files.length > 0 ? (
                <div className="flex gap-3  pb-2">
                    {files.map((file, index) => (
                        <FileComponent key={index} title={file.title} file={file.file} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">لا توجد ملفات مرفقة</p>
            )}

        </Paper>
    );
};



export default FilesSection;