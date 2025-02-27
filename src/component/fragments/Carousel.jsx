import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { useGetMovies } from "../../hooks/useGetMovies";
import MyCarouselSlide from "../Elements/MyCarouselSlide";
import SkeletonCarousel from "../Elements/SkeletonCarousel";

const MyCarousel = ({ query }) => {
  const movies = useGetMovies(query);
  if (movies.length === 0) {
    return (
      <Carousel
        withIndicators
        slideGap={"md"}
        height={650}
        pt={120}
        initialSlide={2}
        slideSize={{ xs: "100%", sm: "100%", md: "80%", lg: "60%" }}
        loop
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Carousel.Slide key={i}>
            <SkeletonCarousel />
          </Carousel.Slide>
        ))}
      </Carousel>
    );
  };

  return (
    <Carousel
      withIndicators
      slideGap={"md"}
      height={650}
      pt={120}
      initialSlide={2}
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
    </Carousel>
  );
};

export default MyCarousel;
