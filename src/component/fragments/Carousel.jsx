import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import MyCarouselSlide from "../Elements/MyCarouselSlide";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/movie.service";

const MyCarousel = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies("transformers", (data) => {
      setMovies(data);
    });
  }, []);
  return (
    <Carousel
      withIndicators
      slideGap={"md"}
      height={650}
      pt={120}
      slideSize={{ xs: "100%", sm: "100%", md: "80%", lg: "60%" }}
      loop
    >
      {movies !== null &&
        movies.map((movie, i) => {
          if (i >= 5) return null;
          return (
            <Carousel.Slide key={movie.imdbID}>
              <MyCarouselSlide id={movie.imdbID} />
            </Carousel.Slide>
          );
        })}
      {/* <Carousel.Slide>
        <MyCarouselSlide />
      </Carousel.Slide>
      <Carousel.Slide>
        <MyCarouselSlide />
      </Carousel.Slide>
      <Carousel.Slide>
        <MyCarouselSlide />
      </Carousel.Slide> */}
    </Carousel>
  );
};

export default MyCarousel;
