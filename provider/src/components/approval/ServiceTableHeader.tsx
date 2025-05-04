import React from 'react';
import { Checkbox } from '@mui/material';
import { ServiceItem } from '../../types/services';

interface ServiceTableHeaderProps {
  canDelete: boolean;
  handleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedItems: number[];
  filteredItems: ServiceItem[];
}

export const ServiceTableHeader: React.FC<ServiceTableHeaderProps> = ({
  canDelete,
  handleSelectAll,
  selectedItems,
  filteredItems
}) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        {canDelete && (
          <th className="px-4 py-3 text-right border w-10">
            <Checkbox
              checked={selectedItems.length > 0 && selectedItems.length === filteredItems.length}
              indeterminate={selectedItems.length > 0 && selectedItems.length < filteredItems.length}
              onChange={handleSelectAll}
              size="small"
            />
          </th>
        )}
        <th className="px-4 py-3 text-right border">#</th>
        <th className="px-4 py-3 text-right border">اسم الخدمة</th>
        <th className="px-4 py-3 text-right border">السعر الأساسي</th>
        <th className="px-4 py-3 text-right border">نسبة التحمل الأساسية</th>
        <th className="px-4 py-3 text-right border">التغطية الأساسية</th>
        <th className="px-4 py-3 text-right border">الإجراءات</th>
      </tr>
    </thead>
  );
};
