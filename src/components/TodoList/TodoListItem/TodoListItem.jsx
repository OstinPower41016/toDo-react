import React, { Component } from "react";
import cn from "classnames";
import "./TodoListItem.scss";

export default class TodoListItem extends Component {
  render() {
    const {
      onDeleted,
      done,
      important,
      onToggleDone,
      onToggleImportant,
    } = this.props;
    const classesItem = cn("todo-list-item", { important, done });

    return (
      <span className='todo-list-item'>
        <span className={classesItem} onClick={onToggleDone}>
          {this.props.label}
        </span>

        <button
          className='btn btn-outline-success btn-sm float-right'
          onClick={onToggleImportant}>
          <i className='fa fa-exclamation'></i>
        </button>
        <button
          className='btn btn-outline-danger btn-sm float-right'
          onClick={onDeleted}>
          <i className='fa fa-trash-o'></i>
        </button>
      </span>
    );
  }
}
