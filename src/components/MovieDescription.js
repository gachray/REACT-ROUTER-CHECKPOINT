import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDescription.css';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="trailer">
      <iframe 
  width="560" 
  height="315" 
  src={movie.trailerLink} 
  title={movie.title} 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
></iframe>
      </div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default MovieDescription;
