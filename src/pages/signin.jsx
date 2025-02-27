import { Box, Button, Title } from "@mantine/core";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Background from "../component/Elements/Background";
import AuthForm from "../component/fragments/AuthForm";
import { useAuthGoogle, useAuthSignIn } from "../hooks/useAuth";

const SignIn = () => {
  const handleSignInWithGoogle = useAuthGoogle();
  const { handleSignIn, error, disabled } = useAuthSignIn();

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
        <AuthForm
          titleButton="Sign In"
          handleSubmit={handleSignIn}
          disabled={disabled}
        />
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
            onClick={handleSignInWithGoogle}
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
