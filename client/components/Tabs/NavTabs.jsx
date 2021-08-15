import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import TabPanel from './TabPanel';

import ListAltIcon from '@material-ui/icons/ListAlt';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


import Todos from '../Todos/Todos';
import Todo from '../Todo/Todo';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const NavTabs = (props) => {
  const [tasks, setTasks] = useState([]);
  const [list, setCompleteTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Material-ui
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  // fetch todos from db
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('/api/todos')
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  // Delete a todo from the db
  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log('Deletion failed'));
  }
  // Create each todo list item and render only if NOT completed
  const taskList = tasks.map((item) => {
    if (!item.completed) {
      return (
        <Todo
          key={item._id}
          id={item._id}
          task={item.task}
          item={item}
          deleteTodo={deleteTodo}
          list={list}
          setCompleteTasks={setCompleteTasks}
          />
          )
        }
      });
      
    console.log(taskList)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab icon={<ListAltIcon />} label="Current Todos" {...a11yProps(0)} />
          <Tab icon={<PlaylistAddCheckIcon />} label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ul>
          { taskList }
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}

export default NavTabs;