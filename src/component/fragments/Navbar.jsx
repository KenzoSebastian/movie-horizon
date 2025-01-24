import { Box, Button, Container, Flex, Group } from "@mantine/core";
import AnchorNavbar from "../Elements/AnchorNavbar";
import HamburgerMenu from "../Elements/HamburgerMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      py={"xl"}
      px={20}
      className="fixed w-full top-0 z-50 backdrop-blur-[5px] bg-navbar/80"
    >
      <Container size={"xl"}>
        <Flex justify={"space-between"}>
          <h1 className="text-2xl capitalize font-bold text-white md:text-3xl">
            Movie Horizon
          </h1>
          <Group
            w={"40%"}
            justify={"end"}
            gap={75}
            align={"center"}
            visibleFrom="md"
          >
            <AnchorNavbar to="/">Home</AnchorNavbar>
            <AnchorNavbar to="#">Search</AnchorNavbar>
            <AnchorNavbar to="#">My Playlist</AnchorNavbar>
          </Group>
          <Group>
            <Button size="md" radius={"md"} variant="outline" c={"#5CB338"} visibleFrom="sm">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button size="md" radius={"md"} bg={"#5CB338"} visibleFrom="sm">
              <Link to="/signin">Sign In</Link>
            </Button>
            <HamburgerMenu />
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
