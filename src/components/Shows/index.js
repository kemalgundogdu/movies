import React, { useEffect } from "react";
import ShowCard from "./showcard";
import { useShows } from "../../context/ShowsContext";

function Shows() {
  const { movies } = useShows();

  useEffect(() => {
    console.log(movies);
  }, [movies])

  return (
    <>
      <div className="mt-5 mb-5 flex gap-3 justify-center flex-wrap">
        {movies.map((movie) => (
          <ShowCard
            key={movie.id}
            movieId={movie.id}
            title={movie.name}
            overview={movie.overview}
            posterUrl={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
          />
        ))}
      </div>
    </>
  );
}

export default Shows;
