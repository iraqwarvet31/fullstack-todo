const Todo = require('../models/todo.model');

exports.readAllTodos = (req, res) => {
    Todo.find()
        .then((docs) => res.status(200).send(docs))
        .catch((err) => res.sendStatus(500));
}

exports.createTodo = (req, res) => {
    const todo = new Todo({
        task: req.body.task,
        completed: false,
    });
    
    todo.save(todo)
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err));
}

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
   
    Todo.findByIdAndDelete(id)
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err));
}