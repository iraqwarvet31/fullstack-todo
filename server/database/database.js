const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/todoDB';

const connectMongoDB = mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connectMongoDB
    .then(() => console.log(`Connected to: ${mongoURI}`))
    .catch((err) => {
        console.log(`There was a problem connecting to ${mongoURI}`);
        console.log(err);
    })

module.exports = connectMongoDB;
