import React from 'react';

import './Todo.css';

const Todo = ({ id, task }) => {
  return (
    <li>
      <span>{task}</span>
      <span className="delete-icon"> X</span>
    </li>
  )
};

export default Todo;