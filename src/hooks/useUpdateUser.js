import { useForm, zodResolver } from "@mantine/form";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { supabase } from "../../database/supabaseClient";
import { setUser } from "../redux/slices/user";
import { emailSchema, usernameSchema } from "../utils/validationSchemas";

const useUpdateUser = (setOpenedDrawer, user, setNotif) => {
  const [disabled, setDisabled] = useState(false);
  const inputFileRef = useRef(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: user.email,
      username: user.fullname,
      // avatar: user.avatar,
    },
    validateInputOnChange: true,
    validate: zodResolver(
      z.object({
        email: emailSchema,
        username: usernameSchema,
      })
    ),
  });

  const handleOnCloseDrawer = () => {
    setOpenedDrawer(false);
    form.reset();
  };

  const handleOnSubmit = async (value) => {
    if (
      value.email === user.email &&
      value.username === user.fullname &&
      image === null
    ) {
      return;
    }
    setDisabled(true);
    setOpenedDrawer(false);
    dispatch(setUser(null));
    try {
      if (image !== null) {
        const { data, error } = await supabase.storage
          .from("avatar")
          .upload(image.name, image);
        if (error) throw error;

        const {
          data: { publicUrl },
        } = supabase.storage.from("avatar").getPublicUrl(image.name);
        const { data: updateData, error: updateError } = await supabase
          .from("users")
          .update({
            email: value.email,
            fullname: value.username,
            avatar: publicUrl,
          })
          .eq("user_id", user.user_id)
          .select("*");

        if (updateError) throw updateError;
        dispatch(setUser(updateData[0]));
        setNotif({ status: true, message: "Profile successfully updated" });
      } else {
        const { data, error } = await supabase
          .from("users")
          .update({
            email: value.email,
            fullname: value.username,
          })
          .eq("user_id", user.user_id)
          .select("*");

        if (error) throw error;
        dispatch(setUser(data[0]));
        setNotif({ status: true, message: "Profile successfully updated" });
      }
    } catch (error) {
      setNotif({ status: true, message: "Failed to update profile" });
      dispatch(setUser(user));
      console.log(error.message || error);
    }
    setImage(null);
    setDisabled(false);
  };

  const handleInputFile = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (e) => setImage(e.target.files[0]);

  return {
    form,
    disabled,
    inputFileRef,
    handleOnCloseDrawer,
    handleOnSubmit,
    handleInputFile,
    handleFileChange,
  };
};

export default useUpdateUser;
