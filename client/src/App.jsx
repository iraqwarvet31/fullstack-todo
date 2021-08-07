import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todos from './Todos';

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
      <Todos />
    </div>
  )
}

export default App;