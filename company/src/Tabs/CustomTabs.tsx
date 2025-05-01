import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent } from "react";
import { CustomTabsTypes } from "../types/tabs.types";
import { useTabs } from "../contexts/TabsContext";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const stylingPaper = {
  borderBottom: 2,
  borderColor: "divider",
  "& button": {
    width: "100%",
    alignItems: "flex-start",
    color: "#000",
    fontSize: "16px",
  },
  "& >div>div>div": { gap: "0px" },
};

const CustomTabs = ({ variant, tabsTitles, children }: CustomTabsTypes) => {
  const { state, dispatch } = useTabs();

  const value = variant === "EMPLOYEE" ? state.employeeTab : 0;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    dispatch({ type: variant, payload: newValue });
  };

  return (
    <Box
      className={`grid justify-stretch items-start grid-cols-[27.5%,1fr] gap-4 md:gap-3 sm:!gap-2 md:grid-cols-1`}
    >
      <Paper className={`w-full paper !sticky top-[90px]`} sx={stylingPaper}>
        <Tabs
          value={value}
          orientation={"vertical"}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="w-full"
        >
          {tabsTitles.map((title: string, i: number) => (
            <Tab
              key={i}
              label={
                <Box
                  className={`grid justify-start items-center grid-cols-[auto,1fr] gap-4 p-2 rounded-lg ${
                    value === i ? "bg-primary_light" : "bg-transparent"
                  } w-full`}
                >
                  <Box
                    className={`w-[35px] h-[35px] bg-primary border-[2px]  border-solid relative rounded-full flex justify-center items-center ${
                      value === i
                        ? "text-white bg-primary border-primary"
                        : "text-black bg-white border-y-table_border"
                    } `}
                  >
                    <Typography variant={"subtitle2"} className={`!font-[700]`}>
                      {i + 1}
                    </Typography>
                    {tabsTitles.length > i + 1 && (
                      <Box
                        className={`absolute left-[50%] translate-x-[-50%] bg-table_border w-[2px] h-[300px] top-[10px] z-[-1]`}
                      ></Box>
                    )}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className={`${
                      value === i ? "text-primary" : "text-tuba_gray"
                    } !font-[700] text-start`}
                  >
                    {title}
                  </Typography>
                </Box>
              }
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Paper>
      {children}
    </Box>
  );
};

export default CustomTabs;
