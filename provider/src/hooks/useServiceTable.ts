import { useState, useEffect } from 'react';
import { Claim, ServiceItem, EditItemState } from '../types/services';

interface UseServiceTableProps {
  initialClaim?: Claim;
  onClaimUpdate?: (updatedClaim: Claim) => void;
}

export const useServiceTable = ({ initialClaim, onClaimUpdate }: UseServiceTableProps) => {
  // Create local state to manage the claim data
  const [claim, setClaim] = useState<Claim>(initialClaim || { items: [] });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [editItem, setEditItem] = useState<EditItemState>({
    data: null,
    index: null
  });

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

  // Update the parent component with the new claim data
  const updateClaimData = (updatedClaim: Claim) => {
    setClaim(updatedClaim);
    if (onClaimUpdate) {
      onClaimUpdate(updatedClaim);
    }
  };

  // Handle adding a new service
  const handleAddService = (serviceData: ServiceItem) => {
    const updatedClaim = {
      ...claim,
      items: [...(claim?.items || []), serviceData]

    };
   
    
    setClaim(updatedClaim);
    onClaimUpdate?.(updatedClaim);
    updateClaimData(updatedClaim);
    console.log('Service added successfully:', serviceData);
  };

  // Handle editing a service
  const handleEditService = (serviceData: ServiceItem, index: number) => {
    const newItems = [...(claim?.items || [])];
    newItems[index] = serviceData;

    const updatedClaim = {
      ...claim,
      items: newItems
    };

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
      const newItems = (claim?.items || []).filter((_, index) => !selectedItems.includes(index));

      const updatedClaim = {
        ...claim,
        items: newItems
      };

      updateClaimData(updatedClaim);
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
    console.log(item);
    
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

  return {
    claim,
    filteredItems,
    selectedItems,
    canEdit,
    canDelete,
    dialogOpen,
    editItem,
    handleAddService,
    handleEditService,
    handleDeleteSelected,
    handleCheckboxChange,
    handleOpenEditDialog,
    handleCloseDialog,
    handleSelectAll,
    setDialogOpen
  };
};