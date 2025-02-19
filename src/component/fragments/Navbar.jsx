import { Box, Button, Container, Flex, Group } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AnchorNavbar from "../Elements/AnchorNavbar";
import HamburgerMenu from "../Elements/HamburgerMenu";
import MyModal from "../Elements/MyModal";

const Navbar = ({ ...props }) => {
  const session = useSelector((state) => state.session.data);
  const user = useSelector((state) => state.user.data);
  const [opened, setOpened] = useState(false);
  return (
    <Box
      py={"xl"}
      px={20}
      className="fixed w-full top-0 z-50 backdrop-blur-[5px] bg-navbar/80"
    >
      <Container size={"xl"}>
        <Flex justify={"space-between"} align={"center"}>
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
            {session === null ? (
              <AnchorNavbar to="#" onClick={() => setOpened(true)}>
                Watchlist
              </AnchorNavbar>
            ) : (
              <AnchorNavbar to="/watchlist">Watchlist</AnchorNavbar>
            )}
          </Group>
          <Group>
            {session === null ? (
              <>
                <Link to="/signup" className="w-fit">
                  <Button
                    size="md"
                    radius={"md"}
                    variant="outline"
                    c={"#5CB338"}
                    visibleFrom="sm"
                    className="hover:scale-105 transition-all border-primary"
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to="/signin" className="w-fit">
                  <Button
                    size="md"
                    radius={"md"}
                    visibleFrom="sm"
                    className="bg-primary hover:bg-primary hover:scale-105 transition-all"
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            ) : (
              <div className="hidden sm:flex items-center w-[300px] justify-end gap-x-5">
                <p className="hidden md:block text-xl font-semibold text-white">
                  {user === null ? "Guest" : user.fullname}
                </p>
                <img
                  src={user === null ? "../guest.png" : user.avatar}
                  alt="avatar"
                  className="w-8 md:w-10 rounded-full hover:scale-105 transition-all cursor-pointer"
                />
              </div>
            )}
            <HamburgerMenu />
          </Group>
        </Flex>
      </Container>

      {session === null && <MyModal opened={opened} setOpened={setOpened} />}
    </Box>
  );
};

export default Navbar;
