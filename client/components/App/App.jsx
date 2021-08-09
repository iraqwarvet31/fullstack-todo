import React from "react";

import Todos from "../Todos/Todos";
import AddTodo from '../AddTodo/AddTodo';

const App = () => {
  return (
    <div>
      <h1>React Todo App</h1>
      <AddTodo  />
      <Todos />
    </div>
  )
};

export default App;
