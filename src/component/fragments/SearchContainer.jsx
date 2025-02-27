import { TextInput, Title } from "@mantine/core";
import Wrapper from "./Wrapper";
import useFormIcon from "../../hooks/useFormIcon";
import { useState } from "react";
import QuerySearch from "../Elements/QuerySearch";

const SearchContainer = ({ initialQuery }) => {
  const { searchIcon } = useFormIcon();
  const [query, setQuery] = useState(initialQuery);
  return (
    <Wrapper>
      <Title className="text-xl capitalize font-bold text-white md:text-2xl mb-5">
        Search your favorite movie
      </Title>
      <TextInput
        type="text"
        placeholder="Search movie..."
        leftSection={searchIcon}
        className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 h-12"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <QuerySearch query={query} initialQuery={initialQuery} />
      </div>
    </Wrapper>
  );
};

export default SearchContainer;
