import React, { Component } from "react";
import cn from "classnames";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { onChangeFilter, filter } = this.props;

    const btns = this.buttons.map(({ name, label }) => {
      const classes = cn("btn", {
        "btn-info": name === filter,
        "btn-outline-secondary": name !== filter,
      });

      return (
        <button
          type='button'
          className={classes}
          key={name}
          onClick={() => onChangeFilter(name)}>
          {label}
        </button>
      );
    });
    return <div className='btn-group'>{btns}</div>;
  }
}
