import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSession } from "../redux/slices/session";
import { supabase } from "../../database/supabaseClient";

const useDispatchSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session));
    });
  });

  return;
};

export default useDispatchSession;
