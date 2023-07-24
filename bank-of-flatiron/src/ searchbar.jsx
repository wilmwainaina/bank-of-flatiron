import React, { useState } from "react";

function SearchBar({ search, setSearch }) {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form
      style={{
        padding: "5px",
        border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
}

export default SearchBar;
