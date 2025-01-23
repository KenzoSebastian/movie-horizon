import { Group } from "@mantine/core";

const ListMovieData = ({ subject, value }) => {
  return (
    <Group mb={5}>
      <p>{subject} :</p>
      <p className="font-semibold">{value}</p>
    </Group>
  );
};

export default ListMovieData;
