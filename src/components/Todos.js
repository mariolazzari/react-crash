import React, { Component } from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    const { todos, markComplete } = this.props;

    return (
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
