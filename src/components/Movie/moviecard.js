import React from "react";

const MovieCard = ({
  movieId,
  title,
  posterUrl,
  overview = "",
  releaseDate = "",
}) => {
  return (
    <div className="flex max-w-[300px] h-[400px] bg-white rounded-lg overflow-hidden">
      <div
        className="w-[300px] max-w-[300px] overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 movie-item text-white movie-card"
        data-movie-id={movieId}
      >
        <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
        <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
          <div className="poster__info align-self-end w-full">
            <div className="h-32"></div>
            <div className="space-y-3 detail_info">
              <div className="flex flex-col space-y-2 inner">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>
              <div className="flex flex-row justify-between datos">
                <div className="flex flex-row gap-2 items-center">
                  {releaseDate.length > 0 && (
                    <p className="text-xs text-gray-400">
                      {new Date(releaseDate).getFullYear()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col overview">
                {overview.length < 1 && (
                  <p className="text-xs text-gray-400 mb-2">
                    Özet bilgisi bulunmamaktadır.
                  </p>
                )}
                {overview.length > 0 && overview.length > 130 ? (
                  <>
                    <div className="text-xs text-gray-400 mb-2">Özet:</div>
                    <p className="text-xs text-gray-100 mb-12">
                      {overview.slice(0, 130)}...
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-gray-100 mb-6">{overview}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute inset-0 transform w-full -translate-y-4"
          src={posterUrl}
          alt={title}
          style={{ filter: "grayscale(0)" }}
        />
      </div>
    </div>
  );
};

export default MovieCard;
