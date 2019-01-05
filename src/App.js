import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Todo one", completed: false },
      { id: 2, title: "Todo two", completed: true },
      { id: 3, title: "Todo three", completed: false }
    ]
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
    this.setState({ todos: [...todos.filter(todo => todo.id !== id)] });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Header />
        <Todos
          todos={todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
