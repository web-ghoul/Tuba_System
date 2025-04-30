import React from 'react';

export interface Transaction {
  name?: string;
  transaction_date?: string;
  bank_account?: string;
  payment_type?: string;
  total_amount?: string | number;
}

interface TransactionsTableProps {
  transactions?: Transaction[];
  title?: string;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions = [],
  title = 'سجل التحويلات', // fallback title
}) => {
  return (
    <div className="">
      <h1 className="text-black text-lg font-bold mb-4">{title}</h1>

      <div className="rounded-lg overflow-x-auto">
        <table className="transactions min-w-full table-auto border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-400 bg-gray-100 text-sm text-start">
              <th className="px-4 py-2 text-start">معرّف التحويل</th>
              <th className="px-4 py-2 text-start">تاريخ التحويل</th>
              <th className="px-4 py-2 text-start">رقم الحساب البنكي</th>
              <th className="px-4 py-2 text-end">طريقة التحويل</th>
              <th className="px-4 py-2 text-end">قيمة التحويل</th>
            </tr>
          </thead>

          <tbody className="bg-white text-sm">
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border-b border-gray-100"
                >
                  <td className="text-indigo-600 px-4 py-2">{transaction.name || ''}</td>
                  <td className="px-4 py-2">{transaction.transaction_date || ''}</td>
                  <td className="px-4 py-2">{transaction.bank_account || '--'}</td>
                  <td className="px-4 py-2 text-end">{transaction.payment_type || '--'}</td>
                  <td className="px-4 py-2 text-end">{transaction.total_amount || '--'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  لا توجد تحويلات حالياً
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
