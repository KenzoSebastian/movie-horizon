import { useForm, zodResolver } from "@mantine/form";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { supabase } from "../../database/supabaseClient";
import { setUser } from "../redux/slices/user";
import { emailSchema, usernameSchema } from "../utils/validationSchemas";

const useUpdateUser = (setOpenedDrawer, user, setNotif) => {
  const inputFileRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputUsernameRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (image !== null) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);
    }
  }, [image]);
  
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
    setImage(null);
    setImageUrl(null);
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
        const fileName = `${Date.now().toString()}_${image.name}`;
        const { data, error } = await supabase.storage
          .from("avatar")
          .upload(fileName, image, {
            upsert: true,
          });
        if (error) throw error;

        const {
          data: { publicUrl },
        } = supabase.storage.from("avatar").getPublicUrl(fileName);
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
        setNotif({
          status: true,
          message: "Profile Successfully updated",
          imgSrc: "../check.png",
        });
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
        setNotif({
          status: true,
          message: "Profile Successfully updated",
          imgSrc: "../check.png",
        });
      }
    } catch (error) {
      setNotif({
        status: true,
        message: "Failed to Update Profile",
        imgSrc: "../cancel.png",
      });
      dispatch(setUser(user));
      console.log(error.message || error);
    }
    setImage(null);
    setDisabled(false);
  };

  const handleInputFile = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return {
    form,
    disabled,
    inputFileRef,
    inputEmailRef,
    inputUsernameRef,
    handleOnCloseDrawer,
    handleOnSubmit,
    handleInputFile,
    handleFileChange,
    imageUrl,
  };
};

export default useUpdateUser;
