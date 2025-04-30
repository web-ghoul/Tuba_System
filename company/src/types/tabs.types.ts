import { ReactNode } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface CustomTabsTypes {
  variant: "EMPLOYEE";
  tabsTitles: string[];
  children: ReactNode;
}

export type { CustomTabsTypes, TabPanelProps };
