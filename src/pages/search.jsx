import { Button, Group, TextInput, Title } from "@mantine/core";
import Background from "../component/Elements/Background";
import Navbar from "../component/fragments/Navbar";
import Wrapper from "../component/fragments/Wrapper";
import useFormIcon from "../hooks/useFormIcon";
import QuerySearch from "../component/fragments/QuerySearch";

const SearchPage = () => {
  const { searchIcon } = useFormIcon();
  return (
    <>
      <Background />
      <Navbar />
      <Wrapper>
        <Title className="text-xl capitalize font-bold text-white md:text-2xl mb-5">
          Search your favorite movie
        </Title>
        <TextInput
          type="text"
          placeholder="Search movie..."
          leftSection={searchIcon}
          className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 h-12"
        />
        <QuerySearch />
      </Wrapper>
    </>
  );
};

export default SearchPage;
