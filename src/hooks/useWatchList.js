import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../../database/supabaseClient";

const useWatchList = () => {
  const [movies, setMovies] = useState([]);
  const user = useSelector((state) => state.user.data);
  useEffect(() => {
    if (user === null) return;
    setMovies(null);
    supabase
      .from("watchlist")
      .select("*")
      .eq("user_id", user.user_id)
      .then(({ data, error }) => {
        if (error) throw error;
        setMovies(data);
      })
      .catch((error) => {
        console.log(error.message || error);
      });
  }, [user]);

  return movies;
};

export default useWatchList;
