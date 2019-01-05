import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  // toggle todo completed
  markComplete = id => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // delete seòected todo
  deleteTodo = id => {
    const { todos } = this.state;
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(this.setState({ todos: [...todos.filter(todo => todo.id !== id)] }))
      .catch(error => console.log(error));
  };

  // add new todo
  addTodo = title => {
    const { todos } = this.state;

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...todos, res.data] }))
      .catch(error => console.log(error));
  };

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }))
      .catch(error => console.log(error));
  };

  render() {
    const { todos } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
