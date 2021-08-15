import React from "react";

import AddTodo from '../AddTodo/AddTodo';
import NavTabs from '../Tabs/NavTabs';

const App = () => {
  return (
    <div>
      <h1>React Todo App</h1>
      <AddTodo  />
      <NavTabs />
    </div>
  )
};

export default App;
