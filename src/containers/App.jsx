import React, { Component } from "react";
import _ from "lodash";
import AppHeader from "../components/AppHeader/AppHeader";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import TodoList from "../components/TodoList/TodoList";
import ItemStatusFilter from "../components/ItemStatusFilter/ItemStatusFilter";

import "./App.scss";

const createTask = (label) => ({
  label,
  important: false,
  done: false,
  id: _.uniqueId(),
});

export default class App extends Component {
  state = {
    todoData: [
      createTask("Drink Coffee"),
      createTask("Make Awesome App"),
      createTask("Have a lunch"),
    ],
    term: "",
    filter: "all",
  };

  toggleProperty = (arr, id, propName) => {
    const changedTodoDate = [...arr].map((el) => {
      if (el.id === id) {
        el[propName] = !el[propName];
      }
      return el;
    });

    this.setState(() => ({
      [arr]: changedTodoDate,
    }));
  };

  toggleDoneHandler = (id) => {
    this.toggleProperty(this.state.todoData, id, "done");
  };

  toggleImportantHandler = (id) => {
    this.toggleProperty(this.state.todoData, id, "important");
  };

  deleteItemHandler = (id) => {
    const { todoData } = this.state;
    const deleteItemIndex = todoData.findIndex((todo) => todo.id === id);
    const newStateTodo = [
      ...todoData.slice(0, deleteItemIndex),
      ...todoData.slice(deleteItemIndex + 1),
    ];
    this.setState(() => ({
      todoData: newStateTodo,
    }));
  };

  addNewItemHandler = (text) => {
    this.setState(({ todoData }) => ({
      todoData: [...todoData, createTask(text)],
    }));
  };

  onChangeTerm = (text) => {
    this.setState({ term: text });
  };

  search = (arr, text) => {
    if (!text) {
      return arr;
    }
    return arr.filter((item) => item.label.toLowerCase().indexOf(text) > -1);
  };

  filter(arr, filter) {
    if (filter === "all") {
      return arr;
    } else if (filter === "active") {
      return arr.filter((el) => !el.done);
    } else if (filter === "done") {
      return arr.filter((el) => el.done);
    }
  }

  onChangeFilter = (filter) => {
    this.setState({ filter: filter });
  };

  render() {
    const { todoData, term, filter } = this.state;

    let visibleItems = this.filter(this.search(todoData, term), filter);

    const countDone = visibleItems.filter((todo) => todo.done).length;
    const countTodo = visibleItems.length - countDone;

    return (
      <div className='todo-app'>
        <AppHeader toDo={countTodo} done={countDone} />
        <div className='top-panel d-flex'>
          <SearchPanel onChangeTerm={this.onChangeTerm} />
          <ItemStatusFilter
            onChangeFilter={this.onChangeFilter}
            filter={filter}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItemHandler}
          onAddItem={this.addNewItemHandler}
          onToggleDone={this.toggleDoneHandler}
          onToggleImportant={this.toggleImportantHandler}
        />
      </div>
    );
  }
}
