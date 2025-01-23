import { useRef, useState } from "react";

const useHamburgerMenu = () => {
  const [opened, setOpened] = useState(false);
  const list1 = useRef(null);
  const list2 = useRef(null);
  const list3 = useRef(null);

  const handleOnchangeMenu = () => {
    list1.current.classList.toggle("list-active1");
    list2.current.classList.toggle("list-active2");
    list3.current.classList.toggle("list-active3");
    setOpened((openCurrent) => !openCurrent);
  };
  const handleOncloseMenu = () => {
    list1.current.classList.remove("list-active1");
    list2.current.classList.remove("list-active2");
    list3.current.classList.remove("list-active3");
    setOpened(false);
  };
  return { opened, handleOnchangeMenu, handleOncloseMenu, list1, list2, list3 };
};

export default useHamburgerMenu;
