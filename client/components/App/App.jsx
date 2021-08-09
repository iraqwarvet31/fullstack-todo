import React from "react";

import AddTodo from '../AddTodo/AddTodo';
import TabPanel from "../TabPanel/TabPanel";

const App = () => {
  return (
    <div>
      <h1>React Todo App</h1>
      <AddTodo  />
      <TabPanel />
    </div>
  )
};

export default App;
