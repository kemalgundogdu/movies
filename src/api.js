import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
};

export const CategoryList = async () => {
  const data = await axios
    .get("https://api.themoviedb.org/3/genre/movie/list?language=tr", options)
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching genres:", err));

  return data;
};

export const MovieList = async (page) => {
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr-Tr&page=${page}&sort_by=popularity.desc`,
      options
    )
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching movies:", err));

  return data;
};

export const ShowsList = async (page) => {
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=tr-TR&page=${page}&sort_by=popularity.desc`,
      options
    )
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching shows:", err));

  return data;
};

export const MovieGenre = async (id) => {
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr-TR&page=1&sort_by=popularity.desc&with_genres=${id}`,
      options
    )
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching genres:", err));

  return data;
};


export const MovieDetail = async (id) => {
  const data = await axios
    .get(`https://api.themoviedb.org/3/movie/${id}?language=tr-TR`, options)
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching movie details:", err));

  return data;
}

export const MovieTrailer = async (id) => {
  const data = await axios
    .get(`https://api.themoviedb.org/3/movie/${id}/videos?language=tr-TR`, options)
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching movie trailer:", err));

  return data;
}

export const MovieCast = async (id) => {
  const data = await axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?language=tr-TR`, options)
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching movie cast:", err));

  return data;
}