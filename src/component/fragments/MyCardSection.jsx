import { Carousel } from "@mantine/carousel";
import { Container, Skeleton } from "@mantine/core";
import CardSlide from "../Elements/CardSlide";
import classes from "./cardSection.module.css";
import { Link } from "react-router-dom";
import useGetMovies from "../../hooks/useGetMovies";

const MyCardSection = ({ ...props }) => {
  const movies = useGetMovies(props.query);
  return (
    <Container c={"white"} size={"xl"} px={20} py={40}>
      <h1 className="text-2xl capitalize font-bold text-white md:text-3xl mb-5">
        {props.query}
      </h1>
      <Carousel
        height={650}
        slideSize={{ base: "70%", sm: "50%", md: "20%" }}
        align="start"
        className="max-h-[400px] sm:max-h-[600px] lg:max-h-[370px]"
        classNames={classes}
        slidesToScroll={{ base: 1, sm: 2, md: 2, lg: 5, xl: 5 }}
      >
        {movies.length === 0 &&
          Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Slide key={index}>
              <Skeleton
                radius="md"
                width="90%"
                className="h-[370px] sm:h-[570px] lg:h-[340px]"
              />
            </Carousel.Slide>
          ))}
        {movies !== null &&
          movies.map((movie) => {
            return (
              <Carousel.Slide key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <CardSlide movie={movie} />
                </Link>
              </Carousel.Slide>
            );
          })}
      </Carousel>
    </Container>
  );
};

export default MyCardSection;
