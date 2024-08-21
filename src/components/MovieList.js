import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; // Import the CSS file

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
