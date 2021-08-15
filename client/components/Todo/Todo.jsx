import React, { useState } from "react";

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import "./Todo.css";

const Todo = ({
  task,
  item,
  deleteTodo,
  id,
  completedTasks,
  setCompleteTasks,
}) => {
  const [isComplete, setComplete] = useState(false);

  const toggleTasks = () => {
    if (!isComplete) {
      setCompleteTasks([
        ...completedTasks,
        { _id: id, task: item.task, completed: !isComplete },
      ]);
    } else {
      setCompleteTasks(completedTasks.filter((ele) => ele._id !== id));
    }
    setComplete((val) => !val);
  };
  console.log(completedTasks);
  return (
    <li
      className={isComplete ? "complete list-item" : "list-item"}
      onClick={toggleTasks}
    >
      <span>{task}</span>
      <DeleteOutlineIcon className="delete-icon" onClick={() => deleteTodo(id)} />
      <EditIcon />
    </li>
  );
};

export default Todo;
