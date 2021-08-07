module.exports = app => {
    const router = require('express').Router();

    const todos = require('../controllers/todo.controller');

    // Retrieve all todos
    router.get('/', todos.readAllTodos);

    // add a todo
    router.post('/', todos.createTodo);

    app.use('/api/todos', router);
}