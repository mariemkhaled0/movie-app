import React from "react";

const MovieSearch = ({ searchVal, handleSearch }) => {
  return (
    <div className="col col-sm-4">
      <input
        value={searchVal}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // ref={inputRef}
        className="form-control"
        type="text"
        placeholder="search movie here"
      />
    </div>
  );
};

export default MovieSearch;
