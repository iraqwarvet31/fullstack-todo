import React from 'react';

const Todos = ({ tasks }) => {
  const taskList = tasks.map((task) => (
    <li key={task._id}>
      <span>{task.task}</span>
    </li>
  ))
  return (
    <div>
      <ul>
        { taskList }
      </ul>
    </div>
  )
}

export default Todos;