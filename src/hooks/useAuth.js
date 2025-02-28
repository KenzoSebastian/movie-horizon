import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabaseClient";
import { LogOut } from "../context/LogOut";

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
      console.log(error.message || error);
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

export const useAuthLogout = (setOpenedDrawer, user) => {
  const { setLogOut } = useContext(LogOut);
  const handleLogout = async () => {
    setOpenedDrawer(false);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      const {error: updateError } = await supabase
        .from("users")
        .update({
          is_login: false,
        })
        .eq("user_id", user.user_id);
      if (updateError) throw updateError;
      setLogOut({
        status: true,
        message: "Successfully Logged Out",
        imgSrc: "../check.png",
      });
    } catch (error) {
      setLogOut({
        status: true,
        message: "Failed to Log Out",
        imgSrc: "../cancel.png",
      });
      console.log(error.message || error);
    }
  };
  return handleLogout;
};
