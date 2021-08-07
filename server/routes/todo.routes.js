module.exports = app => {
    const router = require('express').Router();

    const todos = require('../controllers/todo.controller');

    // Retrieve all todos
    router.get('/', todos.readAllTodos);

    app.use('/api/todos', router);
}