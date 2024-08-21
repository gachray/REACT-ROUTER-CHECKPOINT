import React, { useState } from 'react';
import './Filter.css'; // Import the CSS file


const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search by title"
        className="filter-input"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Search by rating"
        className="filter-input"
      />
      <button onClick={handleFilter} className="filter-button">
        Filter
      </button>
    </div>
  );
};

export default Filter;