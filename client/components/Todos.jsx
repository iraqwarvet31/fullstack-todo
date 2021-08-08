import React from 'react';

import Todo from './Todo';

const Todos = ({ tasks }) => {
  const taskList = tasks.map((item) => (
    <Todo
      key={item._id}
      id={item._id}
      task={item.task}
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