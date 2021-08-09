import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import Loading from '../Loading/Loading';

const Todos = () => {
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
      {isLoading && <Loading />}
      <ul>
        { taskList }
      </ul>
    </div>
  )
}

export default Todos;