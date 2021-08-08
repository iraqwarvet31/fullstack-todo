import React from 'react';

const AddTodo = ({ setTask, task, createTodo }) => (
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
);

export default AddTodo;