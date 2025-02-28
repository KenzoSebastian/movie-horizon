import Background from "../component/Elements/Background";
import Navbar from "../component/fragments/Navbar";
import SearchContainer from "../component/fragments/SearchContainer";
import useQueryMovie from "../hooks/useQueryMovie";

const SearchPage = () => {
  const query = useQueryMovie();
  return (
    <>
      <Background />
      <Navbar />
      <SearchContainer initialQuery={query} />
    </>
  );
};

export default SearchPage;
