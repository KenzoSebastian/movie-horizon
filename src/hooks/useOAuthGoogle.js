import { useEffect, useState } from "react";
import { supabase } from "../../database/supabaseClient";

export const useOAuthGoogle = () => {
    const [session, setSession] = useState(null);
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
  
      return () => subscription.unsubscribe();
    }, []);
  
    // useEffect(() => {
    //   session && console.log(session.user.email);
    // }, [session]);
  
    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut();
    }
  
    const handleSignIn = async () => {
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
  }
  
    return { session, handleSignOut, handleSignIn };
}