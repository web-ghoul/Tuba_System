import { Paper } from "@mui/material";
import ApprovalDetailsSection from "../components/approval/ApprovalDetailsSection";
import ServiceDetailsSection from "../components/approval/ServiceDetailsSection";
import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import CoverageDetailsSection from "../components/approval/CoverageDetailsSection";
import FilesSection from "../components/approval/FilesSection";
import ItemsSection from "../components/approval/ItemsSection";
import TotalsSection from "../components/approval/TotalsSection";

const ApprovalPage: React.FC = () => {


    return (

        <PrimaryBox>
            
            <PrimaryContainer className={`!grid justify-stretch items-start gap-2`}>
                <ApprovalDetailsSection />
                <ServiceDetailsSection />
                <CoverageDetailsSection />
                <FilesSection  />
                <ItemsSection/>
                <TotalsSection />



            </PrimaryContainer>
           
      
        </PrimaryBox >
    );
};

export default ApprovalPage;
