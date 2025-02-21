import { useEffect } from "react";
import { supabase } from "../../database/supabaseClient";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";

const useInsertDb = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (user === null) return;
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", user.id);
        if (data.length > 0) {
          dispatch(setUser(data[0]));
          return;
        }
        console.log("buat data baru");
        const response = await supabase.from("users").insert({
          user_id: user.id,
          email: user.email,
          fullname: user.user_metadata.full_name || "Guest",
          avatar: "../guest.png",
          is_login: true,
        }).select("*");
        dispatch(setUser(response.data[0]));
        if (response.error || error) throw error;
      } catch (error) {
        console.log(error.message || error); 
      }
    });
  }, []);

  return;
};

export default useInsertDb;
