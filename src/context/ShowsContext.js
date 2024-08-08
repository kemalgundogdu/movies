import { createContext, useContext, useState, useEffect } from "react";
import { ShowsList } from "../api";

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ShowsList(1);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchData();
  }, []);

  const values = { movies, setMovies };

  return (
    <ShowsContext.Provider value={values}>
      {children}
    </ShowsContext.Provider>
  );
};


export const useShows = () => useContext(ShowsContext);