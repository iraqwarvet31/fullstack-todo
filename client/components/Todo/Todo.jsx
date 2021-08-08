import React from 'react';
import axios from 'axios';

import { AiTwotoneEdit as EditBtn } from 'react-icons/ai';
import { RiDeleteBin5Line as DeleteBtn } from 'react-icons/ri';

import './Todo.css';

const Todo = ({ task, deleteTodo, id }) => (
  <li className="list-item">
    <span>{task}</span>
    <DeleteBtn
      className="delete-icon"
      onClick={() => deleteTodo(id)}
    />
    <EditBtn />
  </li>
);

export default Todo;