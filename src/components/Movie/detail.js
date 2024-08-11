import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MovieDetail, MovieTrailer, MovieCast } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const { data } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => MovieDetail(id),
  });

  useEffect(() => {
    if (data) {
      setDetails(data);
    }
  }, [data]);

  // movie trailer
  const { data: trailer } = useQuery({
    queryKey: ["trailer", id],
    queryFn: () => MovieTrailer(id),
  });

  // movie cast
  const { data: cast } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => MovieCast(id),
  });

  return (
    <div
      className="absolute w-full left-0 bg-cover bg-center p-4 md:p-0 posterBg"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path})`,
      }}
    >
      <div className="w-full bg-white text-black md:bg-sky-950 md:bg-opacity-70 py-6 md:text-white">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w342${details.poster_path}`}
              alt="Movie Poster"
              width={400}
              height={600}
              className="aspect-[2/3] object-cover border rounded-lg overflow-hidden"
            />
          </div>
          <div className="grid gap-2">
            <div>
              <h1 className="text-3xl font-bold">{details.original_title}</h1>
              <p className="text-muted-foreground text-sm">
                {new Date(details.release_date).getFullYear()} - Puan:{" "}
                {Math.round(details.vote_average)} / 10 - {details.runtime}{" "}
                dakika
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">
                {details.genres &&
                  details.genres.map((genre) => genre.name).join(", ")}
              </span>
            </div>
            <h2 className="font-semibold mt-1 -mb-2">Özet</h2>
            <div className="text-sm leading-relaxed text-muted-foreground mb-2">
              {details.overview}
            </div>
            <div className="flex flex-col-reverse gap-2">
              {trailer &&
                trailer.results.length > 0 &&
                trailer.results.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.key}`}
                    className="relative flex items-center w-min flex-shrink-0 p-1 pr-3 text-center text-white bg-red-500 rounded-full group"
                    data-unsp-sanitized="clean"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-xs font-semibold text-white whitespace-nowrap">
                      {video.name}
                    </div>
                  </a>
                ))}
            </div>
            <div className="w-full overflow-hidden mt-4">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  640: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {cast &&
                  cast.cast.map((actor) => (
                    <SwiperSlide key={actor.id}>
                      <Link to={`/people/${actor.id}`}>
                        <div className="flex flex-col items-center select-none">
                          <img
                            src={
                              actor.profile_path
                                ? `http://image.tmdb.org/t/p/w185${actor.profile_path}`
                                : "https://placehold.jp/ffffff/ffffff/96x96.png"
                            }
                            alt={actor.name}
                            className="w-24 h-24 object-cover rounded-full"
                          />
                          <div
                            className="text-sm text-center mt-2"
                          >
                            {actor.name}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
