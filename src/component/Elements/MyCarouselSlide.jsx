import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Text,
  Title
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useGetSingleMovie } from "../../hooks/useGetMovies";
import MovieTitle from "./MovieTitle";
import SkeletonCarousel from "./SkeletonCarousel";

const MyCarouselSlide = ({ id }) => {
  const movie = useGetSingleMovie(id);
  if (movie == null) {
    return <SkeletonCarousel />;
  }
  return (
    <BackgroundImage
      src={movie.Poster}
      className="relative rounded-[35px] overflow-hidden"
    >
      <Box
        h={"100%"}
        c={"white"}
        px={40}
        pt={120}
        className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent"
      >
        <div className="absolute bottom-20 left-75">
          <MovieTitle>{movie.Title}</MovieTitle>
          <Flex gap={"md"} align={"center"}>
            <Title
              tt={"capitalize"}
              className="text-xl md:text-2xl lg:text-3xl"
            >
              {movie.Year}
            </Title>
            <Badge
              bg={"yellow.8"}
              py={"sm"}
              px={"md"}
              className="text-[10px] md:text-xs lg:text-sm"
            >
              {movie.Genre}
            </Badge>
          </Flex>

          <Text w="80%" lineClamp={3} my={"md"}>
            {movie.Plot}
          </Text>
          <Link to={`/movie/${movie.imdbID}`}>
            <Button
              size="md"
              bg={"blue.2"}
              c={"black"}
              px={"xl"}
              className="hover:scale-105 transition-all"
            >
              Watch
            </Button>
          </Link>
        </div>
      </Box>
      <Image src={movie.Poster} alt="background" h={650} fit="contain" />
    </BackgroundImage>
  );
};

export default MyCarouselSlide;
