import { Card, Image, Skeleton } from "@mantine/core";
import { Link } from "react-router-dom";
import { useGetSingleMovie } from "../../hooks/useGetMovies";

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
      <Card
        shadow="sm"
        m={15}
        radius="md"
        withBorder
        className="hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Card.Section>
          <Image src={data.Poster} alt={data.Title} />
        </Card.Section>
      </Card>
    </Link>
  );
};

export default WatchlistContainer;
