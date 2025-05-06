import React, { useEffect, useState } from "react";
import { getMostRequestedServices } from "../../services/dashboardService";
import MostRequestedServicesSkeleton from "../../skeletons/MostRequestedServicesSkeleton";

interface MedicalService {
  claim_id: string;
  claim_name: string;
  count: number;
}

const MostRequestedServices: React.FC = () => {


  const [services, setServices] = useState<MedicalService[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {


        const res = await getMostRequestedServices();
        console.log(res.data.data);

        const result = (res?.data?.data || []).map((item: any) => ({
          claim_id: item.claim_id,
          claim_name: item.claim_name,
          count: item.count,
        }));
        console.log(result, "skdj");


        setServices(result);
        console.log(services, "dskdjsd");

      } catch (e) {
        console.error("Error fetching services", e);
        setServices([]); // fallback: empty table
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <MostRequestedServicesSkeleton />;

  return (
    <div className="w-full max-w-3xl mx-auto" dir="rtl">
      <h2 className="text-right mb-4 font-bold text-xl">الوصفات الأكثر طلبا</h2>

      <div className="shadow-md rounded-lg overflow-hidden bg-white">
        <div className="max-h-64 overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="px-2 py-3 text-right text-sm font-medium">رقم الخدمة</th>
                <th className="px-2 py-3 text-right text-sm font-medium">اسم العنصر</th>
                <th className="px-2 py-3 text-right text-sm font-medium">عدد المطالبات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.length > 0 ? (
                services.map((service, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-right text-sm font-medium text-blue-600">
                      {service.claim_id}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-800">
                      {service.claim_name}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-800">
                      {service.count}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-400">
                    لا توجد بيانات لعرضها
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MostRequestedServices;
