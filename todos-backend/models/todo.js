const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend", { useNewUrlParser: true });
mongoose.set("debug", true);
mongoose.Promise = Promise;

// Create schema
const todoSchema = new mongoose.Schema({
  task: String
});

// Create model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
