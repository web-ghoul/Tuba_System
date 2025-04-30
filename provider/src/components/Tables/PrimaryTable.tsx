import React from 'react';
import { ClaimRecord } from '../../types/claimRecord';
import { CLAIM_REQUEST_STATUSES } from '../../constants/claimStatus';
import { useNavigate } from 'react-router-dom';


interface PrimaryTableProps {
  data: ClaimRecord[];
}

const PrimaryTable: React.FC<PrimaryTableProps> = ({ data }) => {
    const navigate = useNavigate();

  return (
    <table className="table align-middle table-hover" >
      <thead>
        <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
          <th>رقم</th>
          <th>اسم الشخص المغطى</th>
          <th>جنسية الشخص المغطى</th>
          <th className="text-center">تاريخ الإصدار</th>
          <th className="text-center">الإجمالي</th>
          <th className="text-center">الضريبة</th>
          <th className="text-center">الإجمالي مع الضريبة</th>
          <th className="text-center">الحالة</th>
          <th className="text-end min-w-70px">الخيارات</th>
        </tr>
      </thead>
      <tbody className="fw-semibold text-gray-600">
        {data.map((item, index) => {
          const statusInfo = CLAIM_REQUEST_STATUSES[item.status];
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.nationality}</td>
              <td className="text-center">{item.issueDate}</td>
              <td className="text-center">{item.total}</td>
              <td className="text-center">{item.vat}</td>
              <td className="text-center">{item.totalWithVat}</td>
              <td className="text-center">
                <span
                  className="badge"
                  style={{
                    backgroundColor: statusInfo.color,
                    color: statusInfo.textColor,
                    borderRadius: '8px',
                    padding: '5px 10px',
                  }}
                >
                  {statusInfo.label}
                </span>
              </td>
              <td className="text-end min-w-70px">
                <button className="btn btn-sm btn-outline-primary"   onClick={() => navigate(`/approvals/${item.id}`)}>عرض</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PrimaryTable;
