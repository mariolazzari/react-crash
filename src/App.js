import React, { Component } from "react";
import "./App.css";

import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Todo one", completed: false },
      { id: 2, title: "Todo two", completed: true },
      { id: 3, title: "Todo three", completed: false }
    ]
  };

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

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Todos todos={todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
