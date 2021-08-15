import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

import Loading from "../Loading/Loading";
import Todo from "../Todo/Todo";

const Todos = ({
  tasks,
  isLoading,
  deleteTodo,
  completedTasks,
  setCompleteTasks,
}) => {
  // Create each todo list item and render only if NOT completed
  const taskList = tasks.map((item) => {
    if (!item.completed) {
      return (
        <Todo
          key={item._id}
          id={item._id}
          task={item.task}
          item={item}
          deleteTodo={deleteTodo}
          completedTasks={completedTasks}
          setCompleteTasks={setCompleteTasks}
        />
      );
    }
  });

  const moveCompleted = (e) => {
    
  };

  return (
    <div>
      {isLoading && <Loading />}
      <ul>{taskList}</ul>
      <Button variant="outlined" color="primary" onClick={moveCompleted}>
        Primary
      </Button>
    </div>
  );
};

export default Todos;
