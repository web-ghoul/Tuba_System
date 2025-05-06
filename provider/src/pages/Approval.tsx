

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClaim } from "../services/dashboardService";


import { Claim } from "../types/approval";
import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import ApprovalDetailsSection from "../components/approval/ApprovalDetailsSectionComponent";
 import ServiceDetailsSection  from "../components/approval/ServiceDetailsSectionComponent";
import CoverageDetailsSection from "../components/approval/CoverageDetailsSectionComponent";
import FilesSection from "../components/approval/FilesSectionComponent";
import ItemsSection from "../components/approval/ItemsSectionComponent";
import TotalsSection from "../components/approval/TotalsSectionComponent";

const ApprovalPage: React.FC = () => {
    const { id } = useParams(); // from route like /approval/:claimId
    const [claim, setClaim] = useState<Claim | null>(null);
    const [, setLoading] = useState<boolean>(false);


    useEffect(() => {
        const fetchClaims = async () => {
            try {

                const response = await getClaim(id as string);

                setClaim(response.data.data);
            } catch (error) {
                console.error('Failed to fetch claims:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClaims();
    }, []);

    if (!claim) return <div>Loading...</div>;
    
    

    return (

        <PrimaryBox>

            <PrimaryContainer className={`!grid justify-stretch items-start gap-2`}>
                <ApprovalDetailsSection claim ={claim} hasFurtherDataItems={false} />
                <ServiceDetailsSection serviceDetails={null} />
                <CoverageDetailsSection  coverageDetails={null} />
                <FilesSection items = {claim.items} />
                <ItemsSection  claim={claim} />
                <TotalsSection  claim={{ ...claim, total_price_base: claim.total_price_base.toString() }} />



            </PrimaryContainer>


        </PrimaryBox >
    );
};

export default ApprovalPage;
