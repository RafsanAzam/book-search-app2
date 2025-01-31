 import React from "react";

 const SearchBar = ({ searchTerm, setSearchTerm, handleSearch}) => {
  return (
    <div className="flex justify-center mb-4 mt-4">
      <input 
        type="text"
        placeholder="Search for books by Title or Author"
        className="border p-2 rounded-lg shadow-lg w-80"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
        onClick={handleSearch}
      > Search</button>
    </div>
  );
 };

 export default SearchBar;
