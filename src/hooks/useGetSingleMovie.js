import { useEffect, useState } from "react";
import { getSingleMovie } from "../services/movie.service";

const useGetSingleMovie = (id) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    id !== undefined &&
      getSingleMovie(id, (data) => {
        setMovie(data);
      });
  }, [id]);
  return movie;
};

export default useGetSingleMovie;
