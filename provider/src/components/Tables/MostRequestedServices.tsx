import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMedicalProviderDetails } from "../../services/dashboardService";
import { CircularProgress, Typography } from "@mui/material";

interface MedicalService {
  id: string;
  name: string;
  count: number;
}

const MostRequestedServices: React.FC = () => {
  const providerName = "HCP-895";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["medical-provider", providerName],
    queryFn: () => getMedicalProviderDetails(providerName),
  });

  if (isLoading)
    return <div className="text-center py-6"><CircularProgress /></div>;

  if (isError)
    return <Typography className="text-red-600 text-center">حدث خطأ في تحميل البيانات</Typography>;

  // You may need to adapt the path depending on the actual structure
  const services: MedicalService[] = data?.data?.data?.most_used_claims || [];

  return (
    <div className="w-full max-w-3xl mx-auto" dir="rtl">
      <h2 className="text-right mb-4 font-bold text-xl">الوصفات الأكثر طلبا</h2>

      <div className="shadow-md rounded-lg overflow-hidden bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-3 text-right text-sm font-medium">رقم المطالبة</th>
              <th className="px-2 py-3 text-right text-sm font-medium">اسم العنصر</th>
              <th className="px-2 py-3 text-right text-sm font-medium">عدد المطالبات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 text-right text-sm font-medium text-blue-600">
                  {service.id}
                </td>
                <td className="px-6 py-4 text-right text-sm text-gray-800">
                  {service.name}
                </td>
                <td className="px-6 py-4 text-right text-sm text-gray-800">
                  {service.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostRequestedServices;
