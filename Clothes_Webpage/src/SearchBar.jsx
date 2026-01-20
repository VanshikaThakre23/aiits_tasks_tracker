import React from "react";
const SearchBar = ({ searchVal, setSearchVal }) => {
  return (
    <nav className="navbar navbar-light bg-light px-5">
      {/* <span className="navbar-brand fw-bold fs-2">CLOTHES</span> */}
 
      <input
        type="text"
        className="p-2 rounded"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search for clothes..."
      />
    </nav>
  );
};

export default SearchBar;
