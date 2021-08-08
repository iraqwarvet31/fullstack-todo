import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import Loading from '../Loading/Loading';

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
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

  const createTodo = (e) => {
    e.preventDefault();
    
    axios.post('/api/todos', {task})
      .then(() => {
        setTask('');
        fetchTodos();
      })
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log('Deletion failed'));
  }

  const taskList = tasks.map((item) => (
    <Todo
      key={item._id}
      id={item._id}
      task={item.task}
      deleteTodo={deleteTodo}
    />
  ));

  return (
    <div>
      <h1>React Todo App</h1>
      <AddTodo 
        setTask={setTask}
        task={task}
        createTodo={createTodo}
      />
      {isLoading && <Loading />}
      <ul>
        { taskList }
      </ul>
    </div>
  )
}

export default Todos;