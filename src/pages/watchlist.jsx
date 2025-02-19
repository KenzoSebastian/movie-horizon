import { Skeleton, Title } from "@mantine/core";
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
        <Title px={20} className="text-xl capitalize font-bold text-white md:text-2xl mb-5">
          My Watchlist
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.length === 0 &&
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                key={index}
                radius="md"
                width="100%"
                className="h-[370px] sm:h-[570px] lg:h-[340px]"
              />
            ))}
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
