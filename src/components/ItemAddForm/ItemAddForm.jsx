import React, { Component } from "react";
import "./ItemAddForm.scss";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className='itemAddForm d-flex' onSubmit={this.onSubmitHandler}>
        <input
          type='text'
          className='form-control'
          placeholder='What needs to be done ?'
          value={this.state.label}
          onChange={this.onLabelChange}
        />
        <button className='btn btn-outline-secondary'>Add Task</button>
      </form>
    );
  }
}
