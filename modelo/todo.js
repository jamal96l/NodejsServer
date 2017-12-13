var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'Name no puede ser vacio'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_Date: {
        type: Date,
        default: Date.now()
    }
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;