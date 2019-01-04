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
    const { markComplete } = this.props;
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => markComplete(id)} />
          {title}
        </p>
      </div>
    );
  }
}

TodoItem.propsType = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
