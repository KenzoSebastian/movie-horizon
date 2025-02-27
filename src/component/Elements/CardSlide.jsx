import { Card, Image } from "@mantine/core";

const CardSlide = ({ movie }) => {
  return (
    <Card
      shadow="sm"
      m={15}
      radius="md"
      withBorder
      w="90%"
      className="hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <Card.Section>
        <Image src={movie.Poster} alt={movie.Title} className="image-height" />
      </Card.Section>
    </Card>
  );
};

export default CardSlide;
