// services/dashboardService.ts
import useAxios from "../hooks/useAxios";
const { server } = useAxios();

export const getMedicalProviderDetails = async () => {

    return server.get(`/document/TB Medical Provider?fields="*"`);
};
export const getMedicalProviderBranchDetails = async () => {

    return server.get(`/document/TB Provider Branch?fields="*"`);
};
export const getMostRequestedServices = async () => {
    console.log("getMostRequestedServices");

    return server.get("method/tuba.api.provider.statistics.most_used_claims");
};
export const getEmployeesMonthsLineChart = async () => {
    //console.log("getMostRequestedServices");

    return server.get("method/tuba.api.provider.statistics.employees_usage_monthly");
};
export const getBranchesClaims = async () => {
    //console.log("getMostRequestedServices");

    return server.get("method/tuba.api.provider.statistics.claims_count_per_branch");
};

// Example in dashboardService.ts
export const getInvoiceStats = async (name :string) => {
    return await server.get(`/document/Purchase Invoice`); // or whatever endpoint
};
export const getAllClaims = async () => {
    return await server.get(`/document/TB Medical Claims Request?fields="*"`); // or whatever endpoint
};
export const getClaim = async (name:string) => {
    return await server.get(`/document/TB Medical Claims Request/${name}?fields="*"`); // or whatever endpoint
};
export const getTransactions = async () => {

    return server.get(`/document/TB Provider Transaction?fields="*"`);
};