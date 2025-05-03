import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  Checkbox,
  Tooltip,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { AddServiceForm } from '../../forms/Approvals/AddServiceForm';

// Define the types
interface ServiceItem {
  id?: string;
  service_id: string;
  service_name: string;
  quantity: string;
  unit_price: string;
  total: string;
  description?: string;
  notes?: string;
  is_visit: boolean;
  is_repeat?: boolean;
  allowed_times?: string;
  transaction?: string;
  total_paid?: string;
  files?: File[];
}

interface Claim {
  id?: string;
  items: ServiceItem[];
  workflow_state?: string;
}

export interface ServiceTableProps {
  type: string;
  tableId: string;
  claim?: Claim;
  id?: string;
  onClaimUpdate?: (updatedClaim: Claim) => void;
}

export const ServiceTable: React.FC<ServiceTableProps> = ({ 
  type, 
  tableId, 
  claim: initialClaim, 
  id,
  onClaimUpdate 
}) => {
  // Create local state to manage the claim data
  const [claim, setClaim] = useState<Claim>(initialClaim || { items: [] });
  
  // Update local state when props change
  useEffect(() => {
    if (initialClaim) {
      setClaim(initialClaim);
    }
  }, [initialClaim]);

  const items = claim?.items ?? [];
  const filteredItems = items.filter(item => !item.is_visit);
  const workflowState = claim?.workflow_state;

  const canEdit =
    !workflowState ||
    !['Discharged', 'Rejected', 'Pending', 'InReview', 'Closed'].includes(workflowState || '');

  const canDelete = !workflowState || (workflowState !== 'Discharged' && workflowState !== 'Rejected');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [editItem, setEditItem] = useState<{data: ServiceItem | null, index: number | null}>({
    data: null,
    index: null
  });

  // Update the parent component with the new claim data
  const updateClaimData = (updatedClaim: Claim) => {
    setClaim(updatedClaim);
    if (onClaimUpdate) {
      onClaimUpdate(updatedClaim);
    }
  };

  // Handle adding a new service
  const handleAddService = (serviceData: ServiceItem) => {
    // Create a new claim object with the added service
    const updatedClaim = {
      ...claim,
      items: [...(claim?.items || []), serviceData]
    };
    
    // Update state and notify parent component
    updateClaimData(updatedClaim);
    
    console.log('Service added successfully:', serviceData);
  };

  // Handle editing a service
  const handleEditService = (serviceData: ServiceItem, index: number) => {
    // Create a new items array
    const newItems = [...(claim?.items || [])];
    
    // Replace the item at the specified index
    newItems[index] = serviceData;
    
    // Create updated claim object
    const updatedClaim = {
      ...claim,
      items: newItems
    };
    
    // Update state and notify parent component
    updateClaimData(updatedClaim);
    
    console.log('Service updated successfully:', serviceData);
  };

  // Handle deleting selected services
  const handleDeleteSelected = () => {
    if (selectedItems.length === 0) {
      alert('لم يتم تحديد أي عناصر للحذف');
      return;
    }

    if (window.confirm('هل أنت متأكد من حذف العناصر المحددة؟')) {
      // Filter out the selected items
      const newItems = (claim?.items || []).filter((_, index) => !selectedItems.includes(index));
      
      // Create updated claim object
      const updatedClaim = {
        ...claim,
        items: newItems
      };
      
      // Update state and notify parent component
      updateClaimData(updatedClaim);
      
      // Clear selection
      setSelectedItems([]);
      
      console.log('Items deleted successfully:', selectedItems);
    }
  };

  // Handle checkbox selection
  const handleCheckboxChange = (index: number) => {
    setSelectedItems(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  // Handle opening edit dialog
  const handleOpenEditDialog = (item: ServiceItem, index: number) => {
    setEditItem({ data: item, index });
    setDialogOpen(true);
  };

  // Handle closing dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditItem({ data: null, index: null });
  };

  // Select or deselect all items
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems(filteredItems.map((_, index) => index));
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <>
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {canDelete && (
              <th className="px-4 py-2 border w-10">
                <Checkbox
                  checked={selectedItems.length > 0 && selectedItems.length === filteredItems.length}
                  indeterminate={selectedItems.length > 0 && selectedItems.length < filteredItems.length}
                  onChange={handleSelectAll}
                  size="small"
                />
              </th>
            )}
            <th className="px-4 py-2 border">اسم الخدمة</th>
            <th className="px-4 py-2 border">الكمية</th>
            <th className="px-4 py-2 border">السعر</th>
            <th className="px-4 py-2 border">الإجمالي</th>
            <th className="px-4 py-2 border">الملاحظات</th>
            <th className="px-4 py-2 border">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <tr key={index} className={selectedItems.includes(index) ? 'bg-blue-50' : ''}>
                {canDelete && (
                  <td className="px-4 py-2 border text-center">
                    <Checkbox
                      checked={selectedItems.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      size="small"
                    />
                  </td>
                )}
                <td className="px-4 py-2 border">{item.service_name}</td>
                <td className="px-4 py-2 border">{item.quantity}</td>
                <td className="px-4 py-2 border">{item.unit_price}</td>
                <td className="px-4 py-2 border">{item.total}</td>
                <td className="px-4 py-2 border">{item.notes || item.description || '-'}</td>
                <td className="px-4 py-2 border">
                  {canEdit && (
                    <div className="flex space-x-2 justify-center">
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
            ))
          ) : (
            <tr>
              <td colSpan={canDelete ? 7 : 6} className="px-4 py-6 text-center text-gray-500">
                لا توجد بيانات لعرضها
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={canDelete ? 7 : 6} className="px-4 py-3">
              <div className="flex justify-between items-center">
                <div>
                  {filteredItems.length > 0 && (
                    <span className="text-sm text-gray-500">
                      إجمالي العناصر: {filteredItems.length}
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
                    <button
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
      </table>

      {/* Dialog for adding/editing service */}
      <Dialog 
        open={dialogOpen} 
        onClose={handleCloseDialog} 
        fullWidth 
        maxWidth="md"
        dir="rtl"  // For RTL support
      >
        <DialogTitle className="flex justify-between items-center border-b p-4">
          <Typography variant="h6">
            {editItem.data ? 'تعديل خدمة' : 'إضافة خدمة جديدة'}
          </Typography>
          <IconButton onClick={handleCloseDialog} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="p-0">
          <AddServiceForm
            onClose={handleCloseDialog}
            onAdd={handleAddService}
            onEdit={handleEditService}
            editData={editItem.data}
            editIndex={editItem.index ?? undefined}
            serviceType={type}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};