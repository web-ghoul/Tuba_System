import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AddServiceForm } from '../../forms/Approvals/AddServiceForm';
import { useServiceTable } from '../../hooks/useServiceTable';
import { ServiceTableHeader } from '../../components/approval/ServiceTableHeader';
import { ServiceTableRow } from '../../components/approval/ServiceTableRow';
import { ServiceTableFooter } from '../../components/approval/ServiceTableFooter';
import { Claim } from '../../types/services'

export interface ServiceTableProps {
  type: string;
  tableId: string;
  claim?: Claim;
  id?: string;
  deduct:number;
  vat:number;
  onClaimUpdate?: (updatedClaim: Claim) => void;
}

export const ServiceTable: React.FC<ServiceTableProps> = ({ 
  type, 
 
  vat,
  claim: initialClaim,
  
   
 
  deduct,
  onClaimUpdate 
}) => {
  const {
   
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
  } = useServiceTable({ initialClaim, onClaimUpdate });

  return (
    <>
      <table className="w-full border border-gray-200 text-sm">
        <ServiceTableHeader 
          canDelete={canDelete} 
          handleSelectAll={handleSelectAll} 
          selectedItems={selectedItems} 
          filteredItems={filteredItems} 
        />
        
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <ServiceTableRow
                key={index}
                type={type}
                item={item}
                index={index}
                canDelete={canDelete}
                canEdit={canEdit}
                selectedItems={selectedItems}
                handleCheckboxChange={handleCheckboxChange}
                handleOpenEditDialog={handleOpenEditDialog}
              />
            ))
          ) : (
            <tr>
              <td colSpan={canDelete ? 7 : 6} className="px-4 py-6 text-center text-gray-500">
                لا توجد بيانات لعرضها
              </td>
            </tr>
          )}
        </tbody>
        
        <ServiceTableFooter
          canDelete={canDelete}
          type={type}
          canEdit={canEdit}
          filteredItems={filteredItems}
          selectedItems={selectedItems}
          handleDeleteSelected={handleDeleteSelected}
          setDialogOpen={setDialogOpen}
        />
      </table>

      <Dialog 
        open={dialogOpen} 
        onClose={handleCloseDialog} 
        fullWidth 
        maxWidth="md"
        dir="rtl"
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
            deduct={deduct}
            type={type}
            vat={vat}
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