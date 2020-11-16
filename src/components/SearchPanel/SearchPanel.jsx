import React from "react";
import "./SearchPanel.scss";

const SearchPanel = ({ onChangeTerm }) => {
  const onChangeFilter = (e) => {
    onChangeTerm(e.target.value.toLowerCase());
  };

  return (
    <input
      type='text'
      placeholder='type to search'
      className='form-control search-input'
      onChange={onChangeFilter}
    />
  );
};

export default SearchPanel;
