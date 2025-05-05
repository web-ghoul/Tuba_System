import React from 'react';

interface RejectionAlertProps {
  rejectionReason?: string;
  show: boolean;
}

const RejectionAlert: React.FC<RejectionAlertProps> = ({ rejectionReason, show }) => {
  if (!show || !rejectionReason) return null;

  return (
    <div className="mb-8">
      <div className="alert alert-danger d-flex align-items-center p-5">
        <i className="ki-duotone ki-information-5 fs-2hx text-danger me-4" />
        <div className="d-flex flex-column">
          <h4 className="mb-1 text-danger">Rejection Reason</h4>
          <span>{rejectionReason}</span>
        </div>
      </div>
    </div>
  );
};

export default RejectionAlert;