import React, { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import Todo from "../Todo/Todo";

const Todos = ({ tasks, isLoading, deleteTodo, completedTasks, setCompleteTasks }) => {
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

  return (
    <div>
      {isLoading && <Loading />}
      <ul>{taskList}</ul>
    </div>
  );
};

export default Todos;
