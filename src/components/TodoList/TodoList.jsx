import React, { Fragment } from "react";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({
  todos,
  onDeleted,
  onAddItem,
  onToggleDone,
  onToggleImportant,
}) => {
  const tasks = todos.map(({ id, ...task }) => {
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem
          {...task}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <Fragment>
      <ul className='list-group todo-list'>{tasks}</ul>
      <ItemAddForm onAddItem={onAddItem} />
    </Fragment>
  );
};

export default TodoList;
