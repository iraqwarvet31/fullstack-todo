import React from 'react';
import axios from 'axios';

const AddTodo = ({ setTask, task, fetchTodos }) => {

  const submitTodo = (e) => {
    e.preventDefault();
    
    axios.post('/api/todos', {task})
      .then(() => {
        setTask('');
        fetchTodos();
      })
  };

  return (
    <div>
      <form onSubmit={submitTodo} >
        <input 
          placeholder="add Todo" 
          onChange={(e) => setTask(e.target.value)} 
          value={task} 
        />
        <input type="submit" disabled={!task} />
      </form>
    </div>
  )
}

export default AddTodo;