const Todo = require('../models/todo.model');

exports.readAllTodos = (req, res) => {
    Todo.find()
        .then((docs) => res.status(200).send(docs))
        .catch((err) => res.sendStatus(500));
}