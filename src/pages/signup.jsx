import { Box, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import Background from "../component/Elements/Background";
import AuthForm from "../component/fragments/AuthForm";
import { supabase } from "../../database/supabaseClient";
import { useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";

const SignUp = () => {
  const [error, setError] = useState(null);
  const handleSubmit = async (values) => {
    console.log(values.email, values.password);
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    console.log(data);
    console.log(error);
    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/signin";
    }
  };

  return (
    <Box className="flex justify-center min-h-screen items-center">
      <Background />
      <Box
        p="lg"
        m="xl"
        className="w-full md:w-2/3 lg:w-2/5 rounded-2xl backdrop-blur-[5px] bg-navbar/10"
      >
        <Title mb={"xl"} className="text-primary">
          Sign Up
        </Title>
        <AuthForm titleButton="Sign Up" handleSubmit={handleSubmit} />
        {error && <p className="text-center mt-2 text-sm text-red-500">
          <BiSolidErrorCircle size={18} className="inline-block mr-2" />
          {error}
        </p>}
        <p className="text-center mt-5">
          Have an account?{" "}
          <Link to="/signin" className="text-primary">
            Sign Up
          </Link>
        </p>
      </Box>
    </Box>
  );
};

export default SignUp;
