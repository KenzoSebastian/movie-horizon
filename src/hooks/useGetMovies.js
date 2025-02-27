import { useEffect, useState } from "react";
import { getMovies, getSingleMovie } from "../services/movie.service";

export const useGetMovies = (query) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(query, (data) => {
      setMovies(data);
    });
  }, []);
  return movies;
};

export const useGetSingleMovie = (id) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    id !== undefined &&
      getSingleMovie(id, (data) => {
        setMovie(data);
      });
  }, [id]);
  return movie;
};