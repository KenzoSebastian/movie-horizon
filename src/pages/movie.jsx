import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/fragments/Navbar";
import Background from "../component/Elements/Background";
import DetailContainer from "../component/fragments/DetailContainer";
import { useGetSingleMovie } from "../hooks/useGetMovies";

const MoviePage = () => {
  const { id } = useParams();
  const movie = useGetSingleMovie(id);

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
