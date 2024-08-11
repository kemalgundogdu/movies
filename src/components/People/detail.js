import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PeopleMovies, FetchPeopleDetail } from "../../api";
import MovieCard from "../Movie/moviecard";

function PeopleDetail() {
  const [details, setDetails] = useState({});
  const [pDetail, setPDetail] = useState({});

  const { id } = useParams();

  const { data: peopleData } = useQuery({
    queryKey: ["people", id],
    queryFn: () => FetchPeopleDetail(id),
  });

  useEffect(() => {
    if (peopleData) {
      setPDetail(peopleData);
    }
  }, [peopleData]);

  const { data: movies } = useQuery({
    queryKey: ["peopleMovies", id],
    queryFn: () => PeopleMovies(id),
  });

  useEffect(() => {
    if (movies && movies.cast) {
      const sortedDetails = {
        ...movies,
        cast: movies.cast.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        ),
      };
      setDetails(sortedDetails);
    }
  }, [movies]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-5 mb-10">
        <div className="w-40">
          <img
            src={`http://image.tmdb.org/t/p/w342${pDetail.profile_path}`}
            alt={pDetail.name}
            className="w-full h-40 object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{pDetail.name}</h1>
          <p className="text-sm mt-2 text-gray-700 hidden md:block">{pDetail.biography}</p>
        </div>
      </div>
      <div className="mt-5 mb-5 flex gap-3 justify-center flex-wrap">
        {details.cast &&
          details.cast.map(
            (movie, index) =>
              movie.poster_path !== null &&
              movie.original_title !== null && (
                <Link to={`/movie/${movie.id}`} key={index}>
                  <MovieCard
                    movieId={movie.id}
                    title={movie.original_title || movie.original_name}
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

export default PeopleDetail;
