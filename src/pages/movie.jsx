import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../services/movie.service";
import Navbar from "../component/fragments/Navbar";
import { Container } from "@mantine/core";

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
  return (
    <div>
      <Navbar />
      <Container pt={120} bg={"white"} size={"xl"}>
        <h1>{movie.Title}</h1>
      </Container>
    </div>
  );
};

export default MoviePage;
