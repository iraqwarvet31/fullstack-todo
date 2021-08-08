import React from 'react';

import Todo from '../Todo/Todo';

const Todos = ({ tasks, fetchTodos }) => {
  const taskList = tasks.map((item) => (
    <Todo
      key={item._id}
      id={item._id}
      task={item.task}
      fetchTodos={fetchTodos}
    />
  ));
  
  return (
    <div>
      <ul>
        { taskList }
      </ul>
    </div>
  )
}

export default Todos;