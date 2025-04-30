import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import EmployeesSection from "../sections/EmployeesSection/EmployeesSection";

const Employees = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-8`}>
        <EmployeesSection />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Employees;
