import {
  BackgroundImage,
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useGetSingleMovie } from "../../hooks/useGetMovies";
import MovieTitle from "./MovieTitle";
import { Link } from "react-router-dom";

const MyCarouselSlide = ({ id }) => {
  const movie = useGetSingleMovie(id);
  if (movie == null) {
    return (
      <Box h={650} className="rounded-[35px]" bg={"gray.9"}>
        <Skeleton height={300} radius="xl" />
        <Skeleton height={50} width="50%" mt={20} radius="lg" ml={20} />
        <Flex gap={"md"} align={"center"} mt={10} ml={20}>
          <Skeleton height={35} width="20%" radius="lg" />
          <Skeleton height={25} width="40%" radius="md" />
        </Flex>
        <Skeleton height={20} width="80%" mt={20} radius="md" ml={20} />
        <Skeleton height={20} width="80%" mt={10} radius="md" ml={20} />
        <Skeleton height={20} width="80%" mt={10} radius="md" ml={20} />
        <Skeleton height={50} width="20%" mt={20} radius="xl" ml={20} />
      </Box>
    );
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
