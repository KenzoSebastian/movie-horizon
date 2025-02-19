import { Skeleton, Text, Title } from "@mantine/core";
import Background from "../component/Elements/Background";
import Navbar from "../component/fragments/Navbar";
import WatchlistContainer from "../component/fragments/WatchlistContainer";
import Wrapper from "../component/fragments/Wrapper";
import useWatchList from "../hooks/useWatchList";

const WatchlistPage = () => {
  const movies = useWatchList();
  return (
    <>
      <Background />
      <Navbar />
      <Wrapper>
        <Title
          px={20}
          className="text-xl capitalize font-bold text-white md:text-2xl mb-5"
        >
          My Watchlist
        </Title>
        {movies.length === 0 && (
          <Text px={20} className="text-white font-medium text-base md:text-lg">
            You don't have any movie in your watchlist
          </Text>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies !== null &&
            movies.map((movie) => {
              return (
                <div key={movie.id_movie}>
                  <WatchlistContainer movie={movie} />
                </div>
              );
            })}
        </div>
      </Wrapper>
    </>
  );
};

export default WatchlistPage;
