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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: "100%" }}>
          <p>{children}</p>
        </Box>
      )}
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
    fontSize: 10,
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    fontWeight: 100,
  };

  return (
    <Box
      sx={{
        marginTop: 5,
        flexGrow: 1,
        bgcolor: "background.paper",
        height: 500,
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          ".MuiTabs-indicator": {
            display: "none",
          },
          width: "300px",
          display: "flex",
        }}
      >
        <Tab
          sx={tabStyle}
          icon={<MdHomeFilled color="black" size="24" />}
          label={<span className="text-black">Acceuil</span>}
          {...a11yProps(0)}
        />
        <Tab
          sx={tabStyle}
          icon={<IoCompassOutline size="24" />}
          label="Explorer"
          {...a11yProps(1)}
        />
        <Tab
          sx={tabStyle}
          icon={<ImYoutube2 size="30" />}
          label="Short"
          {...a11yProps(2)}
        />
        <Tab
          sx={tabStyle}
          icon={<BsCollectionPlay size="24" />}
          label="Abonnements"
          {...a11yProps(3)}
        />
        <div className="divider divide-x-2 divide-black border-b-2" />
        <Tab
          sx={tabStyle}
          icon={<BsPlayBtn size="24" />}
          label="Bibliothèque"
          {...a11yProps(4)}
        />
      </Tabs>
      <div className="overflow-auto scroll-pl-6 snap-x h-screen">
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Explorer
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
