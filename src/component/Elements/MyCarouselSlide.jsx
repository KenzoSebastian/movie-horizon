import {
  BackgroundImage,
  Badge,
  Box,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import MyButton from "../Elements/MyButton";
import { useEffect, useState } from "react";
import { getSingleMovie } from "../../services/movie.service";

const MyCarouselSlide = ({ id }) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getSingleMovie(id, (data) => {
      setMovie(data);
    });
  }, []);
  return (
    <BackgroundImage
      src={movie ? movie.Poster : "https://placehold.co/230x340"}
      className="relative"
    >
      <Box
        h={"100%"}
        c={"white"}
        px={40}
        pt={120}
        className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent"
      >
        <div className="absolute bottom-20 left-75">
          <Title tt={"capitalize"} className="text-2xl md:text-3xl lg:text-4xl">
            {movie ? movie.Title : ""}
          </Title>
          <Flex gap={"md"} align={"center"}>
            <Title
              tt={"capitalize"}
              className="text-xl md:text-2xl lg:text-3xl"
            >
              {movie ? movie.Year : ""}
            </Title>
            <Badge
              bg={"yellow.8"}
              py={"sm"}
              px={"md"}
              className="text-[10px] md:text-xs lg:text-sm"
            >
              {movie ? movie.Genre : ""}
            </Badge>
          </Flex>

          <Text w="80%" lineClamp={3} my={"md"}>
            {movie ? movie.Plot : ""}
          </Text>
          <MyButton bg={"blue.2"} c={"black"} px={"xl"}>
            Watch
          </MyButton>
        </div>
      </Box>
      <Image
        src={movie ? movie.Poster : "https://placehold.co/230x340"}
        alt="background"
        h={650}
        fit="contain"
      />
    </BackgroundImage>
  );
};

export default MyCarouselSlide;
