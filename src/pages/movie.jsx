import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../services/movie.service";
import Navbar from "../component/fragments/Navbar";
import {
  Box,
  Container,
  Flex,
  Group,
  Image,
  Rating,
  Spoiler,
  Title,
} from "@mantine/core";
import Background from "../component/Elements/Background";
import MovieTitle from "../component/Elements/MovieTitle";
import ListMovieData from "../component/Elements/ListMovieData";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getSingleMovie(id, (data) => {
      setMovie(data);
    });
  }, [id]);
  useEffect(() => {
    console.log(movie);
  }, [movie]);

  const renderDataMovie = [
    {
      subject: "Director",
      value: movie.Director,
    },
    {
      subject: "Writer",
      value: movie.Writer,
    },
    {
      subject: "Released",
      value: movie.Released,
    },
    {
      subject: "Runtime",
      value: movie.Runtime,
    },
  ];
  return (
    <>
      <Background />
      <Navbar />
      <Container pt={120} size={"xl"}>
        <Flex gap={"lg"} className="flex-col md:flex-row">
          <Image src={movie.Poster} alt={movie.Title} />
          <Box>
            <MovieTitle>{movie.Title}</MovieTitle>
            <Group pt={10}>
              <Rating
                fractions={5}
                value={(movie.imdbRating / 10) * 5}
                readOnly
              />
              <p>|</p>
              <p>{movie.Year}</p>
              <p>|</p>
              <p>{movie.Genre}</p>
            </Group>
            <Spoiler
              maxHeight={100}
              showLabel="Show more"
              hideLabel="Show less"
              className="mt-5 font-semibold mb-9"
            >
              {movie.Plot}
            </Spoiler>
            {renderDataMovie.map((data) => (
              <ListMovieData
                key={data.subject}
                subject={data.subject}
                value={data.value}
              />
            ))}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default MoviePage;
