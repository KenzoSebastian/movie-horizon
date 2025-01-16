import { Card, Image } from "@mantine/core";

const CardSlide = ({ movie }) => {
  return (
    <Card
      shadow="sm"
      m={15}
      radius="md"
      withBorder
      w="90%"
      className="hover:scale-105 transition-all duration-300 cursor-pointer absolute"
      onClick={() => {}}
    >
      <Card.Section>
        <Image src={movie ? movie.Poster : "https://placehold.co/230x340"} alt="" className="h-[370px] sm:h-[570px] lg:h-[340px]"  />
      </Card.Section>
    </Card>
  );
};

export default CardSlide;
