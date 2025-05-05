import React, { useEffect, useState } from 'react';
import { ClaimTotalCardProps, ServiceItem } from '../../types/services';
import { ReadonlyInput } from './ReadonlyInput';




const ClaimTotalCard: React.FC<ClaimTotalCardProps> = ({ 
    isVisible, 
    labels, 
    claimItems = [],
    vatRate = 15 ,
    deduct = 20,
}) => {
    // State for calculated totals
    const [totals, setTotals] = useState({
        totalCost: 0,
        totalCostVat: 0,
        totalCostWithVat: 0,
        totalDeductibleCost: 0,
        totalDeductibleCostVat: 0,
        totalDeductibleCostWithVat: 0,
        totalCoveredAmount: 0,
        totalCoveredAmountVat: 0,
        totalCoveredAmountWithVat: 0,
    });

    // Recalculate totals whenever claimItems change
    useEffect(() => {
        if (claimItems.length === 0) {
            setTotals({
                totalCost: 0,
                totalCostVat: 0,
                totalCostWithVat: 0,
                totalDeductibleCost: 0,
                totalDeductibleCostVat: 0,
                totalDeductibleCostWithVat: 0,
                totalCoveredAmount: 0,
                totalCoveredAmountVat: 0,
                totalCoveredAmountWithVat: 0,
            });
            return;
        }

        // Calculate the totals based on claim items
        const totalCost = claimItems.reduce((sum, item) => sum + (Number(item.base_price) || 0) * (Number(item.quantity) || 1), 0);
        const totalCostVat = totalCost * (vatRate / 100);
        const totalCostWithVat = totalCost + totalCostVat;

        // Calculate deductibles based on coverage percentage or deductible amount
        const totalDeductibleCost = claimItems.reduce((sum, item) => {
            const itemPrice = (Number(item.base_price) || 0) * (Number(item.quantity) || 1);
            const deductibleAmount = itemPrice * ((100 - (Number(deduct) || 0)) / 100);
            return sum + deductibleAmount;
        }, 0);
        
        const totalDeductibleCostVat = totalDeductibleCost * (vatRate / 100);
        const totalDeductibleCostWithVat = totalDeductibleCost + totalDeductibleCostVat;

        // Calculate covered amounts
        const totalCoveredAmount = totalCost - totalDeductibleCost;
        const totalCoveredAmountVat = totalCostVat - totalDeductibleCostVat;
        const totalCoveredAmountWithVat = totalCoveredAmount + totalCoveredAmountVat;

        setTotals({
            totalCost,
            totalCostVat,
            totalCostWithVat,
            totalDeductibleCost,
            totalDeductibleCostVat,
            totalDeductibleCostWithVat,
            totalCoveredAmount,
            totalCoveredAmountVat,
            totalCoveredAmountWithVat,
        });
    }, [claimItems, vatRate]);

    // Format currency - assuming SAR (Saudi Riyal)
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'sar',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    return (
        <div className="p-6 total-card gap-10" id="claim_view3">
            <h5 className="my-5">{labels.claimTotals}</h5>
            {(!isVisible || claimItems.length === 0) && (
                <h4 className="text-center font-medium text-xl" id="total_claims_title">
                    {labels.startSearchText}
                </h4>
            )}
            {isVisible && claimItems.length > 0 && (
                <div
                    className="grid grid-cols-3 gap-4 justify-stretch items-center"
                    id="total_claim_content"
                >
                    <ReadonlyInput 
                        label={labels.totalCost} 
                        id="total_cost" 
                        value={formatCurrency(totals.totalCost)} 
                    />
                    <ReadonlyInput 
                        label={labels.totalCostVat} 
                        id="total_cost_vat" 
                        value={formatCurrency(totals.totalCostVat)} 
                    />
                    <ReadonlyInput 
                        label={labels.totalCostWithVat} 
                        id="total_cost_with_vat" 
                        value={formatCurrency(totals.totalCostWithVat)} 
                    />
                    
                    <ReadonlyInput 
                        label={labels.totalDeductibleCost} 
                        id="total_deductible_cost" 
                        value={formatCurrency(totals.totalDeductibleCost)} 
                    />
                    <ReadonlyInput 
                        label={labels.vat} 
                        id="total_deductible_cost_vat" 
                        value={String(vatRate)} 
                        percent 
                    />
                    <ReadonlyInput 
                        label={labels.totalDeductibleCostWithVat} 
                        id="total_deductible_cost_with_vat" 
                        value={formatCurrency(totals.totalDeductibleCostWithVat)} 
                    />
                    
                    <ReadonlyInput 
                        label={labels.totalCoveredAmount} 
                        id="claim_amount" 
                        value={formatCurrency(totals.totalCoveredAmount)} 
                    />
                    <ReadonlyInput 
                        label={labels.vat} 
                        id="total_tax_vat" 
                        value={String(vatRate)} 
                        percent 
                    />
                    <ReadonlyInput 
                        label={labels.totalCoveredAmountWithVat} 
                        id="total_price_taxed" 
                        value={formatCurrency(totals.totalCoveredAmountWithVat)} 
                    />
                </div>
            )}
        </div>
    );
};

export default ClaimTotalCard;