import {
  Box,
  Button,
  Container,
  Dialog,
  Flex,
  Group,
  Image,
  Rating,
  Spoiler,
} from "@mantine/core";
import useDetailMovie from "../../hooks/useDetailMovie";
import ListMovieData from "../Elements/ListMovieData";
import MovieTitle from "../Elements/MovieTitle";
import MyModal from "../Elements/MyModal";
import SkeletonDetail from "../Elements/SkeletonDetail";

const DetailContainer = ({ movie }) => {
  const { session, opened, setOpened, added, notif, setNotif, handleWatchlist } =
    useDetailMovie(movie);

  if (movie === null) return <SkeletonDetail />;

  const renderDataMovie = [
    {
      subject: "Director",
      value: movie.Director,
    },
    {
      subject: "Writer",
      value: movie.Writer,
    },
    {
      subject: "Released",
      value: movie.Released,
    },
    {
      subject: "Runtime",
      value: movie.Runtime,
    },
  ];

  return (
    <Container pt={120} size={"xl"}>
      <Flex gap={"lg"} className="flex-col md:flex-row">
        <Image src={movie.Poster} alt={movie.Title} />
        <Box className="flex flex-col justify-between">
          <div>
            <MovieTitle>{movie.Title}</MovieTitle>
            <Group pt={10}>
              <Rating
                fractions={5}
                value={(movie.imdbRating / 10) * 5}
                readOnly
              />
              <p>|</p>
              <p>{movie.Year}</p>
              <p>|</p>
              <p>{movie.Genre}</p>
            </Group>
            <Spoiler
              maxHeight={100}
              showLabel="Show more"
              hideLabel="Show less"
              className="mt-5 font-semibold mb-9"
            >
              {movie.Plot}
            </Spoiler>
            {renderDataMovie.map((data) => (
              <ListMovieData
                key={data.subject}
                subject={data.subject}
                value={data.value}
              />
            ))}
          </div>
          {added ? (
            <div className="flex items-center gap-x-4 pb-5">
              <img src="../check.png" alt="check" className="w-8" />
              <p>has been added to the watchlist</p>
            </div>
          ) : (
            <Button
              size="md"
              bg={"#5CB338"}
              className="w-[180px] mt-9 md:mt-0 hover:scale-105 transition-all"
              onClick={handleWatchlist}
            >
              Add to playlist
            </Button>
          )}
        </Box>
      </Flex>
      {session === null && <MyModal opened={opened} setOpened={setOpened} />}
      {session !== null && (
        <Dialog
          opened={notif}
          onClose={() => setNotif(false)}
          withCloseButton
          radius="md"
          size="lg"
        >
          <Group>
            <img
              src="../check.png"
              alt="check"
              className="w-7 md:w-8 lg:w-10"
            />
            <p className="font-semibold text-sm md:text-base lg:text-lg">
              Movie successfully added
            </p>
          </Group>
        </Dialog>
      )}
    </Container>
  );
};

export default DetailContainer;
