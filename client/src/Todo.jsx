import React from 'react';

const Todo = ({ id, task }) => {
  return (
    <li>
      <span>{task}</span>
      <span> X</span>
    </li>
  )
};

export default Todo;