import React, { useState } from 'react';

const AddTodo = (props) => {
  const [task, setTask] = useState('');
  
  const createTodo = (e) => {
    e.preventDefault();
    
    axios.post('/api/todos', {task})
      .then(() => {
        setTask('');
        fetchTodos();
      })
  };

  return (
    <div>
      <form onSubmit={createTodo} >
        <input 
          placeholder="add Todo" 
          onChange={(e) => setTask(e.target.value)} 
          value={task} 
        />
        <input type="submit" disabled={!task} />
      </form>
    </div>
  )
};

export default AddTodo;