import { Box, Title } from "@mantine/core";
import Background from "../component/Elements/Background";

const SignIn = () => {
  return (
    <Box className="flex justify-center min-h-screen items-center">
      <Background />
      <Box>
        <Title>Sign In</Title>
      </Box>
    </Box>
  );
};

export default SignIn;
