import { useEffect, useState } from "react";
import { supabase } from "../../database/supabaseClient";
import { useSelector } from "react-redux";

const useDetailMovie = (movie) => {
  const session = useSelector((state) => state.session.data);
  const [opened, setOpened] = useState(false);
  const [added, setAdded] = useState(false);
  const [notif, setNotif] = useState(false);

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
        console.log(error);
      });
  }, [movie, session]);

  useEffect(() => {
    if (!notif) return;
    setTimeout(() => {
      setNotif(false);
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
      setNotif(true);
    } catch (error) {
      console.log(error);
    }
  };

  return { session, opened, setOpened, added, notif, setNotif, handleWatchlist };
};

export default useDetailMovie;
