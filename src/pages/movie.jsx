import { useParams } from "react-router-dom";
import Background from "../component/Elements/Background";
import DetailContainer from "../component/fragments/DetailContainer";
import Navbar from "../component/fragments/Navbar";
import { useGetSingleMovie } from "../hooks/useGetMovies";

const MoviePage = () => {
  const { id } = useParams();
  const movie = useGetSingleMovie(id);

  return (
    <>
      <Background />
      <Navbar />
      <DetailContainer movie={movie}/>
    </>
  );
};

export default MoviePage;
