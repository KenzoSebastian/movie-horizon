import { TextInput, Title } from "@mantine/core";
import useSearch from "../../hooks/useSearch";
import QuerySearch from "../Elements/QuerySearch";
import Wrapper from "./Wrapper";

const SearchContainer = ({ initialQuery }) => {
  const {
    searchIcon,
    query,
    sugest,
    focus,
    setFocus,
    inputRef,
    handleOnClickSugest,
    handleOnChangeInput,
    handleKeyDown,
  } = useSearch(initialQuery);

  return (
    <Wrapper>
      <Title className="text-xl capitalize font-bold text-white md:text-2xl mb-5">
        Search your favorite movie
      </Title>
      <div className="relative w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
        <TextInput
          type="text"
          placeholder="Search movie..."
          leftSection={searchIcon}
          onChange={handleOnChangeInput}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 300)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <ul
          className={`${
            focus ? "block" : "hidden"
          } z-10 absolute top-[100%] w-full backdrop-blur-[5px] bg-navbar/75 rounded-md left-0`}
        >
          {sugest.map((query) => (
            <li
              key={query}
              className="p-2 transition-all duration-200 hover:bg-primary/40 cursor-pointer flex items-center gap-2"
              onClick={handleOnClickSugest}
            >
              {searchIcon}
              {query}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <QuerySearch query={query} initialQuery={initialQuery} />
      </div>
    </Wrapper>
  );
};

export default SearchContainer;
