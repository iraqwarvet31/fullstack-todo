import React from 'react';
import axios from 'axios';

import './Todo.css';

const Todo = ({ task, deleteTodo, id }) => (
  <li className="list-item">
    <span>{task}</span>
    <span className="delete-icon" onClick={() => deleteTodo(id)}> X</span>
  </li>
);

export default Todo;