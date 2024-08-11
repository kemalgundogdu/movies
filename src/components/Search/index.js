import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../../api";
import MovieCard from "../Movie/moviecard";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const queryParams = useQueryParams();
  const searchTerm = queryParams.get("query");
  const [movies, setMovies] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => searchMovies(searchTerm),
    enabled: !!searchTerm,
  });

  useEffect(() => {
    if (data) {
      const sortedMovies = data.results.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      setMovies(sortedMovies);
    }
  }, [data]);

  return (
    <div className="container mx-auto mt-5 mb-5">
      {error && <p>Bir hata oluştu: {error.message}</p>}
      {movies.length === 0 && !isLoading && <p>Arama sonucu bulunamadı.</p>}

      <div className="flex gap-3 flex-wrap">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard
                  movieId={movie.id}
                  title={movie.title || movie.name}
                  releaseDate={movie.release_date}
                  runtime={movie.runtime}
                  overview={movie.overview}
                  posterUrl={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Search;
