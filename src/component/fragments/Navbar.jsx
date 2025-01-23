import {
  Box,
  Container,
  Flex,
  Group,
} from "@mantine/core";
import AnchorNavbar from "../Elements/AnchorNavbar";
import MyButton from "../Elements/MyButton";
import HamburgerMenu from "../Elements/HamburgerMenu";

const Navbar = () => {
  return (
    <Box
      py={"xl"}
      px={20}
      className="fixed w-full top-0 z-50 backdrop-blur-[5px] bg-navbar/70"
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
            <MyButton variant="outline" c={"#5CB338"} visibleFrom="sm">
              Sign Up
            </MyButton>
            <MyButton bg={"#5CB338"} visibleFrom="sm">
              Sign In
            </MyButton>
            <HamburgerMenu />
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
