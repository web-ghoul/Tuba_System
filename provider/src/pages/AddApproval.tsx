import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import AddApprovalSection from "../sections/Approval/AddApprovalSection";
import SearchEmployeeSection from "../sections/Approval/SearchEmployeeSection";


const AddApproval: React.FC = () => {


    return (

        <PrimaryBox>
            
            <PrimaryContainer className={`!grid justify-stretch items-start gap-2`}>
                <SearchEmployeeSection /> 
                <AddApprovalSection />



            </PrimaryContainer>
           
      
        </PrimaryBox >
    );
};

export default AddApproval;
