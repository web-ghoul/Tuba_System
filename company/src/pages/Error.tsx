import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import ErrorSection from "../sections/ErrorSection/ErrorSection";

const Error = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <ErrorSection />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Error;
