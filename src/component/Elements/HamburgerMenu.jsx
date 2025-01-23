import { Box, Menu} from "@mantine/core";
import AnchorNavbar from "./AnchorNavbar";
import useHamburgerMenu from "../../hooks/useHamburgerMenu";
const HamburgerMenu = () => {
  const { opened, handleOnchangeMenu, handleOncloseMenu, list1, list2, list3 } = useHamburgerMenu();
  return (
    <>
      <Menu
        shadow="md"
        width={200}
        opened={opened}
        onChange={handleOnchangeMenu}
        onClose={handleOncloseMenu}
      >
        <Menu.Target>
          <Box
            ml={20}
            className="w-7 h-7 flex flex-col items-center justify-around cursor-pointer hover:scale-105 transition"
            hiddenFrom="md"
          >
            <span ref={list1} className="list-hambuger-menu"></span>
            <span ref={list2} className="list-hambuger-menu"></span>
            <span ref={list3} className="list-hambuger-menu"></span>
          </Box>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <AnchorNavbar to="/" size="md">
              Home
            </AnchorNavbar>
          </Menu.Item>
          <Menu.Item>
            <AnchorNavbar to="#" size="md">
              Search
            </AnchorNavbar>
          </Menu.Item>
          <Menu.Item>
            <AnchorNavbar to="#" size="md">
              My Playlist
            </AnchorNavbar>
          </Menu.Item>
          <Menu.Divider my={"sm"} hiddenFrom="sm" />
          <Menu.Item hiddenFrom="sm">
            <AnchorNavbar to="#" size="md">
              Sign Up
            </AnchorNavbar>
          </Menu.Item>
          <Menu.Item hiddenFrom="sm">
            <AnchorNavbar to="#" size="md">
              Sign In
            </AnchorNavbar>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
