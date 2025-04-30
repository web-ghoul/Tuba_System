import React, { useState } from 'react';
import { ClaimRequestStatusKey, CLAIM_REQUEST_STATUSES } from '../../constants/claimStatus';

// Define types for our data structure
type Item = {
    item_name?: string;
    claim?: string;
    price_taxed?: string;
    covered_taxed?: string;
    deductible_taxed?: string;
    status?: string;
    is_visit?: number;
    rejection_reason_description?: string;
    name?: string;
};
// Mock data for testing ItemsSection component
const mockClaim: Claim = {
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
    ]
};



type Claim = {
    workflow_state: string;
    items?: Item[];
};



interface ItemsSectionProps {
    claim: Claim;
}

const ItemsSection: React.FC<ItemsSectionProps> = ({ claim = mockClaim }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<{ id: number; data: string }>({ id: 0, data: '' });

    const handleOpenModal = (action: string, data: { id: number; data: string }) => {
        if (action === 'view_rejection_reason') {
            setModalData(data);
            setModalOpen(true);
        }
    };

    const confirmDelivery = (itemName: string | undefined) => {
        // Implementation for delivery confirmation
        console.log(`Confirming delivery for item: ${itemName}`);
        // Additional logic would go here
    };

    const getStatusBadgeStyle = (status: string | undefined) => {
        const statusKey = status as ClaimRequestStatusKey || 'Pending';
        if (CLAIM_REQUEST_STATUSES[statusKey]) {
            return {
                backgroundColor: CLAIM_REQUEST_STATUSES[statusKey].color,
                color: CLAIM_REQUEST_STATUSES[statusKey].textColor
            };
        }
        return { backgroundColor: '#6B7280', color: '#FFFFFF' }; // Default gray
    };

    const getItemStatus = (item: Item) => {
        let status: ClaimRequestStatusKey = 'Pending';

        if (!item.status && claim.workflow_state !== 'Draft') {
            status = 'Pending';
        } else if (claim.workflow_state === 'Draft') {
            status = 'Draft';
        } else if (item.is_visit) {
            status = 'Approved';
        } else if (item.status && item.status in CLAIM_REQUEST_STATUSES) {
            status = item.status as ClaimRequestStatusKey;
        }

        return CLAIM_REQUEST_STATUSES[status].label;
    };

    return (
        <div>
            <div className="border-t border-gray-200 my-10"></div>

            {/* Coverage Plan Section Header */}
            <h4 className="text-blue-600 mb-5">خطة التغطية</h4>

            {/* Card Container */}
            <div className="bg-white rounded shadow-sm mb-10 w-full border rounded-lg">
                {/* Card Header */}
                <div className="min-h-[60px] bg-[#5A46E6] p-4  ">
                    <div className="grid grid-cols-12 gap-5 text-white text-sm font-medium">
                        <div className="col-span-2 text-start">البند</div>
                        <div className="col-span-2 text-start">السعر شامل الضريبة</div>
                        <div className="col-span-2 text-start">المبلغ المغطى شامل الضريبة</div>
                        <div className="col-span-2 text-start">المبلغ المستحق شامل الضريبة</div>
                        <div className="col-span-2 text-start">الحالة</div>

                        {claim.workflow_state === 'Rejected' && (
                            <div className="col-span-2 text-right">سبب الرفض</div>
                        )}

                        {claim.workflow_state === 'Approved' && (
                            <div className="col-span-2 text-right">الإجراءات</div>
                        )}
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                    {claim.items?.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 my-5 pb-4 border-b border-gray-200"
                        >
                            <div className="col-span-2  text-start">{item.item_name || item.claim}</div>
                            <div className="col-span-2  text-start">
                                {item.price_taxed} ريال سعودي
                            </div>
                            <div className="col-span-2  text-start">
                                {item.covered_taxed} ريال سعودي
                            </div>
                            <div className="col-span-2  text-start">
                                {item.deductible_taxed} ريال سعودي
                            </div>
                            <div className="col-span-2  text-start">
                                <span
                                    className="inline-flex px-2 py-1 text-xs font-semibold rounded-md"
                                    style={getStatusBadgeStyle(item.status)}
                                >
                                    {getItemStatus(item)}
                                </span>
                            </div>

                            {item.status === 'Rejected' && (
                                <div className="col-span-2 h-full text-right">
                                    <button
                                        onClick={() => handleOpenModal('view_rejection_reason', {
                                            id: index + 1,
                                            data: item.rejection_reason_description || ''
                                        })}
                                        className="flex justify-center items-center px-2 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        سبب الرفض
                                    </button>
                                </div>
                            )}

                            {claim.workflow_state === 'Approved' && (
                                <div className="col-span-2 hidden text-center">
                                    {item.status !== 'Received' ? (
                                        <button
                                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                            onClick={() => confirmDelivery(item.name)}
                                        >
                                            اختيار
                                        </button>
                                    ) : (
                                        <button
                                            className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                                            disabled
                                        >
                                            تم الاختيار
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Rejection Reason */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full">
                        <h3 className="text-lg font-medium mb-4">سبب الرفض</h3>
                        <p className="text-gray-700">{modalData.data}</p>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                إغلاق
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ItemsSection;