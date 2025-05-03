import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CLAIM_REQUEST_STATUSES, ClaimRequestStatusKey } from '../constants/claimStatus';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import {getAllClaims}  from '../services/dashboardService';
import ClaimsStatusChartSkeleton from '../skeletons/ClaimsStatusChartSkeleton';


ChartJS.register(ArcElement, Tooltip, Legend);

const visibleKeys: ClaimRequestStatusKey[] = [
    'Draft',
    'Approved',
    'Partially Approved',
    'Rejected',
    'Discharged',
];

const ClaimsStatusChart: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [claims, setClaims] = useState<any[]>([]); // replace `any` with your Claim type
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClaims = async () => {
            try {
                const data = await getAllClaims();
                console.log(data.data);
                
                setClaims(data.data.data || []);
            } catch (error) {
                setClaims([]);
            } finally {
                setLoading(false);
            }
        };

        fetchClaims();
    }, []);

    const countsByStatus: Record<ClaimRequestStatusKey, number> = {
        Draft: 0,
        Approved: 0,
        'Partially Approved': 0,
        Rejected: 0,
        Discharged: 0,
        Pending: 0,
        InReview: 0,
        Cancelled: 0,
        Received: 0,
        'Partially Recieved': 0,
        'Following Up': 0,
        Closed: 0,
        'Further Data': 0
    };

    claims.forEach((claim) => {
        const state = claim.workflow_state as ClaimRequestStatusKey;
        if (visibleKeys.includes(state)) {
            countsByStatus[state]++;
        }
    });

    const filteredItems = (Object.entries(CLAIM_REQUEST_STATUSES) as [ClaimRequestStatusKey, typeof CLAIM_REQUEST_STATUSES[ClaimRequestStatusKey]][])
        .filter(([key]) => visibleKeys.includes(key));

    const total = Object.values(countsByStatus).reduce((sum, count) => sum + count, 0);

    const data = {
        labels: filteredItems.map(([_, { label }]) => label),
        datasets: [
            {
                data: filteredItems.map(([key]) => countsByStatus[key]),
                backgroundColor: filteredItems.map(([_, { color }]) => color),
                borderWidth: 0,
                cutout: '70%',
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    if (loading) return <ClaimsStatusChartSkeleton />;
    

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-right text-lg font-bold mb-4">حالة المطالبات</h2>
            <div className="flex flex-row md:flex-row justify-between items-center gap-4">
                <div className="w-[200px] h-[200px] relative order-1 md:order-2">
                    <Doughnut data={data} options={options} />
                </div>

                <div className="grid gap-4 text-right order-2 md:order-1">
                    {filteredItems.map(([key, { label, color }]) => (
                        <div key={key} className="flex items-center gap-2 justify-end">
                            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: color }}></div>
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClaimsStatusChart;
