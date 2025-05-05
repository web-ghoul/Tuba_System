import React from 'react';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ServiceItem } from '../../types/services';

interface ServiceTableRowProps {
  item: ServiceItem;
  index: number;
  type:string;
  canDelete: boolean;
  canEdit: boolean;
  selectedItems: number[];
  handleCheckboxChange: (index: number) => void;
  handleOpenEditDialog: (item: ServiceItem, index: number) => void;
}

export const ServiceTableRow: React.FC<ServiceTableRowProps> = ({
  item,
  index,
  type,
  canDelete,
  canEdit,
  selectedItems,
  handleCheckboxChange,
  handleOpenEditDialog
}) => {
    if (item.type !== type) {
        return null;
      }
  return (
     
    <tr className={selectedItems.includes(index) ? 'bg-blue-50' : ''}>
      {canDelete && (
        <td className="px-4 py-3 text-right border">
          <Checkbox
            checked={selectedItems.includes(index)}
            onChange={() => handleCheckboxChange(index)}
            size="small"
          />
        </td>
      )}
      <td className="px-4 py-3 text-right border">{index + 1}</td>
      <td className="px-4 py-3 text-right border">{item.service_name}</td>
      <td className="px-4 py-3 text-right border">{item.base_price}</td>
      <td className="px-4 py-3 text-right border">{item.base_coverage_rate}</td>
      <td className="px-4 py-3 text-right border">{item.base_coverage}</td>
      <td className="px-4 py-3 text-right border">
        {canEdit && (
          <div className="flex justify-center space-x-2">
            <Tooltip title="تعديل">
              <IconButton
                size="small"
                color="primary"
                onClick={() => handleOpenEditDialog(item, index)}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </td>
    </tr>
    
  );
};
