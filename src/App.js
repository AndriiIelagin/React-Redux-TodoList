import React, { Component } from 'react';
import TodosList from './TodosList';
import './App.css';
import { Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List: </h1>
        <p className="btn btn-secondary rounded-circle">
          <Link to="/todos">See all todos</Link>
        </p>
        <p className="btn btn-info rounded-circle">
          <Link to="/todos/new">Add a todo</Link>
        </p>
        <Route path="/todos" component={TodosList} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
