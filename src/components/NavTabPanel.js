import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
          <Typography>{children}</Typography>
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
          width: "300px",
          display: "flex",
        }}
      >
        <Tab
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
          }}
          icon={<MdHomeFilled size="24" />}
          label="Acceuil"
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
          }}
          icon={<IoCompassOutline size="24" />}
          label="Explorer"
          {...a11yProps(2)}
        />
        <Tab
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
          }}
          icon={<ImYoutube2 size="30" />}
          label="Short"
          {...a11yProps(2)}
        />
        <Tab
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
          }}
          icon={<BsCollectionPlay size="24" />}
          label="Abonnements"
          {...a11yProps(3)}
        />
        <div className="divider divide-x-2 divide-black border-b-2" />
        <Tab
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
          }}
          icon={<BsPlayBtn size="24" />}
          label="Bibliothèque"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel className="bg-gray-600" value={value} index={0}></TabPanel>
      <TabPanel value={value} index={2}>
        Explorer
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Home />
        Abonnements
      </TabPanel>
      <TabPanel value={value} index={4}>
        Bibliothèque
      </TabPanel>
    </Box>
  );
}
