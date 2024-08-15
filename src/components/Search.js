import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Trigger the search function with the updated query
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); // Trigger search on form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchComponent;
