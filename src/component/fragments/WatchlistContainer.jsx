import { Card, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import { useGetSingleMovie } from "../../hooks/useGetMovies";

const WatchlistContainer = ({ movie }) => {
  const data = useGetSingleMovie(movie.id_movie);
  if (!data) return null;
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
          <Image
            src={data.Poster}
            alt={data.Title}
          />
        </Card.Section>
      </Card>
    </Link>
  );
};

export default WatchlistContainer;
