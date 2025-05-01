import { useTabs } from "../../contexts/TabsContext";
import CustomTabPanel from "../../Tabs/CustomTabPanel";
import CustomTabs from "../../Tabs/CustomTabs";
import EmployeeJobInfoSection from "../EmployeeSections/EmployeeJobInfoSection";
import EmployeeMedicalCoverageSection from "../EmployeeSections/EmployeeMedicalCoverageSection";
import EmployeeMembersSection from "../EmployeeSections/EmployeeMembersSection";
import EmployeePersonInfoSection from "../EmployeeSections/EmployeePersonInfoSection";

const EmployeeDetailsSection = () => {
  const { state } = useTabs();
  const value = state.employeeTab;

  return (
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
  );
};

export default EmployeeDetailsSection;
