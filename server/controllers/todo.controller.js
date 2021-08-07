const Todo = require('../models/todo.model');

exports.readAllTodos = (req, res) => {
    Todo.find()
        .then((docs) => res.status(200).send(docs))
        .catch((err) => res.sendStatus(500));
}

exports.createTodo = (req, res) => {
    const todo = new Todo({
        task: req.body.task,
        completed: req.body.completed
    });
    console.log('todo')
    // todo.save(todo)
    //     .then(() => res.status(200).send(data))
    //     .catch((err) => res.status(500).send(err))
}