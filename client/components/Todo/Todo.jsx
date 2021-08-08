import React from 'react';
import axios from 'axios';

import './Todo.css';

const Todo = ({ task, deleteTodo }) => (
  <li className="list-item">
    <span>{task}</span>
    <span className="delete-icon" onClick={deleteTodo}> X</span>
  </li>
);

export default Todo;