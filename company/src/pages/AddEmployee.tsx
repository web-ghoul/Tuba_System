import { useTabs } from "../contexts/TabsContext";
import AddEmployeeJobInfoSection from "../sections/AddEmployeeSections/AddEmployeeJobInfoSection";
import AddEmployeeMedicalCoverageSection from "../sections/AddEmployeeSections/AddEmployeeMedicalCoverageSection";
import AddEmployeePersonalInfoSection from "../sections/AddEmployeeSections/AddEmployeePersonalInfoSection";
import CustomTabPanel from "../Tabs/CustomTabPanel";
import CustomTabs from "../Tabs/CustomTabs";

const AddEmployee = () => {
  const { state } = useTabs();
  const value = state.employeeTab;

  return (
    <CustomTabs
      tabsTitles={["المعلومات الشخصية", "معلومات العمل", "التغطية الطبية"]}
      variant={"EMPLOYEE"}
    >
      <CustomTabPanel value={value} index={0}>
        <AddEmployeePersonalInfoSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddEmployeeJobInfoSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AddEmployeeMedicalCoverageSection />
      </CustomTabPanel>
    </CustomTabs>
  );
};

export default AddEmployee;
