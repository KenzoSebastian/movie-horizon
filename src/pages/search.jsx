import Background from "../component/Elements/Background";
import Navbar from "../component/fragments/Navbar";
import SearchContainer from "../component/fragments/SearchContainer";
import useQueryMovie from "../hooks/useQueryMovie";

const SearchPage = () => {
  const initialQuery = useQueryMovie()[0];

  return (
    <>
      <Background />
      <Navbar />
      <SearchContainer initialQuery={initialQuery} />
    </>
  );
};

export default SearchPage;
