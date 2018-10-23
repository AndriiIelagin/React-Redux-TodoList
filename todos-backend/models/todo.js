const mongoose = require("mongoose");
const url = process.env.DATABASEURL;
mongoose.connect(url);
// mongoose.connect("mongodb://localhost/todos-backend", { useNewUrlParser: true });
// mongodb://Andrii:react14@ds239873.mlab.com:39873/react-redux-todolist
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
