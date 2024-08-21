import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Link to={`/movie/${title}`}>
      <div className="movie-card">
        <img src={posterURL} alt={`${title} poster`} />
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
