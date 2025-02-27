import { Skeleton, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { getMovies } from "../../services/movie.service";
import CardSlide from "../Elements/CardSlide";

const QuerySearch = ({ query, initialQuery }) => {
  const [movies, setMovies] = useState([]);
  const [debounceQuery] = useDebounce(query, 2000); // delay in 2000ms to search

  useEffect(() => setMovies([]), [query]);
  useEffect(() => {
    setMovies([]);
    if (debounceQuery !== "") {
      getMovies(debounceQuery, (data) => {
        setMovies(data);
      });
    } else {
      getMovies(initialQuery, (data) => {
        setMovies(data);
      });
    }
  }, [debounceQuery]);

  if (movies === undefined) {
    return (
      <Text px={20} className="text-white font-medium text-base md:text-lg">
        No Result
      </Text>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton radius="md" width="100%" className="image-height" key={i} />
        ))}
      </>
    );
  }
  return movies.map((movie) => (
    <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
      <CardSlide movie={movie} />
    </Link>
  ));
};

export default QuerySearch;
