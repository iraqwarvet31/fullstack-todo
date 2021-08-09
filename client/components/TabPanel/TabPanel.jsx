import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Todos from '../Todos/Todos';
import Todo from '../Todo/Todo';

const TabPanel = (props) => {
  const [tasks, setTasks] = useState([]);
  const [list, setCompleteTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('/api/todos')
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log('Deletion failed'));
  }

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
          list={list}
          setCompleteTasks={setCompleteTasks}
        />
      )
    }
  });

  return (
    <div>
      <Todos isLoading={isLoading} taskList={taskList} />
    </div>
  )
}

export default TabPanel;