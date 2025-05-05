import useAxios from "../hooks/useAxios";
const { server } = useAxios();
export const getPatientInfo = async (nId:string) => {

    return  server.get(`/document/TB Company Employee Members?fields="*"&filters=[["national_id", "=", "${nId}"]]&parent=TB Company Employee`);
};

// export const checkOnBranch = async (nId:string) => {

//     return  server.get(`method/validate_branch_in_employee_member`);
// };