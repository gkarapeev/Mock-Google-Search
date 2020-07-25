import React from 'react';
import './Search.css';

function Search(props) {
  return (
    <div className="Search">
      <input type="text" className="search-input" onChange={(e) => props.search(e.target.value)}/>
    </div>
  );
}

export default Search;
