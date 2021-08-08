import React from 'react';

import './Todo.css';

const Todo = ({ id, task }) => {
  const deleteTodo = (e) => {
    e.preventDefault();
    console.log(id)
  }

  return (
    <li>
      <span>{task}</span>
      <span className="delete-icon" onClick={deleteTodo}> X</span>
    </li>
  )
};

export default Todo;