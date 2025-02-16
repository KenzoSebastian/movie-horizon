import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabaseClient";

export const useAuthGoogle = () => {
  const handleSignInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  return handleSignInWithGoogle;
};

export const useAuthSignUp = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = async (values) => {
    setDisabled(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) throw error;
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    setDisabled(false);
  };
  return { handleSignUp, error, disabled };
};

export const useAuthLogout = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return handleLogout;
};
