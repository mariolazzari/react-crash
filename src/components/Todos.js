import React, { Component } from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    const { todos, markComplete, deleteTodo } = this.props;

    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
