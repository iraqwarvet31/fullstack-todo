import React from 'react';
import axios from 'axios';

import './Todo.css';

const Todo = ({ id, task, fetchTodos }) => {
  const deleteTodo = (e) => {
    e.preventDefault();
    
    axios.delete(`/api/todos/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log('Deletion failed'));
  }

  return (
    <li>
      <span>{task}</span>
      <span className="delete-icon" onClick={deleteTodo}> X</span>
    </li>
  )
};

export default Todo;