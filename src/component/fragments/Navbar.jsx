import { Box, Button, Container, Dialog, Flex, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import useNavbar from "../../hooks/useNavbar";
import AnchorNavbar from "../Elements/AnchorNavbar";
import HamburgerMenu from "../Elements/HamburgerMenu";
import MyDrawer from "../Elements/MyDrawer";
import MyModal from "../Elements/MyModal";

const Navbar = () => {
  const {
    session,
    user,
    openedModal,
    setOpenedModal,
    openedDrawer,
    setOpenedDrawer,
    notif,
    setNotif,
  } = useNavbar();
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
              <AnchorNavbar to="/search">Search</AnchorNavbar>
              {session === null ? (
                <AnchorNavbar to="#" onClick={() => setOpenedModal(true)}>
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
                    {user === null ? "" : user.fullname}
                  </p>
                  <img
                    src={user === null ? "../guest.png" : user.avatar}
                    alt="avatar"
                    className="w-8 md:w-10 rounded-full hover:scale-105 transition-all cursor-pointer"
                    onClick={() => setOpenedDrawer(true)}
                  />
                </div>
              )}
              <HamburgerMenu />
            </Group>
          </Flex>
        </Container>

        {session === null && (
          <MyModal opened={openedModal} setOpened={setOpenedModal} />
        )}
        {session !== null && user !== null && (
          <MyDrawer
            openedDrawer={openedDrawer}
            setOpenedDrawer={setOpenedDrawer}
            user={user}
            setNotif={setNotif}
          />
        )}

        <Dialog
          opened={notif.status}
          onClose={() => setNotif({ status: false, message: "" })}
          withCloseButton
          radius="md"
          size="lg"
        >
          <Group>
            <img
              src={notif.imgSrc}
              alt="check"
              className="w-7 md:w-8 lg:w-10"
            />
            <p className="font-semibold text-sm md:text-base lg:text-lg">
              {notif.message}
            </p>
          </Group>
        </Dialog>
      </Box>
  );
};

export default Navbar;
