import { Container } from "@mantine/core";

const Wrapper = ({ children }) => {
  return (
    <Container pt={120} size={"xl"}>
      {children}
    </Container>
  );
};

export default Wrapper;
