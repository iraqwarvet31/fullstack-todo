import React from 'react';

const AddTodo = ({ setTask, task, submitTodo }) => (
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
);

export default AddTodo;