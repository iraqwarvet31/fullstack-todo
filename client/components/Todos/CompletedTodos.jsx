import React from 'react';

import Todo from '../Todo/Todo';

const CompletedTodos = ({ completedTasks }) => {
  const completedTaskList = completedTasks.map(item => (
    <Todo 
      key={item._id}
      id={item._id}
      task={item.task}
    />
  ))
  return (
    <ul>
      {completedTaskList}
    </ul>
  )
};

export default CompletedTodos;