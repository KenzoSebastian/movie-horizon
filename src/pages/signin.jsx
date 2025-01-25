import { Box, Button, Title } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Background from "../component/Elements/Background";
import AuthForm from "../component/fragments/AuthForm";
import { useOAuthGoogle } from "../hooks/useOAuthGoogle";
import { supabase } from "../../database/supabaseClient";
import { useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";

const SignIn = () => {
  const { handleSignIn } = useOAuthGoogle();
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    console.log(values.email, values.password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      setError(error.message);
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
          Sign In
        </Title>
        <AuthForm titleButton="Sign In" handleSubmit={handleSubmit} />
        {error && (
          <p className="text-center mt-2 text-sm text-red-500">
            <BiSolidErrorCircle size={18} className="inline-block mr-2" />
            {error}
          </p>
        )}
        <Box className="flex justify-between items-center gap-4 mt-5">
          <span className="h-[1px] bg-white flex-1"></span>
          <Title order={4} className="text-center text-normal">
            or continue with
          </Title>
          <span className="h-[1px] bg-white flex-1"></span>
        </Box>
        <Box className="flex justify-center">
          <Button
            radius="sm"
            size="sm"
            c={"black"}
            my={"lg"}
            className="bg-white flex items-center hover:bg-gray-100 hover:scale-105 transition-all duration-200"
            onClick={handleSignIn}
          >
            <FcGoogle className="mr-2" size={18} />
            Sign In With Google
          </Button>
        </Box>
        <p className="text-center mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </Box>
    </Box>
  );
};

export default SignIn;
