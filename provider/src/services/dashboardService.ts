// services/dashboardService.ts
import useAxios from "../hooks/useAxios";

export const getMedicalProviderDetails = async (name: string) => {
    const { server } = useAxios();
    return server.get(`/document/TB Medical Provider/${name}`);
};
export const getMostRequestedServices = async (name: string) => {
    const { server } = useAxios();
    return server.get("method/tuba.api.provider.statistics.most_used_claims");
};