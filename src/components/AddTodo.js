import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    title: ""
  };

  // input change event handler
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // form submit event handler
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add todo"
          value={title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
