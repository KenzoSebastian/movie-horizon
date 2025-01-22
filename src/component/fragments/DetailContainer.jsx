import React from "react";
import {
  Box,
  Container,
  Flex,
  Group,
  Image,
  Rating,
  Skeleton,
  Spoiler,
} from "@mantine/core";
import ListMovieData from "../Elements/ListMovieData";
import MovieTitle from "../Elements/MovieTitle";

const DetailContainer = ({ movie }) => {
  if (movie == null) {
    return (
      <Container pt={120} size={"xl"}>
        <Flex gap={"lg"} className="flex-col md:flex-row">
          <Skeleton height={450} width={300} radius="xl" />
          <Box className="flex-1">
            <Skeleton width={"70%"} height={60} radius={"md"} />
            <Group pt={10}>
              <Skeleton width={"19%"} height={30} radius={"md"} />
              <Skeleton width={"10%"} height={30} radius={"md"} />
              <Skeleton width={"20%"} height={30} radius={"md"} />
            </Group>
            <Skeleton height={20} width="80%" mt={40} radius="md" />
            <Skeleton height={20} width="75%" mt={10} radius="md" />
            <Skeleton height={20} width="85%" mt={10} radius="md" />
            <Skeleton height={20} width="40%" mt={10} mb={40} radius="md" />

            <Group mb={10}>
              <Skeleton height={20} width="15%" radius="md" />
              <Skeleton height={20} width="40%" radius="md" />
            </Group>
            <Group mb={10}>
              <Skeleton height={20} width="15%" radius="md" />
              <Skeleton height={20} width="40%" radius="md" />
            </Group>
            <Group mb={10}>
              <Skeleton height={20} width="15%" radius="md" />
              <Skeleton height={20} width="40%" radius="md" />
            </Group>
            <Group mb={10}>
              <Skeleton height={25} width="15%" radius="md" />
              <Skeleton height={25} width="40%" radius="md" />
            </Group>
          </Box>
        </Flex>
      </Container>
    );
  }
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
  );
};

export default DetailContainer;
