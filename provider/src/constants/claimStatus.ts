export type ClaimRequestStatusKey =
  | 'Draft'
  | 'Pending'
  | 'InReview'
  | 'Rejected'
  | 'Approved'
  | 'Partially Approved'
  | 'Cancelled'
  | 'Received'
  | 'Partially Recieved'
  | 'Following Up'
  | 'Closed'
  | 'Discharged'
  | 'Further Data';

interface ClaimRequestStatusData {
  label: string;
  color: string;
  textColor: string;
}

export const CLAIM_REQUEST_STATUSES: Record<ClaimRequestStatusKey, ClaimRequestStatusData> = {
  Draft: { label: 'مسودة', color: '#6B7280', textColor: '#FFFFFF' }, // gray bg, white text
  Pending: { label: 'قيد الإنتظار', color: '#F59E0B', textColor: '#000000' }, // yellow bg, black text
  InReview: { label: 'قيد المراجعة', color: '#3B82F6', textColor: '#FFFFFF' }, // blue bg, white text
  Rejected: { label: 'مرفوض', color: '#EF4444', textColor: '#FFFFFF' }, // red bg, white text
  Approved: { label: 'موافق', color: '#DEFCEE', textColor: '#065F46' }, // light green bg, dark green text
  'Partially Approved': { label: 'موافق جزئياً', color: '#6366F1', textColor: '#FFFFFF' }, // indigo bg, white text
  Cancelled: { label: 'ملغاة', color: '#374151', textColor: '#FFFFFF' }, // dark gray bg, white text
  Received: { label: 'تم الاستلام', color: '#6366F1', textColor: '#FFFFFF' }, // indigo bg, white text
  'Partially Recieved': { label: 'تم الاستلام جزئياً', color: '#6366F1', textColor: '#FFFFFF' },
  'Following Up': { label: 'متابعة', color: '#F97316', textColor: '#000000' }, // orange bg, black text
  Closed: { label: 'مغلقة', color: '#DC2626', textColor: '#FFFFFF' }, // dark red bg, white text
  Discharged: { label: 'مخرج', color: '#DC2626', textColor: '#FFFFFF' },
  'Further Data': { label: 'بيانات إضافية', color: '#3B82F6', textColor: '#FFFFFF' }, // blue bg, white text
};
