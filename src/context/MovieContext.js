import { createContext, useContext, useState, useEffect } from "react";
import { MovieList } from "../api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MovieList(1);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchData();
  }, []);

  const values = { movies, setMovies };

  return (
    <MovieContext.Provider value={values}>
      {children}
    </MovieContext.Provider>
  );
};


export const useMovie = () => useContext(MovieContext);