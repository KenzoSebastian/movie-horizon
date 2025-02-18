import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Rating,
  Spoiler,
} from "@mantine/core";
import ListMovieData from "../Elements/ListMovieData";
import MovieTitle from "../Elements/MovieTitle";
import SkeletonDetail from "../Elements/SkeletonDetail";
import { useEffect, useState } from "react";
import MyModal from "../Elements/MyModal";
import { useSelector } from "react-redux";
import { supabase } from "../../../database/supabaseClient";

const DetailContainer = ({ movie }) => {
  const session = useSelector((state) => state.session.data);
  const [opened, setOpened] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (session === null || movie === null) return;
    supabase
      .from("watchlist")
      .select("*")
      .eq("user_id", session.user.id)
      .eq("id_movie", movie.imdbID)
      .then(({ data, error }) => {
        if (error) throw error;
        console.log(data);
        if (data.length > 0) {
          setAdded(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie, session]);

  if (movie === null) return <SkeletonDetail />;

  const handleWatchlist = async () => {
    if (session === null) {
      setOpened(true);
      return;
    }
    try {
      const { data, error } = await supabase
        .from("watchlist")
        .insert({ user_id: session.user.id, id_movie: movie.imdbID });
      if (error) throw error;
      setAdded(true);
    } catch (error) {
      console.log(error);
    }
  };

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
    </Container>
  );
};

export default DetailContainer;
