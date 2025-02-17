import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabaseClient";

export const useAuthSignUp = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSignUp = async (values) => {
    setDisabled(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) throw error;

      const allKeys = Object.keys(localStorage);
      if (allKeys.length >= 2) {
        const sessionKey = allKeys.find((key) => key.includes("auth-token"));
        localStorage.removeItem(sessionKey);
        setOpen(true);
      }
    } catch (error) {
      setError(error.message);
    }
    setDisabled(false);
  };
  return { handleSignUp, error, disabled, open, setOpen };
};

export const useAuthGoogle = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  return handleSignInWithGoogle;
};

export const useAuthSignIn = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (values) => {
    setDisabled(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
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
  return { handleSignIn, error, disabled };
};

export const useAuthLogout = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return handleLogout;
};
