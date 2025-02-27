import { Skeleton } from "@mantine/core";
import { Link } from "react-router-dom";
import { useGetSingleMovie } from "../../hooks/useGetMovies";
import CardSlide from "../Elements/CardSlide";

const WatchlistContainer = ({ movie }) => {
  const data = useGetSingleMovie(movie.id_movie);
  if (!data)
    return (
      <Skeleton
        radius="md"
        width="100%"
        className="h-[370px] sm:h-[570px] lg:h-[340px]"
      />
    );
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <CardSlide movie={data} />
    </Link>
  );
};

export default WatchlistContainer;
