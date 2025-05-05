import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ServiceItem } from '../../types/services';

interface ServiceTableFooterProps {
  canDelete: boolean;
  canEdit: boolean;
  filteredItems: ServiceItem[];
  selectedItems: number[];
  handleDeleteSelected: () => void;
  setDialogOpen: (open: boolean) => void;
  type: string;
}

export const ServiceTableFooter: React.FC<ServiceTableFooterProps> = ({
  canDelete,
  canEdit,
  type,
  filteredItems,
  selectedItems,
  handleDeleteSelected,
  setDialogOpen
}) => {
  // Count only items that match the specified type
  const typeMatchCount = filteredItems.filter(item => item.type === type).length;

  return (
    <tfoot>
      <tr>
        <td colSpan={canDelete ? 7 : 6} className="px-4 py-3">
          <div className="flex justify-between items-center">
            <div>
              {filteredItems.length > 0 && (
                <span className="text-sm text-gray-500">
                  إجمالي العناصر: {typeMatchCount}
                </span>
              )}
            </div>
            <div className="flex space-x-4">
              {canDelete && selectedItems.length > 0 && (
                <button
                  onClick={handleDeleteSelected}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <DeleteIcon fontSize="small" />
                  <span>حذف العناصر المحددة ({selectedItems.length})</span>
                </button>
              )}
              
              {canEdit && (
                <button type='button'
                  onClick={() => setDialogOpen(true)}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                >
                  <AddIcon fontSize="small" />
                  <span>إضافة عنصر</span>
                </button>
              )}
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};