import React, { useState } from 'react';
import axios from 'axios';

import { AiTwotoneEdit as EditBtn } from 'react-icons/ai';
import { RiDeleteBin5Line as DeleteBtn } from 'react-icons/ri';

import './Todo.css';

const Todo = ({ task, item, deleteTodo, id, list, setCompleteTasks }) => {
  const [isComplete, setComplete] = useState(false);

  const toggleTasks = () => {
    if (!isComplete) {
      setCompleteTasks([...list, item]);
    } else {
      setCompleteTasks(list.filter(ele => ele._id !== id))
    }
    setComplete(val => !val)
  }

  return (
    <li 
      className={isComplete ? 'complete list-item' : 'list-item'} 
      onClick={toggleTasks}
    >
      <span>{task}</span>
      <DeleteBtn
        className="delete-icon"
        onClick={() => deleteTodo(id)}
      />
      <EditBtn />
    </li>
  )
};

export default Todo;