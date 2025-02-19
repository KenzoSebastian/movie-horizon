import { useEffect, useState } from "react";
import { supabase } from "../../database/supabaseClient";
import { useSelector } from "react-redux";

const useDetailMovie = (movie) => {
  const session = useSelector((state) => state.session.data);
  const [opened, setOpened] = useState(false);
  const [added, setAdded] = useState(false);
  const [notif, setNotif] = useState({ status: false, message: "" });

  useEffect(() => {
    if (session === null || movie === null) return;
    supabase
      .from("watchlist")
      .select("*")
      .eq("user_id", session.user.id)
      .eq("id_movie", movie.imdbID)
      .then(({ data, error }) => {
        if (error) throw error;
        if (data.length > 0) {
          setAdded(true);
        }
      })
      .catch((error) => {
        console.log(error.message || error);
      });
  }, [movie, session]);

  useEffect(() => {
    if (!notif.status) return;
    setTimeout(() => {
      setNotif({ status: false, message: "" });
    }, 3000);
  }, [notif]);

  const handleWatchlist = async () => {
    if (session === null) {
      setOpened(true);
      return;
    }
    try {
      const { data, error } = await supabase
        .from("watchlist")
        .insert({ user_id: session.user.id, id_movie: movie.imdbID });
      if (error) throw error;
      setAdded(true);
      setNotif({ status: true, message: "Movie successfully added" });
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleRemoveWatchlist = async () => {
    try {
      const { data, error } = await supabase
        .from("watchlist")
        .delete()
        .eq("id_movie", movie.imdbID);
      if (error) throw error;
      setAdded(false);
      setNotif({ status: true, message: "Movie successfully removed" });
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return {
    session,
    opened,
    setOpened,
    added,
    notif,
    setNotif,
    handleWatchlist,
    handleRemoveWatchlist,
  };
};

export default useDetailMovie;
