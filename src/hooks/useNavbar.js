import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../context/LogOut";
import { setSession } from "../redux/slices/session";
import { setUser } from "../redux/slices/user";

const useNavbar = () => {
  const session = useSelector((state) => state.session.data);
  const user = useSelector((state) => state.user.data);
  const [openedModal, setOpenedModal] = useState(false);
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const [notif, setNotif] = useState({
    status: false,
    message: "",
    imgSrc: "",
  });
  const { logOut, setLogOut } = useContext(LogOut);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notif.status) return;
    setTimeout(() => {
      const notifMessage = notif.message;
      if (notifMessage.includes("Successfully")) {
        setNotif({ status: false, message: "", imgSrc: "../check.png" });
      } else {
        setNotif({ status: false, message: "", imgSrc: "../cancel.png" });
      }
    }, 3000);
  }, [notif]);

  useEffect(() => {
    if (!logOut.status) return;
    setNotif({
      status: true,
      message: logOut.message,
      imgSrc: logOut.imgSrc,
    });
    dispatch(setUser(null));
    dispatch(setSession(null));
    setLogOut({ status: false, message: "", imgSrc: "" });
  }, [logOut]);

  return {
    session,
    user,
    openedModal,
    setOpenedModal,
    openedDrawer,
    setOpenedDrawer,
    notif,
    setNotif,
  };
};

export default useNavbar;
