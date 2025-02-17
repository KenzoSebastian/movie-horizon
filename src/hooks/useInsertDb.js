import { useEffect } from "react";
import { supabase } from "../../database/supabaseClient";

const useInsertDb = () => {
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (user === null) return;
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", user.id);
        if (data.length === 0) {
          console.log("buat data baru");
          await supabase.from("users").insert({
            user_id: user.id,
            email: user.email,
            fullname: user.user_metadata.full_name || "Guest",
            avatar: user.user_metadata.avatar_url || "./guest.png",
            is_login: true,
          });
        }
        if (error) throw error;
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return;
};

export default useInsertDb;
