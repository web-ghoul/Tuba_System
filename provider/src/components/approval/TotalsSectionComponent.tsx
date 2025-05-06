import { Paper } from '@mui/material';
import React from 'react';

// Define types for our data structure
type ClaimTotals = {
  total_price_base?: string;
  total_price_vat?: string;
  total_price_taxed?: string;
  total_deductible_base?: string;
  total_deductible_vat?: string;
  total_deductible_taxed?: string;
  total_covered_base?: string;
  total_covered_vat?: string;
  total_covered_taxed?: string;
  package_doc?: {
    deductible_percent?: string;
  };
};

interface TotalsSectionProps {
  claim: ClaimTotals | any;
}
const mockClaim = {
    workflow_state: 'Approved',
    items: [
      {
        item_name: 'فحص طبي',
        price_taxed: '500',
        covered_taxed: '400',
        deductible_taxed: '100',
        status: 'Approved',
        is_visit: 1
      },
      {
        item_name: 'دواء',
        price_taxed: '250',
        covered_taxed: '200',
        deductible_taxed: '50',
        status: 'Pending'
      },
      {
        item_name: 'أشعة سينية',
        price_taxed: '750',
        covered_taxed: '500',
        deductible_taxed: '250',
        status: 'Rejected',
        rejection_reason_description: 'غير مغطى بالتأمين'
      },
      {
        item_name: 'استشارة طبية',
        price_taxed: '300',
        covered_taxed: '300',
        deductible_taxed: '0',
        status: 'Received',
        name: 'consultation-123'
      }
    ],
    // TotalsSection data
    total_price_base: '1800',
    total_price_vat: '150',
    total_price_taxed: '1950',
    total_deductible_base: '370',
    total_deductible_vat: '30',
    total_deductible_taxed: '400',
    total_covered_base: '1430',
    total_covered_vat: '120',
    total_covered_taxed: '1550',
    package_doc: {
      deductible_percent: '20'
    }
  };

const TotalsSection: React.FC<TotalsSectionProps> = ({ claim = mockClaim }) => {
  return (
    <Paper className="grid grid-cols-3 gap-6 p-4 border rounded-lg shadow-md bg-white ">
      {/* Price Details Section */}
      <div>
        <h4 className="text-blue-600 mb-5">تفاصيل السعر</h4>
        <div className="">
          <div className="p-4">
            <div className="text-sm">
              <div className="mb-3 text-right">
                <span className="text-gray-500">المبلغ الأساسي: </span>
                <span className="text-black">
                  {claim.total_price_base} ريال سعودي
                </span>
              </div>
              <div className="mb-3 text-right">
                <span className="text-gray-500">ضريبة القيمة المضافة: </span>
                <span className="text-black">
                  {claim.total_price_vat} ريال سعودي
                </span>
              </div>
              <div className="text-right">
                <span className="text-gray-500">المبلغ مع الضريبة: </span>
                <span className="text-blue-600">
                  {claim.total_price_taxed} ريال سعودي
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deductible Details Section */}
      <div>
        <h4 className="text-blue-600 mb-5">
          تفاصيل الخصم{" "}
          <span className="mx-2 text-red-600">
            {claim.package_doc?.deductible_percent ?? ""} %
          </span>
        </h4>
        <div className="bg-white rounded shadow-sm">
          <div className="p-4">
            <div className="text-sm">
              <div className="mb-3 text-right">
                <span className="text-gray-500">المبلغ المستحق الأساسي: </span>
                <span className="text-black">
                  {claim.total_deductible_base ?? ""} ريال سعودي
                </span>
              </div>
              <div className="mb-3 text-right">
                <span className="text-gray-500">
                  المبلغ المستحق على الضريبة:{" "}
                </span>
                <span className="text-black">
                  {claim.total_deductible_vat ?? ""} ريال سعودي
                </span>
              </div>
              <div className="text-right">
                <span className="text-gray-500">المبلغ المستحق مع الضريبة: </span>
                <span className="text-blue-600">
                  {claim.total_deductible_taxed ?? ""} ريال سعودي
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Details Section */}
      <div>
        <h4 className="text-blue-600 mb-5">تفاصيل تغطية العناصر</h4>
        <div className="bg-white rounded shadow-sm">
          <div className="p-4">
            <div className="text-sm">
              <div className="mb-3 text-right">
                <span className="text-gray-500">المبلغ المغطى الأساسي: </span>
                <span className="text-black">
                  {claim.total_covered_base ?? ""} ريال سعودي
                </span>
              </div>
              <div className="mb-3 text-right">
                <span className="text-gray-500">
                  المبلغ المغطى على الضريبة:{" "}
                </span>
                <span className="text-black">
                  {claim.total_covered_vat ?? ""} ريال سعودي
                </span>
              </div>
              <div className="text-right">
                <span className="text-gray-500">المبلغ المغطى مع الضريبة: </span>
                <span className="text-blue-600">
                  {claim.total_covered_taxed ?? ""} ريال سعودي
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default TotalsSection;