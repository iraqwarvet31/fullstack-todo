import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todos from './Todos';
import AddTodo from './AddTodo';
import Loading from './Loading';

const App = () => {
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

  return (
    <div>
      <h1>React Todo App</h1>
      {isLoading && <Loading />}
      <AddTodo 
        setTask={setTask} 
        task={task} 
        fetchTodos={fetchTodos}
      />
      <Todos tasks={tasks} />
    </div>
  )
}

export default App;