import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useNavbar = () => {
  const session = useSelector((state) => state.session.data);
  const user = useSelector((state) => state.user.data);
  const [openedModal, setOpenedModal] = useState(false);
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const [notif, setNotif] = useState({ status: false, message: "" });

  useEffect(() => {
    if (!notif.status) return;
    setTimeout(() => {
      setNotif({ status: false, message: "" });
    }, 3000);
  }, [notif]);

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
