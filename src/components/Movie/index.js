import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./moviecard";
import { useMovie } from "../../context/MovieContext";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { MovieList } from "../../api";

function Movie() {
  const { movies, setMovies } = useMovie();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MovieList(page);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchData();
  }, [page, setMovies]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

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
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </>
  );
}

export default Movie;
