import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todos from './Todos';
import AddTodo from './AddTodo';
import Loading from './Loading';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>React Todo App</h1>
      <Loading />
      <Todos tasks={tasks} />
    </div>
  )
}

export default App;