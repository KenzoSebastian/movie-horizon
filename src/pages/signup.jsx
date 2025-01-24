import { Box, Button, Title } from "@mantine/core";
import Background from "../component/Elements/Background";
import { useEffect, useState } from "react";
import { supabase } from "../../database/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const SignUp = () => {
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

  useEffect(() => {
    session && console.log(session.user.email);
  }, [session]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  if (!session) {
    return (
      <Box className="flex justify-center min-h-screen items-center">
        <Background />
        <Auth supabaseClient={supabase} theme={ThemeSupa} />
        <Button variant="outline" onClick={handleSignIn}>Sign In With Google</Button>
      </Box>
    );
  } else {
    return (
      <div>
        <h2>{session.user.email}</h2>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
  // return (
  //   <Box className="flex justify-center min-h-screen items-center">
  //     <Background />
  //     <Box>
  //       <Title>Sign Up</Title>
  //     </Box>
  //   </Box>
  // );
};

export default SignUp;
