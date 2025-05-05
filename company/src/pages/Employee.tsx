import { useTabs } from "../contexts/TabsContext";
import EmployeeJobInfoSection from "../sections/EmployeeSections/EmployeeJobInfoSection";
import EmployeeMedicalCoverageSection from "../sections/EmployeeSections/EmployeeMedicalCoverageSection";
import EmployeeMembersSection from "../sections/EmployeeSections/EmployeeMembersSection";
import EmployeePersonInfoSection from "../sections/EmployeeSections/EmployeePersonInfoSection";
import EmployeeSection from "../sections/EmployeeSections/EmployeeSection";
import CustomTabPanel from "../Tabs/CustomTabPanel";
import CustomTabs from "../Tabs/CustomTabs";

const Employee = () => {
  const { state } = useTabs();
  const value = state.employeeTab;

  return (
    <>
      <EmployeeSection />
      <CustomTabs
        tabsTitles={[
          "المعلومات الشخصية",
          "معلومات العمل",
          "التغطية الطبية",
          "التابعين",
        ]}
        variant={"EMPLOYEE"}
      >
        <CustomTabPanel value={value} index={0}>
          <EmployeePersonInfoSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <EmployeeJobInfoSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <EmployeeMedicalCoverageSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <EmployeeMembersSection />
        </CustomTabPanel>
      </CustomTabs>
    </>
  );
};

export default Employee;
