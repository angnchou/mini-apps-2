import React from 'react';

const Search = props => {
  return (
    <div>
      Search
      <input
        type="text"
        id="search"
        value={props.input}
        onChange={props.handleInput}
      />
      <button type="submit" onClick={props.handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
