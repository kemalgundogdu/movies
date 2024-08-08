import React, { useEffect, useState } from "react";
import MovieCard from "./moviecard";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MovieGenre } from "../../api";

function WithGenres() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  const { data } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => MovieGenre(id),
  });

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);


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

export default WithGenres;
