import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { getInvoiceStats } from '../services/dashboardService';
import InvoiceChartSkeleton from '../skeletons/InvoiceChartSkeleton';

ChartJS.register(ArcElement, Tooltip, Legend);

const InvoiceChart: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [invoicesPaid, setInvoicesPaid] = useState(0);
    const [invoicesUnpaid, setInvoicesUnpaid] = useState(0);

    useEffect(() => {
        const fetchInvoiceData = async () => {
            try {
                const res = await getInvoiceStats();
                const data = res?.data?.data || {};
                setInvoicesPaid(data.paid || 0);
                setInvoicesUnpaid(data.unpaid || 0);
            } catch (err) {
                console.error("Failed to fetch invoice stats", err);
            } finally {
                setLoading(false);
            }
        };

        fetchInvoiceData();
    }, []);

    if (loading) return <InvoiceChartSkeleton />;

    const totalInvoices = invoicesPaid + invoicesUnpaid;

    const data = {
        labels: ['Invoices Paid', 'Invoices Unpaid'],
        datasets: [
            {
                data: [invoicesPaid, invoicesUnpaid],
                backgroundColor: ['#5A46E6', '#2AD2C5'],
                hoverOffset: 4,
                borderWidth: 0,
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        maintainAspectRatio: false,
        cutout: '70%',
        rotation: -90,
        circumference: 180,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between h-full min-h-[400px]">
            <h2 className="text-right mb-4 font-bold text-xl">إحصائيات الفواتير</h2>

            <div className="grid justify-center items-center relative flex-1">
                <div className="w-[300px] h-[150px] mx-auto relative">
                    <Doughnut data={data} options={options} />
                </div>

                <div className="grid justify-center items-center gap-2 absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-3xl font-bold">
                        {totalInvoices.toLocaleString()}
                    </h3>
                    <p className="text-black text-md font-medium">Total Invoices</p>
                </div>
            </div>

            <hr className="border border-[#EBEBEB] my-6" />

            <div className="flex justify-between items-center flex-wrap gap-6">
                <div className="grid justify-stretch items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#5A46E6]"></div>
                        <span className="text-lg font-medium text-[#5A46E6]">Invoices Paid</span>
                    </div>
                    <h6 className="text-lg font-bold">
                        {invoicesPaid.toLocaleString()}
                    </h6>
                </div>

                <div className="grid justify-stretch items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-[#2AD2C5]"></div>
                        <span className="text-lg font-medium text-[#2AD2C5]">Invoices Unpaid</span>
                    </div>
                    <h6 className="text-lg font-bold">
                        {invoicesUnpaid.toLocaleString()}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default InvoiceChart;
