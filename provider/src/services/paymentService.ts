import useAxios from "../hooks/useAxios";
const { server } = useAxios();
export const getTransactions = async () => {

    return  server.get(`/document/TB Provider Transaction?fields="*"`);
};