import React, { useState } from 'react';
import './AddMovie.css'; // Import the CSS file for styling

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = () => {
    if (title && description && posterURL && rating) {
      onAddMovie({ title, description, posterURL, rating: parseFloat(rating) });
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="add-movie-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="add-movie-input"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="add-movie-input"
      />
      <input
        type="text"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        placeholder="Poster URL"
        className="add-movie-input"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
        className="add-movie-input"
      />
      <button onClick={handleAddMovie} className="add-movie-button">
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
