import React, { useState } from 'react';

import { AiTwotoneEdit as EditBtn } from 'react-icons/ai';
import { RiDeleteBin5Line as DeleteBtn } from 'react-icons/ri';

import './Todo.css';

const Todo = ({ task, item, deleteTodo, id, completedTasks, setCompleteTasks }) => {
  const [isComplete, setComplete] = useState(false);

  const toggleTasks = () => {
    if (!isComplete) {
      setCompleteTasks([...completedTasks, item]);
    } else {
      setCompleteTasks(completedTasks.filter(ele => ele._id !== id))
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