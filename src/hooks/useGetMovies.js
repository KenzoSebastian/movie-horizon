import { useEffect, useState } from "react";
import { getMovies } from "../services/movie.service";

const useGetMovies = (query) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(query, (data) => {
      setMovies(data);
    });
  }, [query]);
  return movies;
};

export default useGetMovies;
