import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

import TabPanel from "./TabPanel";

import ListAltIcon from "@material-ui/icons/ListAlt";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import Todos from "../Todos/Todos";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavTabs = (props) => {

  // Material-ui
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab icon={<ListAltIcon />} label="Current Todos" {...a11yProps(0)} />
          <Tab
            icon={<PlaylistAddCheckIcon />}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Todos />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default NavTabs;
