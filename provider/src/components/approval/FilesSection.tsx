// FilesSection.tsx
import { Paper } from '@mui/material';
import React from 'react';

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
    items?: ClaimItem[];
}

// File component that replaces the Blade @include('components.file')
const FileComponent: React.FC<FileItem> = ({ title, file }) => {
    // Determine file type to show appropriate icon
    const getFileIcon = (filename: string) => {
        const extension = filename.split('.').pop()?.toLowerCase();

        if (['pdf'].includes(extension || '')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
            );
        } else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || '')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
            );
        } else if (['doc', 'docx'].includes(extension || '')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
            );
        }

        // Default file icon
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
        );
    };

    return (
        <div className="shadow-sm rounded-lg border border-gray-200 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
            {getFileIcon(title)}
            <div className="mt-2 text-center">
                <p className="font-medium text-sm truncate w-full max-w-[150px]" title={title}>
                    {title}
                </p>
                <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info text-xs mt-1 hover:underline"
                >
                    عرض الملف
                </a>
            </div>
        </div>
    );
};

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

        items?.forEach(item => {
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