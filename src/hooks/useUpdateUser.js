import { useForm, zodResolver } from "@mantine/form";
import { set, z } from "zod";
import { emailSchema, usernameSchema } from "../utils/validationSchemas";
import { useRef, useState } from "react";
import { supabase } from "../../database/supabaseClient";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";

const useUpdateUser = (user, setOpenedDrawer) => {
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
    setDisabled(true);
    console.log(image.name);
    try {
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
        .eq("user_id", user.user_id).select("*");
      if (updateError) throw updateError;
      console.log(updateData);
      dispatch(setUser(updateData[0])); 
    } catch (error) {
      console.log(error.message || error);
    }
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
