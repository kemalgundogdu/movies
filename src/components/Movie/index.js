import React from "react";
import MovieCard from "./moviecard";
import { useMovie } from "../../context/MovieContext";
import { Link } from "react-router-dom";

function Movie() {
  const { movies } = useMovie();

  return (
    <>
      <div className="mt-5 mb-5 flex gap-3 justify-center flex-wrap">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard
                movieId={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                runtime={movie.runtime}
                overview={movie.overview}
                posterUrl={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Movie;
