import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MdHomeFilled } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { ImYoutube2 } from "react-icons/im";
import { BsCollectionPlay, BsPlayBtn } from "react-icons/bs";
import Home from "../pages/Home";
import Explorer from "../pages/Explorer";
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div className="w-[100vw]">{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function NavTabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    fontSize: 8,
    color: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    fontWeight: 100,
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        bgcolor: "##F9F9F9",
        height: "100vh",
        display: "flex",
      }}
    >
      <Tabs
        id="tabsNav"
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          ".MuiTabs-indicator": {
            display: "none",
          },
          width: "90px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tab
          sx={tabStyle}
          icon={<MdHomeFilled color="black" size="22" />}
          label={<span className="pl-1 text-black">Acceuil</span>}
          {...a11yProps(0)}
        />

        <Tab
          sx={tabStyle}
          icon={<IoCompassOutline size="22" />}
          label={<span className="pl-1">Explorer</span>}
          {...a11yProps(0)}
        />
        <Tab
          sx={tabStyle}
          icon={<ImYoutube2 size="26" />}
          label="Short"
          {...a11yProps(1)}
        />
        <Tab
          sx={tabStyle}
          icon={<BsCollectionPlay size="20" />}
          label="Abonnements"
          {...a11yProps(2)}
        />
        <div className="divider divide-x-2 divide-black border-b-2" />
        <Tab
          sx={tabStyle}
          icon={<BsPlayBtn size="20" />}
          label="Bibliothèque"
          {...a11yProps(3)}
        />
      </Tabs>
      <div className="flex h-screen snap-x scroll-pl-6 overflow-hidden">
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Explorer />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Abonnements
        </TabPanel>
        <TabPanel value={value} index={3}>
          Bibliothèque
        </TabPanel>
      </div>
    </Box>
  );
}
