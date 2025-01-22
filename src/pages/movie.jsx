import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../services/movie.service";
import Navbar from "../component/fragments/Navbar";
import Background from "../component/Elements/Background";
import DetailContainer from "../component/fragments/DetailContainer";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getSingleMovie(id, (data) => {
      setMovie(data);
    });
  }, [id]);
  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <>
      <Background />
      <Navbar />
      <DetailContainer movie={movie} />
    </>
  );
};

export default MoviePage;
