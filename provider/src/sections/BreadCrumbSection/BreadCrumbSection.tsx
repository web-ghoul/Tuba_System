import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { PrimaryBox } from "../../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../../mui/containers/PrimaryContainer";

const BreadCrumbSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <BreadCrumb />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default BreadCrumbSection;
