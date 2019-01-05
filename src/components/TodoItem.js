import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    const { completed } = this.props.todo;

    return {
      background: "f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : ""
    };
  };

  render() {
    const { markComplete, deleteTodo } = this.props;
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => markComplete(id)} />
          {title}
          <button style={buttonStyle} onClick={() => deleteTodo(id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const buttonStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propsType = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
