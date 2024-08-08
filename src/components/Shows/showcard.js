import React from "react";

const ShowCard = ({
  movieId,
  title,
  overview,
  posterUrl,
}) => {
  return (
    <div className="flex max-w-[300px] bg-white rounded-lg overflow-hidden">
      <div
        className="w-[300px] max-w-[300px] h-[300px] overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 movie-item text-white movie-card"
        data-movie-id={movieId}
      >
        <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black from-0% via-gray-900 via-10% to-transparent"></div>
        <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info h-full">
          <div className="poster__info align-self-end w-full flex items-end h-full">
            <div className="space-y-3 detail_info">
              <div className="flex flex-col space-y-2 inner pb-12">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
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

export default ShowCard;
